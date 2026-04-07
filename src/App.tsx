import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// top imports
import Booking from "@/pages/Booking";
import BookingSuccess from "@/pages/BookingSuccess";
import RoomDetails from "./pages/RoomDetails";
import AdminBookings from "./pages/AdminBookings";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
              {/* ...existing routes... */}
  <Route path="/booking" element={<Booking />} />
  <Route path="/booking/success" element={<BookingSuccess />} />
  {/* ...other routes... */}
  <Route path="/rooms/:id" element={<RoomDetails />} />
  <Route path="/admin/bookings" element={<AdminBookings />} />

          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
