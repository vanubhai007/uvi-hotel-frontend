import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";


const roomData: any = {
  1: {
    name: "Luxury Suite",
    price: "$250 / Night",
    description:
      "A luxury suite with ocean view, king size bed, AC, ultra-fast WiFi and complimentary breakfast. Designed for unforgettable comfort.",
        image: deluxeSuite,

  },
  2: {
    name: "Deluxe Room",
    price: "$180 / Night",
    description:
      "Modern deluxe room with elegant interiors, queen bed, balcony view and premium amenities.",
    image: deluxeSuite,
  },
  3: {
    name: "Standard Room",
    price: "$120 / Night",
    description:
      "Comfortable standard room with a queen bed, free WiFi and a private bathroom.",
    image: standardRoom,},
    4: {
      name: "Standard Room",
      price: "$120 / Night",
      description:
        "Comfortable standard room with a queen bed, free WiFi and a private bathroom.",
    image: standardRoom,
    },

5: {
  name: "Family Suite",
  price: "$349 / Night",
  description:
    "Perfect for families with spacious interiors, relaxing lounge area and premium comfort for a memorable stay.",
  image: deluxeSuite,
},

6: {
  name: "Royal Penthouse",
  price: "$599 / Night",
  description:
    "Ultimate luxury penthouse with private terrace, jacuzzi and breathtaking skyline views.",
  image: deluxeSuite,
},

};

const RoomDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomData[id as string];

  if (!room) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Room Not Found</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Neon Card */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "24px",
          padding: "24px",
          background: "linear-gradient(145deg, #020617, #020617)",
          boxShadow:
            "0 0 20px rgba(0,255,255,0.4), 0 0 40px rgba(255,0,255,0.25)",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          position: "relative",
        }}
      >
        {/* Neon Border Glow */}
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "26px",
            background:
              "linear-gradient(120deg, #00f0ff, #ff00f7, #00f0ff)",
            zIndex: -1,
            filter: "blur(10px)",
          }}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            color: "#00f0ff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "16px",
          }}
        >
          ⬅ Back to Rooms
        </button>

        {/* Image */}
        <img
          src={room.image}
          alt={room.name}
          style={{
            width: "100%",
            height: "380px",
            objectFit: "cover",
            borderRadius: "18px",
            marginBottom: "24px",
          }}
        />

        {/* Content */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "8px",
          }}
        >
          {room.name}
        </h1>

        <h3
          style={{
            fontSize: "22px",
            color: "#00f0ff",
            marginBottom: "20px",
          }}
        >
          {room.price}
        </h3>

        <p
          style={{
            color: "#cbd5f5",
            fontSize: "18px",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}
        >
          {room.description}
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate(`/booking?room=${room.name}`)}
          style={{
            padding: "16px 36px",
            fontSize: "18px",
            fontWeight: "700",
            color: "#020617",
            background:
              "linear-gradient(90deg, #00f0ff, #ff00f7)",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            boxShadow:
              "0 0 15px rgba(0,255,255,0.8), 0 0 30px rgba(255,0,255,0.6)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(0,255,255,1), 0 0 45px rgba(255,0,255,0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 0 15px rgba(0,255,255,0.8), 0 0 30px rgba(255,0,255,0.6)";
          }}
        >
          💖 Book Your Dream Stay
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
