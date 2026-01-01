import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ServicesWithFilter } from "@/components/services-with-filter"
import { ServicesSection } from "@/components/services-section"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '748336294208189');
            fbq('track', 'HomePageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=748336294208189&ev=HomePageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <div className="px-4 md:px-6 lg:px-20">
          <ServicesWithFilter />
          <ServicesSection />
        </div>
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
      </main>
    </>
  )
}
