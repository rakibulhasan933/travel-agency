"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/beautiful-paris-eiffel-tower-sunset-romantic-trave.jpg",
    title: "Explore The World With Us",
    subtitle: "Trusted travel and visa consultancy for your global journey",
    location: "Paris, France",
  },
  {
    image: "/dubai-skyline-burj-khalifa-luxury-modern-city-at-n.jpg",
    title: "Discover Luxury Destinations",
    subtitle: "Premium travel experiences tailored just for you",
    location: "Dubai, UAE",
  },
  {
    image: "/maldives-tropical-beach-overwater-villa-crystal-cl.jpg",
    title: "Your Dream Vacation Awaits",
    subtitle: "Create unforgettable memories with our expert planning",
    location: "Maldives",
  },
  {
    image: "/istanbul-turkey-blue-mosque-historic-architecture-.jpg",
    title: "Experience Rich Cultures",
    subtitle: "Journey through history and tradition worldwide",
    location: "Istanbul, Turkey",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const handleSlideChange = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const nextSlide = () => handleSlideChange((currentSlide + 1) % slides.length)
  const prevSlide = () => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides with optimized images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.location}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Refined gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-foreground/20" />
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-sky/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center md:px-20 px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Location badge */}
            <div className="overflow-hidden mb-6 ">
              <div
                key={`location-${currentSlide}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-md border border-card/20 animate-fade-in-up"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-card/90 text-sm font-medium tracking-wide">{slides[currentSlide].location}</span>
              </div>
            </div>

            {/* Main title */}
            <div className="overflow-hidden mb-6">
              <h1
                key={`title-${currentSlide}`}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.1] animate-fade-in-up text-balance"
              >
                {slides[currentSlide].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={cn("inline-block mr-4", word === "World" && "text-primary")}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mb-10">
              <p
                key={`subtitle-${currentSlide}`}
                className="text-lg md:text-xl text-card/80 max-w-2xl animate-fade-in-up leading-relaxed"
                style={{ animationDelay: "300ms" }}
              >
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <Button
                size="lg"
                className={cn(
                  "group relative overflow-hidden",
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                  "rounded-full px-8 py-6 text-base font-semibold",
                  "shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40",
                  "transition-all duration-300 hover:scale-[1.02]",
                )}
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-card/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "group border-2 border-card/40 text-card",
                  "bg-card/5 backdrop-blur-sm",
                  "hover:bg-card hover:text-foreground hover:border-card",
                  "rounded-full px-8 py-6 text-base font-semibold",
                  "transition-all duration-300",
                )}
              >
                Book Now
              </Button>
              <button className="group flex items-center gap-3 ml-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-card/10 backdrop-blur-md border border-card/20 group-hover:bg-card group-hover:scale-110 transition-all duration-300">
                  <Play className="h-5 w-5 text-card group-hover:text-primary fill-current ml-0.5" />
                </span>
                <span className="text-card/80 font-medium group-hover:text-card transition-colors">Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Enhanced */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20",
          "w-12 h-12 md:w-14 md:h-14 rounded-full",
          "bg-card/10 backdrop-blur-md border border-card/20",
          "text-card hover:bg-card hover:text-foreground",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "disabled:opacity-50 disabled:pointer-events-none",
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20",
          "w-12 h-12 md:w-14 md:h-14 rounded-full",
          "bg-card/10 backdrop-blur-md border border-card/20",
          "text-card hover:bg-card hover:text-foreground",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "disabled:opacity-50 disabled:pointer-events-none",
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators - Enhanced */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={cn(
              "relative h-3 rounded-full transition-all duration-500 overflow-hidden",
              index === currentSlide ? "w-10 bg-primary" : "w-3 bg-card/40 hover:bg-card/60",
            )}
          >
            {index === currentSlide && (
              <span
                className="absolute inset-0 bg-card/30 origin-left animate-[slideProgress_7s_linear]"
                style={{ animationPlayState: isTransitioning ? "paused" : "running" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-3">
        <span className="text-card/60 text-xs tracking-[0.3em] uppercase rotate-90 origin-center translate-x-6 mb-4">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-card/30 flex justify-center pt-2">
          <span className="w-1 h-2 bg-card/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
