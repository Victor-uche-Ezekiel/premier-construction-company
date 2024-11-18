"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { 
  Home,
  Info,
  Briefcase,
  Building2,
  Users,
  Phone,
  FileText,
} from "lucide-react"

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Services",
    icon: Briefcase,
    links: [
      { name: "Residential Construction", href: "/services#residential" },
      { name: "Commercial Construction", href: "/services#commercial" },
      { name: "Renovation Services", href: "/services#renovation" },
      { name: "Project Management", href: "/services#management" },
      { name: "Construction Consulting", href: "/services#consulting" },
    ]
  },
  {
    title: "Projects",
    icon: Building2,
    links: [
      { name: "Featured Projects", href: "/projects#featured" },
      { name: "Residential Portfolio", href: "/projects#residential" },
      { name: "Commercial Portfolio", href: "/projects#commercial" },
      { name: "Renovation Portfolio", href: "/projects#renovation" },
    ]
  },
  {
    title: "Company",
    icon: Info,
    links: [
      { name: "Our Story", href: "/about#story" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Team", href: "/about#team" },
      { name: "Testimonials", href: "/about#testimonials" },
    ]
  },
  {
    title: "Careers",
    icon: Users,
    links: [
      { name: "Current Openings", href: "/careers#openings" },
      { name: "Benefits", href: "/careers#benefits" },
      { name: "Culture", href: "/careers#culture" },
      { name: "Application Process", href: "/careers#process" },
    ]
  },
  {
    title: "Contact",
    icon: Phone,
    links: [
      { name: "Get in Touch", href: "/contact" },
      { name: "Office Locations", href: "/contact#locations" },
      { name: "Support", href: "/contact#support" },
      { name: "Request Quote", href: "/contact#quote" },
    ]
  },
  {
    title: "Legal",
    icon: FileText,
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/privacy#cookies" },
      { name: "Sitemap", href: "/sitemap" },
    ]
  },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4" variant="secondary">Navigation</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-lg text-muted-foreground">
                Find everything you need to know about our construction services and company information.
              </p>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
        </section>

        {/* Sitemap Grid */}
        <section className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sitemapSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
