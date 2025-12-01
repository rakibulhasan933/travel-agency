import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "GlobalVoyage | Premium Travel & Visa Consultancy",
  description:
    "Your trusted partner for visa processing, tour packages, flight bookings, and unforgettable travel experiences worldwide. Expert guidance for your global journey.",
  keywords: ["travel agency", "visa consultancy", "tour packages", "flight booking", "holiday packages"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} hydrated font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
