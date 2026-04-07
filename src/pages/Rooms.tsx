import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bed, Maximize, Wifi, Coffee, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";

const Rooms = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      price: "$499",
      image: deluxeSuite,
      size: "85 sqm",
      capacity: "4 guests",
      beds: "1 King Bed + Sofa",
      description:
        "The epitome of luxury with panoramic city views, marble bathroom, and personal butler service.",
      amenities: [
        "Butler Service",
        "City View",
        "Marble Bathroom",
        "Mini Bar",
        "Balcony",
        "Work Desk",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Deluxe Suite",
      price: "$299",
      image: deluxeSuite,
      size: "55 sqm",
      capacity: "2 guests",
      beds: "1 King Bed",
      description:
        "Spacious suite with separate living area and premium amenities.",
      amenities: [
        "City View",
        "Living Area",
        "Mini Bar",
        "Balcony",
        "Work Desk",
        "Premium Toiletries",
      ],
    },
    {
      id: 3,
      name: "Superior Room",
      price: "$199",
      image: standardRoom,
      size: "35 sqm",
      capacity: "2 guests",
      beds: "1 Queen Bed",
      description:
        "Elegantly appointed room with modern amenities and comfortable furnishings.",
      amenities: [
        "Garden View",
        "Work Desk",
        "Mini Fridge",
        "Premium Toiletries",
        "Coffee Station",
      ],
    },
    {
      id: 4,
      name: "Standard Room",
      price: "$159",
      image: standardRoom,
      size: "28 sqm",
      capacity: "2 guests",
      beds: "1 Queen Bed",
      description:
        "Comfortable and well-designed room with essential amenities.",
      amenities: [
        "Free WiFi",
        "AC",
        "Room Service",
        "Coffee Station",
        "Work Desk",
      ],
    },

    // ✅ NEW ROOM 5
    {
      id: 5,
      name: "Family Suite",
      price: "$349",
      image: deluxeSuite,
      size: "65 sqm",
      capacity: "5 guests",
      beds: "2 Queen Beds",
      description:
        "Perfect for families with spacious interiors and relaxing lounge area.",
      amenities: [
        "Family Lounge",
        "Balcony",
        "Mini Bar",
        "Kids Friendly",
        "Smart TV",
      ],
    },

    // ✅ NEW ROOM 6
    {
      id: 6,
      name: "Royal Penthouse",
      price: "$599",
      image: deluxeSuite,
      size: "120 sqm",
      capacity: "6 guests",
      beds: "2 King Beds",
      description:
        "Ultimate luxury experience featuring private terrace and premium services.",
      amenities: [
        "Private Terrace",
        "Jacuzzi",
        "Butler Service",
        "Luxury Lounge",
        "City Skyline View",
      ],
      popular: true,
    },
  ];

  const features = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Coffee, name: "24/7 Room Service" },
    { icon: Car, name: "Valet Parking" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="luxury-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-gold">Rooms</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Choose from our collection of beautifully appointed rooms and suites
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            All Rooms Include
          </h3>
          <div className="flex justify-center space-x-12">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-center space-x-3">
                <feature.icon className="w-6 h-6 text-secondary" />
                <span className="text-lg font-medium">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-300 hover-scale"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {room.popular && (
                    <Badge className="absolute top-4 right-4 gold-gradient text-primary font-semibold">
                      Most Popular
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {room.name}
                      </h3>

                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Maximize className="w-4 h-4" />
                          {room.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {room.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {room.beds}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-3xl font-bold text-secondary">
                        {room.price}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {room.description}
                  </p>

                  <div className="flex space-x-3">
                    <Button
                      variant="luxury"
                      className="flex-1"
                      onClick={() =>
                        navigate(`/booking?room=${room.name}`)
                      }
                    >
                      Book Now
                    </Button>

                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate(`/rooms/${room.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;