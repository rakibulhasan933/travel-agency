"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Rahman Hussain",
    destination: "Dubai, UAE",
    avatar: "/professional-man-smiling.png",
    rating: 5,
    review:
      "Thanks to GlobalVoyage, my Dubai trip was absolutely seamless! The team handled everything from visa to hotel bookings. Highly recommend their services!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    destination: "Maldives",
    avatar: "/professional-woman-smiling-portrait.png",
    rating: 5,
    review:
      "Our honeymoon in Maldives was a dream come true. Every detail was perfectly arranged. The resort they recommended was beyond our expectations!",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    destination: "Europe Tour",
    avatar: "/young-professional-man-portrait.png",
    rating: 5,
    review:
      "The Europe tour package was exceptional. Visited 5 countries in 10 days with zero hassles. Their local guides were knowledgeable and friendly.",
  },
  {
    id: 4,
    name: "Fatima Ali",
    destination: "Turkey",
    avatar: "/professional-woman-hijab-portrait-smiling.jpg",
    rating: 5,
    review:
      "Got my Schengen visa approved in just 5 days! The team's expertise in visa processing is remarkable. Will definitely use their services again.",
  },
  {
    id: 5,
    name: "Michael Chen",
    destination: "Singapore",
    avatar: "/asian-professional-man-portrait.jpg",
    rating: 5,
    review:
      "Family trip to Singapore was perfectly organized. The kids loved every moment. Great value for money and excellent customer service!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const itemsPerView = 3
  const maxIndex = testimonials.length - itemsPerView

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-20">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-lg">Real experiences from our valued customers around the world</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                  <Card
                    className={cn(
                      "h-full bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-500",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.review}"</p>
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">Traveled to {testimonial.destination}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
