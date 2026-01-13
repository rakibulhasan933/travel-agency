"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { HeroSliderIProps } from "@/lib/data-fetch"
import { useIsMobile } from "@/components/ui/use-mobile"

export function HeroSection({ sliders }: { sliders: HeroSliderIProps[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % sliders.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const handleSlideChange = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const nextSlide = () => handleSlideChange((currentSlide + 1) % sliders.length)
  const prevSlide = () => handleSlideChange((currentSlide - 1 + sliders.length) % sliders.length)

  return (
    <section
      id="home"
      className="relative h-[30vh] md:h-[75vh] lg:h-[85vh] overflow-hidden mt-8 md:mt-16 bg-foreground/5"
    >
      {sliders.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 z-0 transition-all duration-1000 ease-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            fill
            quality={100}
            alt={slide.title}
            priority={index === 0}
            className="object-cover"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1536px) 1536px, 2048px"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-8 md:py-12 lg:py-16 px-4">
        <div></div>
      </div>

      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full",
          "bg-card/10 backdrop-blur-md border border-card/20",
          "text-card hover:bg-card hover:text-foreground",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "disabled:opacity-50 disabled:pointer-events-none",
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full",
          "bg-card/10 backdrop-blur-md border border-card/20",
          "text-card hover:bg-card hover:text-foreground",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "disabled:opacity-50 disabled:pointer-events-none",
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={cn(
              "relative h-1.5 md:h-2 lg:h-3 rounded-full transition-all duration-500 overflow-hidden",
              index === currentSlide
                ? "w-6 md:w-8 lg:w-10 bg-primary"
                : "w-1.5 md:w-2 lg:w-3 bg-card/40 hover:bg-card/60",
            )}
            aria-label={`Go to slide ${index + 1}`}
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

      <div className="absolute bottom-10 right-10 z-20 hidden xl:flex flex-col items-center gap-3">
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
