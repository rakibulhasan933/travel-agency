"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export function BlogGrid() {
  const [featuredPost, ...otherPosts] = blogPosts

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Post */}
        <AnimatedSection direction="up" className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="relative aspect-16/10 lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5">Featured</Badge>
              </div>
              <div className="p-8 lg:p-12">
                <Badge variant="secondary" className="mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="rounded-full px-6 group/btn">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <AnimatedSection key={post.slug} direction="up" delay={index * 100}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden border-border hover:border-primary/30 shadow-none hover:shadow-xl transition-all duration-500 h-full bg-card">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                          <User className="h-3 w-3" />
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <span className="text-primary font-medium text-sm flex items-center gap-1 group/btn">
                        Read
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Load More */}
        <AnimatedSection direction="up" delay={400} className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
            Load More Articles
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
