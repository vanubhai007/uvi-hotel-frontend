import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Deluxe Suite",
    checkIn: "",
    nights: 1,
    guests: 1,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone) e.phone = "Phone number required";
    if (!form.checkIn) e.checkIn = "Select check-in date";
    if (Number(form.nights) < 1) e.nights = "Nights must be at least 1";
    if (Number(form.guests) < 1) e.guests = "Guests must be at least 1";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setSubmitting(true);

    // 🔹 auto calculate checkOut
    const checkInDate = new Date(form.checkIn);
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(
      checkOutDate.getDate() + Number(form.nights)
    );

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      roomType: form.roomType,
      checkIn: form.checkIn,
      checkOut: checkOutDate.toISOString().split("T")[0],
      nights: Number(form.nights),
      guests: Number(form.guests),
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/booking",
        payload
      );

      console.log("Saved:", res.data);

      navigate("/booking/success", {
        state: {
          reservationId: res.data?._id || "CONFIRMED",
          ...payload,
        },
      });
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Backend not reachable.");
    } finally {
      setSubmitting(false);
    }
  };

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
          width: "100%",
          maxWidth: "600px",
          padding: "28px",
          borderRadius: "24px",
          background: "#020617",
          position: "relative",
          boxShadow:
            "0 0 25px rgba(0,255,255,0.35), 0 0 45px rgba(255,0,255,0.25)",
        }}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          💖 Book Your Dream Stay
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm text-cyan-200 mb-1">
                {f.label}
              </label>
              <input
                name={f.name}
                type={f.type}
                value={(form as any)[f.name]}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-2 bg-black/40 border border-cyan-500/30 text-white outline-none"
              />
              {errors[f.name] && (
                <p className="text-sm text-pink-400 mt-1">
                  {errors[f.name]}
                </p>
              )}
            </div>
          ))}

<div className="grid grid-cols-3 gap-3">
  <div>
    <label className="block text-xs text-cyan-300 mb-1">
      Check-in
    </label>
    <input
      type="date"
      name="checkIn"
      value={form.checkIn}
      onChange={handleChange}
      className="w-full rounded-lg px-3 py-2 bg-black/40 border border-cyan-500/30 text-white"
    />
  </div>

  <div>
    <label className="block text-xs text-cyan-300 mb-1">
      Nights
    </label>
    <input
      type="number"
      name="nights"
      min={1}
      value={form.nights}
      onChange={handleChange}
      className="w-full rounded-lg px-3 py-2 bg-black/40 border border-cyan-500/30 text-white"
    />
  </div>

  <div>
    <label className="block text-xs text-cyan-300 mb-1">
      Guests
    </label>
    <input
      type="number"
      name="guests"
      min={1}
      value={form.guests}
      onChange={handleChange}
      className="w-full rounded-lg px-3 py-2 bg-black/40 border border-cyan-500/30 text-white"
    />
  </div>
</div>


          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-2 bg-black/40 border border-cyan-500/30 text-white"
          >
            <option>Presidential Suite</option>
            <option>Deluxe Suite</option>
            <option>Superior Room</option>
            <option>Standard Room</option>
          </select>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full text-lg font-bold bg-gradient-to-r from-cyan-400 to-pink-500"
          >
            {submitting ? "Booking..." : "Confirm Booking ✨"}
          </Button>
        </form>
      </div>
    </div>
  );
}