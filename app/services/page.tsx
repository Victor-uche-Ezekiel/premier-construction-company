"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Building, Hammer, HardHat } from "lucide-react"
import Image from "next/image"
import { services } from "@/data/services"
import { CTASection } from "@/components/sections/cta-section"

const serviceIcons = {
  "residential-construction": Building2,
  "commercial-construction": Building,
  "renovation-services": Hammer,
  "project-management": HardHat,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-20 sm:py-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2787&auto=format&fit=crop"
              alt="Construction site"
              className="w-full h-full object-cover"
              width={2787}
              height={1858}
              priority
            />
          </div>
          
          {/* Hero Content */}
          <div className="container relative z-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <Badge className="mb-4" variant="secondary">Our Services</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Comprehensive Construction Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                From residential projects to commercial developments, we offer a full range of construction services tailored to your needs.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none z-10" />
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
                <p className="text-xl text-muted-foreground">
                  Discover our range of professional construction services designed to bring your vision to life
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {services.map((service) => {
                  const IconComponent = serviceIcons[service.href.split('/').pop() as keyof typeof serviceIcons]
                  return (
                    <Link key={service.href} href={service.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-xl border bg-card hover:bg-accent transition-all duration-300"
                      >
                        {/* Service Image */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.coverImage}
                            alt={service.title}
                            width={800}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Service Content */}
                        <div className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="space-y-2">
                              <h3 className="text-2xl font-semibold tracking-tight">
                                {service.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                            {IconComponent && (
                              <div className="bg-primary/10 p-3 rounded-full">
                                <IconComponent className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                              </div>
                            )}
                          </div>
                          <div className="flex items-center text-primary">
                            <span className="font-medium">Learn more</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>

              {/* CTA Section */}
              <CTASection 
                title="Ready to Start Your Construction Project?"
                description="Get in touch with our expert team to discuss your construction needs and bring your vision to life."
                buttonText="Start Your Project"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
