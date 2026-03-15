import "../styles/Menu.css";
import Assets from "../assets/Assets";
import SignatureMemories from "../components/SignatureMemories/SignatureMemories";
import MenuItemsSection from "../components/MenuItemsSection/MenuItemsSection";
import GuestSaySection from "../components/GuestSaySection/GuestSaySection";

const Menu = () => {
  return (
    <main className="menu-page">
      <section
        className="menu-hero"
        style={{ backgroundImage: `url(${Assets.signatureMemoriesBg})` }}
      >
        <h1 className="menu-hero-title">Menu List</h1>
        <div className="menu-hero-rule" aria-hidden="true" />
      </section>

      <SignatureMemories showMemories={false} />
      <MenuItemsSection />
      <GuestSaySection />
    </main>
  );
};

export default Menu;
