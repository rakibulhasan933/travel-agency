"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "destinations", name: "Destinations", count: 8 },
  { id: "tips", name: "Travel Tips", count: 6 },
  { id: "visa", name: "Visa Guides", count: 5 },
  { id: "budget", name: "Budget Travel", count: 3 },
  { id: "luxury", name: "Luxury Travel", count: 2 },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                )}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
