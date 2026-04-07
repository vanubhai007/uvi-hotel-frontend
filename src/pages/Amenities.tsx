import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Utensils,
  Car,
  Wifi,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import spaAmenities from "@/assets/spa-amenities.jpg";

const Amenities = () => {
  const navigate = useNavigate();

  const amenityCategories = [
    {
      title: "Wellness & Spa",
      icon: Waves,
      image: spaAmenities,
      amenities: [
        {
          name: "Luxury Spa",
          description:
            "Full-service spa with massage therapy, facials, and body treatments",
          hours: "6:00 AM - 10:00 PM",
          location: "Ground Floor",
          featured: true,
        },
        {
          name: "Infinity Pool",
          description: "Rooftop infinity pool with panoramic city views",
          hours: "5:00 AM - 11:00 PM",
          location: "Rooftop",
        },
        {
          name: "Fitness Center",
          description:
            "State-of-the-art gym equipment and personal training services",
          hours: "24/7",
          location: "2nd Floor",
        },
        {
          name: "Sauna & Steam Room",
          description: "Traditional Finnish sauna and Turkish steam room",
          hours: "6:00 AM - 10:00 PM",
          location: "Spa Level",
        },
      ],
    },
    {
      title: "Dining & Entertainment",
      icon: Utensils,
      amenities: [
        {
          name: "Royal Restaurant",
          description:
            "Fine dining with international cuisine and wine pairings",
          hours: "6:00 PM - 11:00 PM",
          location: "Ground Floor",
          featured: true,
        },
        {
          name: "Sky Bar",
          description:
            "Rooftop cocktail bar with craft cocktails and city views",
          hours: "5:00 PM - 2:00 AM",
          location: "Rooftop",
        },
        {
          name: "Coffee Lounge",
          description:
            "Artisan coffee bar with light pastries and snacks",
          hours: "6:00 AM - 11:00 PM",
          location: "Lobby Level",
        },
        {
          name: "Room Service",
          description:
            "24-hour in-room dining with extensive menu options",
          hours: "24/7",
          location: "To Your Room",
        },
      ],
    },
    {
      title: "Business & Events",
      icon: Users,
      amenities: [
        {
          name: "Conference Center",
          description:
            "Modern meeting rooms with A/V equipment and catering",
          hours: "6:00 AM - 10:00 PM",
          location: "3rd Floor",
        },
        {
          name: "Business Center",
          description:
            "Computer workstations, printing, and secretarial services",
          hours: "24/7",
          location: "Lobby Level",
        },
        {
          name: "Grand Ballroom",
          description:
            "Elegant venue for weddings and special events",
          hours: "By Appointment",
          location: "2nd Floor",
          featured: true,
        },
        {
          name: "Executive Lounge",
          description:
            "Exclusive lounge for suite guests with complimentary refreshments",
          hours: "6:00 AM - 10:00 PM",
          location: "25th Floor",
        },
      ],
    },
    {
      title: "Services & Convenience",
      icon: Car,
      amenities: [
        {
          name: "Valet Parking",
          description:
            "Professional valet service with covered parking garage",
          hours: "24/7",
          location: "Main Entrance",
        },
        {
          name: "Concierge Service",
          description:
            "Personalized assistance with reservations and local recommendations",
          hours: "24/7",
          location: "Lobby",
          featured: true,
        },
        {
          name: "Airport Shuttle",
          description:
            "Complimentary shuttle service to/from airport",
          hours: "5:00 AM - 11:00 PM",
          location: "Main Entrance",
        },
        {
          name: "Laundry & Dry Cleaning",
          description:
            "Same-day laundry and dry cleaning services",
          hours: "6:00 AM - 10:00 PM",
          location: "Pickup Available",
        },
      ],
    },
  ];

  const complimentaryServices = [
    "High-Speed WiFi",
    "Daily Housekeeping",
    "Welcome Reception",
    "Local Guides",
    "Luggage Storage",
    "Wake-up Call Service",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="luxury-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hotel <span className="text-gradient-gold">Amenities</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            World-class amenities designed to make your stay unforgettable
          </p>
        </div>
      </section>

      {/* Complimentary Services */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Complimentary for All Guests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complimentaryServices.map((service) => (
              <div
                key={service}
                className="text-center p-4 bg-card rounded-lg shadow-sm"
              >
                <Wifi className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenity Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {amenityCategories.map((category, index) => (
            <div key={category.title}>
              <div className="flex items-center justify-center mb-12">
                <category.icon className="w-8 h-8 text-secondary mr-4" />
                <h2 className="text-3xl font-bold">
                  {category.title}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.amenities.map((amenity) => (
                  <Card key={amenity.name} className="shadow-luxury">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        {amenity.name}
                        {amenity.featured && (
                          <Badge className="ml-2 gold-gradient text-xs">
                            Featured
                          </Badge>
                        )}
                      </h3>

                      <p className="text-muted-foreground mb-4">
                        {amenity.description}
                      </p>

                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {amenity.hours}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {amenity.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {index === 0 && (
                <div className="mt-12 rounded-lg overflow-hidden shadow-luxury">
                  <img
                    src={spaAmenities}
                    alt="Spa Amenities"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Enjoy luxury, comfort, and premium services
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="luxury"
              size="xl"
              onClick={() => navigate("/booking")}
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => navigate("/contact")}
            >
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
