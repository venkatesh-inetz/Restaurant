/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { ALL_PRODUCTS, getProductById } from "../data/menuData";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  // Seeded to match the screenshots (badge shows 2, and Cart has 2 items).
  const [cart, setCart] = useState(() => ({
    "appetizers-0": 1,
    "appetizers-1": 1,
  }));

  const [lastOrder, setLastOrder] = useState(null);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const product = getProductById(id);
        if (!product) return null;
        return { product, qty };
      })
      .filter(Boolean);
  }, [cart]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, it) => sum + it.qty, 0),
    [cartItems],
  );

  const addToCart = (productId, qty = 1) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + Math.max(1, qty),
    }));
  };

  const setCartQty = (productId, qty) => {
    setCart((prev) => {
      const nextQty = Math.max(0, qty);
      const next = { ...prev };
      if (nextQty === 0) delete next[productId];
      else next[productId] = nextQty;
      return next;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const clearCart = () => setCart({});

  const placeOrder = ({ deliveryMode, customer }) => {
    const subtotal = cartItems.reduce(
      (sum, it) => sum + it.product.price * it.qty,
      0,
    );
    const tax = subtotal * 0.08;
    const deliveryFee = deliveryMode === "delivery" ? 4 : 0;
    const total = subtotal + tax + deliveryFee;

    const order = {
      id: `GN${Math.floor(100000000 + Math.random() * 900000000)}`,
      createdAt: Date.now(),
      deliveryMode,
      customer,
      items: cartItems.map((it) => ({
        id: it.product.id,
        title: it.product.title,
        price: it.product.price,
        qty: it.qty,
      })),
      totals: { subtotal, tax, deliveryFee, total },
    };

    setLastOrder(order);
    clearCart();
    return order;
  };

  const value = {
    products: ALL_PRODUCTS,
    cart,
    cartItems,
    cartCount,
    addToCart,
    setCartQty,
    removeFromCart,
    clearCart,
    lastOrder,
    placeOrder,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};
