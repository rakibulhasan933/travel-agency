export interface BlogPost {
  slug: string
  image: string
  category: string
  title: string
  excerpt: string
  author: string
  authorImage?: string
  date: string
  readTime: string
  featured: boolean
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-must-visit-destinations-2025",
    image: "/santorini-greece-beautiful-sunset-travel-destinati.jpg",
    category: "Destinations",
    title: "Top 10 Must-Visit Destinations for 2025",
    excerpt:
      "Discover the most breathtaking destinations that should be on every traveler's bucket list this year. From hidden gems to popular hotspots.",
    author: "Sarah Anderson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true,
    content: `
      <p>As we step into 2025, the world of travel continues to evolve, offering new and exciting destinations for adventurous souls. Whether you're seeking pristine beaches, ancient cultures, or breathtaking natural wonders, this year's top destinations promise unforgettable experiences.</p>
      
      <h2>1. Santorini, Greece</h2>
      <p>The iconic white-washed buildings and stunning sunsets of Santorini continue to captivate travelers from around the globe. This Greek island offers a perfect blend of history, culture, and natural beauty that makes it an essential destination for 2025.</p>
      
      <h2>2. Kyoto, Japan</h2>
      <p>Experience the perfect harmony of ancient traditions and modern innovation in Kyoto. From serene temples to beautiful cherry blossoms, this city offers a glimpse into Japan's rich cultural heritage.</p>
      
      <h2>3. Patagonia, Argentina & Chile</h2>
      <p>For adventure seekers, Patagonia's dramatic landscapes of glaciers, mountains, and pristine wilderness offer unparalleled hiking and wildlife experiences.</p>
      
      <h2>4. Morocco</h2>
      <p>The vibrant markets, stunning architecture, and diverse landscapes of Morocco make it a must-visit destination. From the bustling medinas of Marrakech to the serene Sahara Desert, Morocco offers endless exploration.</p>
      
      <h2>5. New Zealand</h2>
      <p>Known for its stunning natural beauty, New Zealand offers everything from dramatic fjords to volcanic landscapes, making it perfect for nature lovers and adventure enthusiasts alike.</p>
      
      <h2>Planning Your Trip</h2>
      <p>When planning visits to these destinations, consider the best seasons for travel, local customs, and necessary visa requirements. Early booking is recommended for popular destinations, especially during peak seasons.</p>
      
      <p>Remember to travel responsibly and respect local cultures and environments. Sustainable tourism practices ensure these beautiful destinations remain preserved for future generations.</p>
    `,
  },
  {
    slug: "complete-guide-schengen-visa-application",
    image: "/schengen-visa-passport-travel-documents.jpg",
    category: "Visa Guide",
    title: "Complete Guide to Schengen Visa Application",
    excerpt:
      "Everything you need to know about applying for a Schengen visa, from required documents to interview tips.",
    author: "Emily Roberts",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: false,
    content: `
      <p>Applying for a Schengen visa can seem daunting, but with proper preparation, the process becomes straightforward. This comprehensive guide walks you through every step of the application process.</p>
      
      <h2>What is a Schengen Visa?</h2>
      <p>A Schengen visa allows you to travel freely across 27 European countries that are part of the Schengen Agreement. This includes popular destinations like France, Germany, Italy, Spain, and many more.</p>
      
      <h2>Required Documents</h2>
      <p>Before applying, ensure you have the following documents ready:</p>
      <ul>
        <li>Valid passport (at least 3 months validity beyond your planned stay)</li>
        <li>Completed visa application form</li>
        <li>Recent passport-sized photographs</li>
        <li>Travel insurance with minimum coverage of €30,000</li>
        <li>Proof of accommodation</li>
        <li>Flight itinerary</li>
        <li>Proof of financial means</li>
        <li>Employment letter or business documents</li>
      </ul>
      
      <h2>Application Process</h2>
      <p>Submit your application at least 15 days before your planned travel date, but no earlier than 6 months. Book an appointment at the embassy or visa application center of your main destination country.</p>
      
      <h2>Interview Tips</h2>
      <p>During your visa interview, be honest and confident. Know your travel itinerary well and be prepared to explain your ties to your home country that ensure your return.</p>
      
      <h2>Processing Time</h2>
      <p>Standard processing takes 15 calendar days, but it can take up to 45 days in some cases. Plan accordingly and apply early to avoid any travel disruptions.</p>
    `,
  },
  {
    slug: "how-to-travel-world-on-budget",
    image: "/budget-backpacker-travel-adventure-mountains.jpg",
    category: "Budget Travel",
    title: "How to Travel the World on a Budget",
    excerpt:
      "Expert tips and tricks to explore amazing destinations without breaking the bank. Save money while having incredible experiences.",
    author: "Michael Chen",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    featured: false,
    content: `
      <p>Traveling the world doesn't have to drain your savings. With smart planning and flexibility, you can explore amazing destinations while keeping costs low.</p>
      
      <h2>Choose Budget-Friendly Destinations</h2>
      <p>Countries in Southeast Asia, Eastern Europe, and South America offer incredible experiences at a fraction of the cost of Western destinations. Your money goes much further in places like Vietnam, Portugal, or Colombia.</p>
      
      <h2>Travel During Off-Season</h2>
      <p>Avoid peak tourist seasons when prices for flights and accommodations skyrocket. Shoulder seasons often offer the best combination of good weather and lower prices.</p>
      
      <h2>Accommodation Hacks</h2>
      <p>Consider hostels, guesthouses, or platforms like Couchsurfing. House-sitting is another excellent option that can provide free accommodation while you care for someone's home.</p>
      
      <h2>Food Strategies</h2>
      <p>Eat where locals eat, cook your own meals when possible, and take advantage of street food which is often both delicious and affordable.</p>
      
      <h2>Transportation Tips</h2>
      <p>Use budget airlines, overnight buses (which save on accommodation), and consider slow travel to reduce transportation costs while experiencing more of each destination.</p>
      
      <h2>Free Activities</h2>
      <p>Many of the best travel experiences are free – hiking, exploring cities on foot, visiting free museums on certain days, and enjoying public beaches and parks.</p>
    `,
  },
  {
    slug: "ultimate-maldives-luxury-experience",
    image: "/maldives-luxury-resort-overwater-bungalow.jpg",
    category: "Luxury Travel",
    title: "Ultimate Maldives Luxury Experience",
    excerpt: "A comprehensive guide to the most luxurious resorts and experiences in the Maldives paradise islands.",
    author: "David Kumar",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    featured: false,
    content: `
      <p>The Maldives represents the pinnacle of luxury travel, with overwater villas, crystal-clear waters, and world-class service creating an unparalleled paradise experience.</p>
      
      <h2>Choosing Your Resort</h2>
      <p>Each resort in the Maldives occupies its own private island, offering exclusivity and privacy. Top choices include Soneva Fushi, One&Only Reethi Rah, and St. Regis Maldives.</p>
      
      <h2>Overwater Villa Experience</h2>
      <p>Nothing compares to waking up above the turquoise lagoon. Premium villas feature glass floors, private pools, and direct ocean access for snorkeling right from your deck.</p>
      
      <h2>Underwater Dining</h2>
      <p>Experience culinary excellence at underwater restaurants like Ithaa, where you dine surrounded by marine life in a glass-enclosed structure beneath the waves.</p>
      
      <h2>Water Sports & Activities</h2>
      <p>From diving with manta rays to sunset dolphin cruises, the Maldives offers exceptional water-based activities. Many resorts have their own house reefs teeming with marine life.</p>
      
      <h2>Spa & Wellness</h2>
      <p>World-renowned spas offer treatments in stunning overwater pavilions, combining ancient healing traditions with modern luxury wellness practices.</p>
    `,
  },
  {
    slug: "essential-tips-solo-female-travelers",
    image: "/solo-female-traveler-city-adventure-europe.jpg",
    category: "Travel Tips",
    title: "Essential Tips for Solo Female Travelers",
    excerpt: "Safety tips, packing advice, and destination recommendations for women traveling alone around the world.",
    author: "Sarah Anderson",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    featured: false,
    content: `
      <p>Solo female travel is an empowering and transformative experience. With proper preparation and awareness, women can safely explore the world independently.</p>
      
      <h2>Research Your Destination</h2>
      <p>Before traveling, research local customs, dress codes, and areas to avoid. Understanding cultural norms helps you blend in and shows respect for local traditions.</p>
      
      <h2>Stay Connected</h2>
      <p>Share your itinerary with trusted friends or family. Regular check-ins provide peace of mind for both you and your loved ones back home.</p>
      
      <h2>Trust Your Instincts</h2>
      <p>Your intuition is your best safety tool. If something feels wrong, remove yourself from the situation without hesitation or apology.</p>
      
      <h2>Accommodation Safety</h2>
      <p>Choose accommodations with good reviews from solo female travelers. Female-only dorms in hostels and hotels with 24-hour reception offer added security.</p>
      
      <h2>Packing Essentials</h2>
      <p>Pack light but include safety essentials: doorstop alarm, portable charger, copies of important documents, and a money belt for valuables.</p>
      
      <h2>Connect with Other Travelers</h2>
      <p>Join female travel groups and use apps designed for solo travelers to meet like-minded women and share experiences safely.</p>
    `,
  },
  {
    slug: "dubai-ultimate-travel-guide-2025",
    image: "/dubai-skyline-burj-khalifa-modern-city.jpg",
    category: "Destinations",
    title: "Dubai: The Ultimate Travel Guide 2025",
    excerpt:
      "From iconic skyscrapers to hidden souks, discover everything Dubai has to offer for travelers of all budgets.",
    author: "Michael Chen",
    date: "Nov 15, 2024",
    readTime: "12 min read",
    featured: false,
    content: `
      <p>Dubai seamlessly blends futuristic architecture with rich Arabian heritage, creating a destination unlike any other. This guide covers everything you need to know for an unforgettable Dubai experience.</p>
      
      <h2>Iconic Landmarks</h2>
      <p>No visit is complete without seeing the Burj Khalifa, the world's tallest building. The Dubai Frame and Palm Jumeirah also offer spectacular views and photo opportunities.</p>
      
      <h2>Traditional Experiences</h2>
      <p>Explore the historic Al Fahidi district, take an abra ride across Dubai Creek, and haggle in the Gold and Spice Souks for an authentic Arabian experience.</p>
      
      <h2>Desert Adventures</h2>
      <p>Desert safaris offer dune bashing, camel rides, and traditional Bedouin camps with dinner under the stars. Hot air balloon rides at sunrise provide breathtaking desert panoramas.</p>
      
      <h2>Shopping Paradise</h2>
      <p>From the massive Dubai Mall to luxury boutiques, Dubai is a shopper's paradise. The annual Dubai Shopping Festival offers incredible deals and entertainment.</p>
      
      <h2>Culinary Scene</h2>
      <p>Dubai's dining scene ranges from street food to Michelin-starred restaurants. Try local Emirati cuisine and explore the diverse international food options.</p>
      
      <h2>Best Time to Visit</h2>
      <p>November to March offers the most pleasant weather. Summer months are extremely hot but offer significant discounts on hotels and attractions.</p>
    `,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === category || Math.random() > 0.5)
    .slice(0, limit)
}
