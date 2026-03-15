import "../styles/Booking.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const Booking = () => {
  const navigate = useNavigate();

  const year = 2026;
  const monthIndex = 1; // Feb (0-based)

  const [agreed, setAgreed] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState("2026-02-25");
  const [hasPickedDate, setHasPickedDate] = useState(false);

  const calendarCells = useMemo(() => {
    const first = new Date(year, monthIndex, 1);
    const startDow = first.getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const prevMonthDays = new Date(year, monthIndex, 0).getDate();

    const total = 35; // 5x7 grid like screenshot
    const cells = [];
    for (let i = 0; i < total; i += 1) {
      const dayNum = i - startDow + 1;
      let label = "";
      let iso = "";
      let isCurrentMonth = true;

      if (dayNum <= 0) {
        label = String(prevMonthDays + dayNum);
        isCurrentMonth = false;
      } else if (dayNum > daysInMonth) {
        label = String(dayNum - daysInMonth);
        isCurrentMonth = false;
      } else {
        label = String(dayNum);
        const mm = String(monthIndex + 1).padStart(2, "0");
        const dd = String(dayNum).padStart(2, "0");
        iso = `${year}-${mm}-${dd}`;
      }

      cells.push({
        key: i,
        label,
        iso,
        isCurrentMonth,
        isActive: iso === selectedISO,
      });
    }
    return cells;
  }, [monthIndex, selectedISO, year]);

  const displayDate = useMemo(() => {
    if (!hasPickedDate) return "";
    const d = new Date(selectedISO);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [hasPickedDate, selectedISO]);

  return (
    <main className="booking-page">
      <div className="booking-overlay" role="presentation" />

      <section className="booking-modal" role="dialog" aria-modal="true">
        <button
          type="button"
          className="booking-close"
          onClick={() => navigate(-1)}
          aria-label="Close booking"
        >
          x
        </button>

        <header className="booking-head">
          <h1>
            Secure Your Spot, Indulge in
            <br />
            Culinary Delights
          </h1>
          <p>
            Make a reservation today to experience exquisite dishes, attentive
            service, and a
            <br />
            welcoming atmosphere perfect for any occasion.
          </p>
        </header>

        <div className="booking-grid">
          <div className="booking-col">
            <label className="f">
              <span>Full Name</span>
              <input placeholder="Wesly J" />
            </label>

            <label className="f">
              <span>Number of Guests</span>
              <select defaultValue="">
                <option value="" disabled>
                  4 Person
                </option>
                <option value="2">2 Person</option>
                <option value="4">4 Person</option>
                <option value="6">6 Person</option>
              </select>
            </label>

            <label className="f f--date">
              <span>Preferred date/time</span>
              <div className="date-wrap">
                <input
                  className="date-input"
                  type="text"
                  value={displayDate}
                  placeholder="25 February 2026"
                  readOnly
                  onClick={() => setIsCalendarOpen(true)}
                />
                <button
                  type="button"
                  className="date-icon"
                  aria-label="Open calendar"
                  onClick={() => setIsCalendarOpen((v) => !v)}
                >
                  <CalendarDays size={18} strokeWidth={2.2} />
                </button>
              </div>

              {isCalendarOpen ? (
                <div className="calendar" aria-label="Calendar">
                  <div className="cal-head">
                    <button
                      type="button"
                      className="cal-nav"
                      aria-label="Previous"
                    >
                      {"<"}
                    </button>
                    <div className="cal-month">February 2026</div>
                    <button
                      type="button"
                      className="cal-nav"
                      aria-label="Next"
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="cal-grid">
                    {[
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                    ].map((d) => (
                      <div key={d} className="cal-dow">
                        {d}
                      </div>
                    ))}
                    {calendarCells.map((c) => (
                      <button
                        key={c.key}
                        type="button"
                        className={`cal-cell-btn${c.isActive ? " is-active" : ""}${
                          c.isCurrentMonth ? "" : " is-dim"
                        }`}
                        onClick={() => {
                          if (!c.iso) return;
                          setSelectedISO(c.iso);
                          setHasPickedDate(true);
                          setIsCalendarOpen(false);
                        }}
                        disabled={!c.iso}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </label>
          </div>

          <div className="booking-col">
            <label className="f">
              <span>Email Address</span>
              <input placeholder="weslydesigner@mail.com" />
            </label>

            <label className="f">
              <span>Time of Reservation</span>
              <select defaultValue="">
                <option value="" disabled>
                  11:00 PM
                </option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
                <option>11:30 PM</option>
              </select>
            </label>

            <label className="f">
              <span>Special Requests (Optional)</span>
              <select defaultValue="">
                <option value="" disabled>
                  Dietary Restrictions
                </option>
                <option>Dietary Restrictions</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </label>

            <label className="f">
              <span>Additional Notes</span>
              <textarea placeholder="Any other comments or requests" rows={10} />
            </label>

            <label className="agree">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>
                I confirm my reservation and agree to the restaurant policies.
              </span>
            </label>
          </div>
        </div>

        <div className="booking-actions">
          <button type="button" className="reserve" disabled={!agreed}>
            Reserve Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Booking;
