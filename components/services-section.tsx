"use client"

import { useInView } from "react-intersection-observer"
import { Plane, FileText, Hotel, Map, GraduationCap, Compass, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: FileText,
    title: "Visa Processing Assistance",
    description:
      "Expert guidance for tourist, business, student, and work visas for all countries with high approval rates.",
    color: "bg-blue-500",
  },
  {
    icon: Plane,
    title: "Air Ticket Booking",
    description: "Best deals on domestic and international flights with flexible booking options and 24/7 support.",
    color: "bg-sky-500",
  },
  {
    icon: Map,
    title: "Tour Planning",
    description: "Customized travel itineraries designed to match your preferences, budget, and travel style.",
    color: "bg-teal-500",
  },
  {
    icon: Hotel,
    title: "Hotel & Transport Booking",
    description: "Premium accommodations and reliable transportation services worldwide at competitive prices.",
    color: "bg-indigo-500",
  },
  {
    icon: GraduationCap,
    title: "Student Visa Consultancy",
    description: "Comprehensive support for students seeking education abroad with university placement assistance.",
    color: "bg-purple-500",
  },
  {
    icon: Compass,
    title: "Umrah & Hajj Packages",
    description: "Spiritual journey packages with complete arrangements for a blessed pilgrimage experience.",
    color: "bg-emerald-500",
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 lg:py-32 bg-background " ref={ref}>
      <div className="container mx-auto md:px-20 px-4">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Travel Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From visa processing to complete tour packages, we handle every aspect of your travel needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "inline-flex p-4 rounded-xl mb-6 transition-transform group-hover:scale-110",
                  service.color,
                )}
              >
                <service.icon className="h-7 w-7 text-card" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
