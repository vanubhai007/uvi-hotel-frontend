import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Calendar, MapPin, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hotel-hero.jpg";

const About = () => {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Guests Annually" },
    { number: "95%", label: "Guest Satisfaction Rate" },
    { number: "150+", label: "Dedicated Staff Members" },
  ];

  const awards = [
    {
      year: "2024",
      title: "Luxury Hotel of the Year",
      organization: "Travel Excellence Awards",
    },
    {
      year: "2023",
      title: "Best Customer Service",
      organization: "Hospitality Excellence Awards",
    },
    {
      year: "2023",
      title: "Top City Hotel",
      organization: "Travel & Leisure Awards",
    },
    {
      year: "2022",
      title: "Outstanding Spa Services",
      organization: "Wellness Tourism Awards",
    },
  ];

  const team = [
    {
      name: "Marcus Wellington",
      position: "General Manager",
      experience: "20+ years in luxury hospitality",
      specialization: "Guest Experience Excellence",
    },
    {
      name: "Isabella Chen",
      position: "Executive Chef",
      experience: "15+ years in fine dining",
      specialization: "International Cuisine",
    },
    {
      name: "David Richardson",
      position: "Spa Director",
      experience: "12+ years in wellness",
      specialization: "Holistic Treatments",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Hospitality",
      description: "We believe genuine care and attention to detail create memorable experiences for every guest.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service, from housekeeping to fine dining.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're committed to supporting our local community and creating meaningful connections.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="luxury-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-gold">uvi hotel</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover the story behind our commitment to luxury, excellence, and unforgettable hospitality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Since 1999, uvi hotel has been synonymous with luxury hospitality in the heart of the city. 
                  What began as a vision to create an extraordinary guest experience has evolved into a landmark 
                  destination that consistently exceeds expectations.
                </p>
                <p>
                  Our journey started with a simple philosophy: every guest deserves to feel like royalty. 
                  This principle guides everything we do, from our meticulously designed rooms to our 
                  personalized concierge services.
                </p>
                <p>
                  Today, we proudly stand as one of the city's most prestigious hotels, having welcomed 
                  distinguished guests from around the world while maintaining our commitment to excellence 
                  and authentic hospitality.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/rooms">Experience Our Luxury</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-luxury">
                <img 
                  src={heroImage} 
                  alt="Hotel Royal Haven"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-gold">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient-gold">Achievement</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our commitment to exceptional hospitality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center shadow-luxury hover:shadow-gold transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Awards & <span className="text-gradient-gold">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Honored for our commitment to excellence in hospitality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <Card key={`${award.year}-${award.title}`} className="text-center shadow-luxury">
                <CardContent className="p-6">
                  <Badge className="gold-gradient text-primary mb-4">{award.year}</Badge>
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Leadership <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the experienced professionals who ensure your exceptional stay
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center shadow-luxury hover:shadow-gold transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="w-24 h-24 luxury-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-secondary font-semibold mb-3">{member.position}</div>
                  <div className="text-sm text-muted-foreground mb-2">{member.experience}</div>
                  <Badge variant="outline" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the <span className="text-gradient-gold">Royal Haven</span> Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied guests who have made Royal Haven their preferred choice for luxury accommodation
          </p>
          <div className="space-x-4">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/amenities">Explore Amenities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;