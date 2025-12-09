"use client"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/services-data"

interface ServiceCategoriesProps {
  activeService: string
  onServiceChange: (serviceSlug: string) => void
}

export function ServiceCategories({ activeService, onServiceChange }: ServiceCategoriesProps) {
  return (
    <section className="py-4 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up">
          <div className="flex flex-wrap justify-center gap-3">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.slug)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeService === service.slug
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                )}
              >
                <service.icon className="h-4 w-4" />
                {service.shortTitle}
                <span className="text-xs opacity-70">({service.packages.length})</span>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
