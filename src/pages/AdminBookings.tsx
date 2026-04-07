import React, { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
  _id: string;
  name: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut?: string;
  guests?: number;
  status?: string;
  createdAt: string;
}

export default function AdminBookings() {

  // 🔐 LOGIN SYSTEM (password only once)
  if (localStorage.getItem("adminAuth") !== "true") {

    const password = prompt("Enter Admin Password");

    if (password === "uviadmin123") {
      localStorage.setItem("adminAuth","true");
    } else {
      alert("Wrong Password");
      window.location.href = "/";
      return null;
    }

  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");

  const totalRevenue = bookings.length * 2000;

  useEffect(() => {
    axios.get("http://localhost:5000/api/booking")
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteBooking = async (id:string) => {

    if(!confirm("Delete this booking?")) return;

    try{
      await axios.delete(`http://localhost:5000/api/booking/${id}`);
      setBookings(bookings.filter(b => b._id !== id));
    }
    catch{
      alert("Delete failed");
    }

  };

  const updateStatus = (id:string,status:string) => {

    setBookings(
      bookings.map(b =>
        b._id === id ? {...b,status} : b
      )
    );

  };

  const logout = () => {

    localStorage.removeItem("adminAuth");

    window.location.reload();

  };

  const filteredBookings = bookings.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.phone.includes(search)
  );

  return (

    <div style={{padding:30,background:"#020617",minHeight:"100vh",color:"white"}}>

      <div style={{display:"flex",justifyContent:"space-between"}}>

        <h1>📋 Uvi Hotel Admin Dashboard</h1>

        <button
        onClick={logout}
        style={{
          background:"black",
          color:"white",
          border:"none",
          padding:"8px 15px",
          cursor:"pointer"
        }}
        >
        Logout
        </button>

      </div>

      {/* DASHBOARD CARDS */}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"15px",
        marginBottom:"25px"
      }}>

        <div style={card}>
          <h3>Total Bookings</h3>
          <p>{bookings.length}</p>
        </div>

        <div style={card}>
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>

        <div style={card}>
          <h3>Confirmed</h3>
          <p>{bookings.filter(b=>b.status==="Confirmed").length}</p>
        </div>

        <div style={card}>
          <h3>Pending</h3>
          <p>{bookings.filter(b=>!b.status || b.status==="Pending").length}</p>
        </div>

      </div>

      {/* SEARCH */}

    <input
placeholder="🔍 Search booking"
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
marginBottom:"20px",
width:"280px",
borderRadius:"6px",
border:"1px solid #334155",
background:"#0f172a",
color:"white",
outline:"none"
}}
/>

      {/* TABLE */}

      <table style={{width:"100%",borderCollapse:"collapse"}}>

        <thead>
          <tr style={{background:"#0f172a"}}>
            <th style={th}>Name</th>
            <th style={th}>Phone</th>
            <th style={th}>Room</th>
            <th style={th}>Check-In</th>
            <th style={th}>Check-Out</th>
            <th style={th}>Guests</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>

        {filteredBookings.map(b => (

          <tr key={b._id}>

            <td style={td}>{b.name}</td>
            <td style={td}>{b.phone}</td>
            <td style={td}>{b.roomType}</td>
            <td style={td}>{b.checkIn}</td>
            <td style={td}>{b.checkOut}</td>
            <td style={td}>{b.guests || 1}</td>

            <td style={td}>{b.status || "Pending"}</td>

            <td style={td}>

              <button
              onClick={()=>updateStatus(b._id,"Confirmed")}
              style={confirmBtn}
              >
              Confirm
              </button>

              <button
              onClick={()=>updateStatus(b._id,"Cancelled")}
              style={cancelBtn}
              >
              Cancel
              </button>

              <button
              onClick={()=>deleteBooking(b._id)}
              style={deleteBtn}
              >
              Delete
              </button>

              <button
              onClick={()=>window.open(
                `https://wa.me/91${b.phone}?text=Hello ${b.name}, your booking at Uvi Hotel is confirmed.`,
                "_blank"
              )}
              style={whatsappBtn}
              >
              WhatsApp
              </button>

            </td>

          </tr>

        ))}

        </tbody>

      </table>

    </div>

  );

}

const card={
background:"#0f172a",
padding:"20px",
borderRadius:"10px"
}

const th={
padding:"12px",
borderBottom:"1px solid #334155",
textAlign:"left"
}

const td={
padding:"10px",
borderBottom:"1px solid #1e293b"
}

const confirmBtn={
background:"green",
color:"white",
border:"none",
padding:"6px 12px",
marginRight:"5px",
cursor:"pointer"
}

const cancelBtn={
background:"orange",
color:"white",
border:"none",
padding:"6px 12px",
marginRight:"5px",
cursor:"pointer"
}

const deleteBtn={
background:"red",
color:"white",
border:"none",
padding:"6px 12px",
marginRight:"5px",
cursor:"pointer"
}

const whatsappBtn={
background:"#25D366",
color:"white",
border:"none",
padding:"6px 12px",
cursor:"pointer"
}