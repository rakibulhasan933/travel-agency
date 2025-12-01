import Link from "next/link"
import { Plane, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
]

const services = [
  "Visa Processing",
  "Flight Booking",
  "Tour Packages",
  "Hotel Booking",
  "Travel Insurance",
  "Umrah & Hajj",
]

const legal = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Refund Policy" },
  { href: "#", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-[oklch(0.18_0.04_250)] to-[oklch(0.14_0.04_250)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/5 rounded-full blur-[150px]" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10 relative">
        <div className="container mx-auto px-4 py-14 md:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Subscribe to Our <span className="text-primary">Newsletter</span>
              </h3>
              <p className="text-white/60">Get exclusive travel deals and updates straight to your inbox</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 w-full lg:w-80 rounded-full focus:bg-white/15 focus:border-primary transition-all"
              />
              <Button className="bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full h-14 px-8 shrink-0 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-20 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="p-2.5 rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all">
                <Plane className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  Global<span className="text-primary">Voyage</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">Travel & Visa</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Your trusted partner for visa processing, tour packages, and unforgettable travel experiences worldwide.
              Making travel dreams come true since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 hover:text-primary transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-white/60 leading-relaxed">
                  123 Travel Plaza, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-white/60">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-white/60">info@globalvoyage.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">© 2025 GlobalVoyage. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
