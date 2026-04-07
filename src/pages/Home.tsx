import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, Utensils, Waves } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import heroImage from "@/assets/hotel-hero.jpg";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";

const Home = () => {
  const navigate = useNavigate();

  // ✅ AUTO INFINITE SLIDER
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!isHovered) {
        slider.scrollLeft += 0.5; // smooth speed

        // infinite reset
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  // ✅ DUPLICATE ROOMS FOR REAL INFINITE EFFECT
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: "$299",
      image: deluxeSuite,
      features: ["King Bed", "City View", "Mini Bar", "Balcony"],
    },
    {
      id: 2,
      name: "Standard Room",
      price: "$159",
      image: standardRoom,
      features: ["Queen Bed", "WiFi", "AC", "Room Service"],
    },
    {
      id: 3,
      name: "Executive Room",
      price: "$199",
      image: deluxeSuite,
      features: ["King Bed", "Workspace", "Smart TV", "Breakfast"],
    },
    {
      id: 4,
      name: "Family Suite",
      price: "$349",
      image: standardRoom,
      features: ["2 Beds", "Living Area", "Kids Friendly", "Balcony"],
    },
    {
      id: 5,
      name: "Premium Ocean View",
      price: "$399",
      image: deluxeSuite,
      features: ["Ocean View", "King Bed", "Jacuzzi", "Mini Bar"],
    },
    {
      id: 6,
      name: "Royal Penthouse",
      price: "$599",
      image: standardRoom,
      features: ["Private Pool", "Luxury Lounge", "Butler Service", "Terrace"],
    },
  ];

  // duplicate for infinite illusion
  const featuredRooms = [...rooms, ...rooms];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Coffee, name: "Coffee Bar" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Waves, name: "Spa & Pool" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-gradient-gold">Uvi Hotel</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience luxury and comfort in the heart of the city
          </p>

          <div className="space-x-4">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>

            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/booking")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient-gold">Rooms</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of luxurious accommodations
            </p>
          </div>

          {/* AUTO INFINITE SLIDER */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8 overflow-x-hidden mb-12 pb-4"
          >
            {featuredRooms.map((room, index) => (
              <Card
                key={index}
                className="min-w-[350px] max-w-[350px] overflow-hidden hover-scale shadow-luxury hover:shadow-gold transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold">
                      {room.name}
                    </h3>

                    <div className="text-right">
                      <span className="text-3xl font-bold text-secondary">
                        {room.price}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-accent rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            World-Class <span className="text-gradient-gold">Amenities</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.name}>
                <amenity.icon className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3>{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="py-20 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
          ))}
        </div>

        <blockquote className="text-2xl italic mb-6">
          "An exceptional experience from start to finish. Uvi Hotel exceeded every expectation."
        </blockquote>

        <cite className="font-semibold">
          - vanu sankhat, Verified Guest
        </cite>
      </section>
    </div>
  );
};

export default Home;