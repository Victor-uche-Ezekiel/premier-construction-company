"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Residential Construction", href: "/services#residential" },
    { name: "Commercial Construction", href: "/services#commercial" },
    { name: "Renovation", href: "/services#renovation" },
    { name: "Project Management", href: "/services#management" },
  ],
  contact: [
    { 
      icon: MapPin,
      content: "123 Construction Ave, Building City, ST 12345",
      href: "https://maps.google.com"
    },
    {
      icon: Phone,
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      content: "info@constructionco.com",
      href: "mailto:info@constructionco.com"
    }
  ],
  social: [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ]
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background">
      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Content */}
      <div className="container px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold mb-4">ConstructionCo</h2>
            </Link>
            <p className="text-muted-foreground mb-4">
              Building excellence through innovation and dedication. Your trusted partner in construction since 1995.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="h-5 w-5 mt-1 shrink-0" />
                    <span>{item.content}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              &copy; {currentYear} ConstructionCo. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
