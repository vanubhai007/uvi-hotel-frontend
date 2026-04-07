// src/pages/BookingSuccess.tsx
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import jsPDF from "jspdf";

export default function BookingSuccess() {
  const loc = useLocation();
  const state = (loc.state ?? {}) as Record<string, any>;
  const reservationId = state.reservationId;

  /* ===== PAYMENT STATUS ===== */
  const [paid, setPaid] = useState(false);

  /* ===== PRICE CALCULATION ===== */
  const priceMap: Record<string, number> = {
    "Presidential Suite": 499,
    "Deluxe Suite": 299,
    "Superior Room": 199,
    "Standard Room": 159,
  };

  const pricePerNight = priceMap[state.roomType] ?? 199;
  const nights = Number(state.nights ?? 1);
  const subtotal = pricePerNight * nights;
  const taxRate = 0.12;
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + tax;

  /* ===== PDF RECEIPT (FIXED) ===== */
  const downloadReceipt = () => {
    const doc = new jsPDF();

    const dark = "#020617";
    const gray = "#475569";

    /* HEADER */
    doc.setFillColor(14, 165, 233);
    doc.rect(0, 0, 210, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("Luxury Hotel", 20, 22);
    doc.setFontSize(12);
    doc.text("Booking Invoice", 20, 32);

    /* BOOKING DETAILS */
    doc.setTextColor(dark);
    doc.setFontSize(14);
    doc.text("Booking Details", 20, 55);
    doc.line(20, 58, 190, 58);

    const details = [
      ["Reservation ID", reservationId],
      ["Guest Name", state.name],
      ["Email", state.email],
      ["Room Type", state.roomType],
      ["Check-in Date", state.checkIn],
      ["Nights", nights],
      ["Guests", state.guests],
      ["Payment Status", paid ? "PAID" : "UNPAID"],
    ];

    let y = 72;
    details.forEach(([label, value]) => {
      doc.setFontSize(11);
      doc.setTextColor(gray);
      doc.text(String(label), 20, y);

      doc.setFontSize(12);
      doc.setTextColor(dark);
      doc.text(String(value ?? "-"), 120, y);
      y += 10;
    });

    /* BILLING SUMMARY */
    y += 10;
    doc.setFontSize(14);
    doc.text("Billing Summary", 20, y);
    doc.line(20, y + 3, 190, y + 3);
    y += 15;

    const billing = [
      ["Price / Night", `$${pricePerNight}`],
      ["Subtotal", `$${subtotal}`],
      ["Tax (12%)", `$${tax}`],
    ];

    billing.forEach(([label, value]) => {
      doc.setFontSize(11);
      doc.setTextColor(gray);
      doc.text(label, 20, y);

      doc.setFontSize(12);
      doc.setTextColor(dark);
      doc.text(value, 120, y);
      y += 10;
    });

    /* TOTAL BOX */
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(20, y + 2, 170, 16, 4, 4, "F");
    doc.setFontSize(13);
    doc.setTextColor(14, 165, 233);
    doc.text("Total Amount", 30, y + 14);
    doc.text(`$${total}`, 140, y + 14);

    /* FOOTER (NO OVERLAP) */
    const footerY = 285;
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(
      "Thank you for choosing Luxury Hotel. We look forward to hosting you.",
      20,
      footerY
    );
    doc.text(
      "www.luxuryhotel.com | support@luxuryhotel.com",
      20,
      footerY + 7
    );

    doc.save(`Invoice-${reservationId}.pdf`);
  };

  /* ===== UI ===== */
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #020617, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          padding: "32px",
          borderRadius: "28px",
          background: "#020617",
          textAlign: "center",
          position: "relative",
          boxShadow:
            "0 0 30px rgba(0,255,255,0.45), 0 0 55px rgba(255,0,255,0.35)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-3px",
            borderRadius: "30px",
            background:
              "linear-gradient(120deg, #00f0ff, #ff00f7, #00f0ff)",
            filter: "blur(14px)",
            zIndex: -1,
          }}
        />

        <div style={{ fontSize: "56px" }}>🎉</div>
        <h1 style={{ color: "#fff", fontSize: "30px", fontWeight: 800 }}>
          Booking Confirmed
        </h1>

        {/* STATUS BADGE */}
        <div
          style={{
            margin: "10px auto",
            padding: "6px 16px",
            borderRadius: "999px",
            fontWeight: 700,
            width: "fit-content",
            color: paid ? "#022c22" : "#450a0a",
            background: paid ? "#22c55e" : "#f87171",
          }}
        >
          {paid ? "PAID ✅" : "UNPAID ❌"}
        </div>

        {/* BILL SUMMARY */}
        <div
          style={{
            margin: "18px 0",
            padding: "14px",
            borderRadius: "14px",
            background: "rgba(0,255,255,0.08)",
            color: "#e5e7eb",
          }}
        >
          <p>Guest: <strong>{state.name}</strong></p>
          <p>Room: {state.roomType}</p>
          <p>Price / Night: ${pricePerNight}</p>
          <p>Subtotal: ${subtotal}</p>
          <p>Tax (12%): ${tax}</p>
          <p style={{ fontSize: "18px", color: "#00f0ff" }}>
            Total: ${total}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {!paid && (
            <button
              onClick={() => setPaid(true)}
              style={{
                padding: "14px",
                borderRadius: "999px",
                fontWeight: 700,
                cursor: "pointer",
                background: "linear-gradient(90deg, #22c55e, #86efac)",
              }}
            >
              💳 Pay Now
            </button>
          )}

          <button
            onClick={downloadReceipt}
            style={{
              padding: "14px",
              borderRadius: "999px",
              fontWeight: 700,
              cursor: "pointer",
              background: "linear-gradient(90deg, #00f0ff, #ff00f7)",
            }}
          >
            🧾 Download Invoice (PDF)
          </button>
        </div>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/rooms" style={linkStyle}>Rooms</Link>
        </div>
      </div>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  padding: "10px 22px",
  borderRadius: "999px",
  border: "1px solid #00f0ff",
  color: "#00f0ff",
  textDecoration: "none",
  fontWeight: 600,
};

