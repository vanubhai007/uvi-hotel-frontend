import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Utensils,
  Users,
  ShieldCheck,
  Star,
  HeartHandshake,
  CalendarCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Hotel Address",
      details: ["123 Luxury Avenue", "Downtown District", "City, State 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "24/7 Guest Support"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@uvihotel.com"],
    },
    {
      icon: Clock,
      title: "Front Desk",
      details: ["Open 24/7", "Concierge: 6 AM – 11 PM"],
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Airport Transfers",
      description: "Luxury chauffeur-driven vehicles",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Reserve tables at our award-winning restaurant",
    },
    {
      icon: Users,
      title: "Events & Weddings",
      description: "Grand venues for unforgettable moments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="luxury-gradient text-white py-28 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-gradient-gold">Uvi Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Luxury hospitality you can trust — from the first click.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center gap-10 mt-12 text-sm">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-300" />
              Rated 5-Star by Guests
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-300" />
              Secure Booking
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="text-pink-300" />
              Trusted Hospitality
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* LEFT – BOOKING CTA + MAP */}
          <Card className="shadow-luxury border border-border">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <CalendarCheck className="text-secondary" />
                Book Your Stay
              </CardTitle>
              <p className="text-muted-foreground">
                Check availability, choose rooms, and confirm your booking securely.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3 text-muted-foreground">
                <li>✔ Instant availability check</li>
                <li>✔ Secure & private booking</li>
                <li>✔ Best price guarantee</li>
                <li>✔ Flexible cancellation options</li>
              </ul>

              <Button
                variant="luxury"
                size="lg"
                className="w-full text-lg"
                onClick={() => navigate("/booking")}
              >
                Go to Booking Page
              </Button>

              {/* GOOGLE MAP */}
              <div className="mt-6 rounded-xl overflow-hidden border shadow-sm">
                <iframe
                  title="Uvi Hotel Location"
                  src="https://www.google.com/maps?q=Luxury%20Hotel%20Mumbai&output=embed"
                  className="w-full h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>

          {/* RIGHT – CONTACT & SERVICES */}
          <div className="space-y-10">
            {/* CONTACT INFO */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Reach Our Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center">
                      <info.icon className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.details.map((d) => (
                        <p key={d} className="text-sm text-muted-foreground">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* SERVICES */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Concierge Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="flex gap-4 p-4 border rounded-xl hover:bg-muted/40 transition"
                  >
                    <s.icon className="text-secondary" />
                    <div>
                      <h4 className="font-semibold">{s.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
