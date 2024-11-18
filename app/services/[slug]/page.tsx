"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from your CMS or API
const services = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description: "Building dream homes with quality craftsmanship and attention to detail.",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070"
    ],
    details: {
      experience: "25+ years",
      completedProjects: "500+",
      typicalDuration: "6-12 months",
      specializations: [
        "Custom Homes",
        "Multi-Family Units",
        "Luxury Residences",
        "Home Renovations"
      ]
    },
    process: [
      {
        title: "Initial Consultation",
        description: "Understanding your vision, requirements, and budget constraints."
      },
      {
        title: "Design & Planning",
        description: "Creating detailed architectural plans and obtaining necessary permits."
      },
      {
        title: "Construction",
        description: "Building your dream home with quality materials and craftsmanship."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous inspections to ensure everything meets our high standards."
      },
      {
        title: "Final Walkthrough",
        description: "Detailed inspection with clients before final handover."
      }
    ],
    benefits: [
      "Customized designs to match your lifestyle",
      "High-quality materials and finishes",
      "Energy-efficient construction",
      "Professional project management",
      "Warranty protection"
    ]
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "Creating modern, efficient commercial spaces for businesses to thrive.",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"
    ],
    details: {
      experience: "30+ years",
      completedProjects: "200+",
      typicalDuration: "12-24 months",
      specializations: [
        "Office Buildings",
        "Retail Spaces",
        "Industrial Facilities",
        "Mixed-Use Developments"
      ]
    },
    process: [
      {
        title: "Project Planning",
        description: "Comprehensive analysis of business requirements and site evaluation."
      },
      {
        title: "Design Development",
        description: "Creating efficient, modern designs that maximize space utilization."
      },
      {
        title: "Construction Phase",
        description: "Building with minimal disruption to surrounding businesses."
      },
      {
        title: "Systems Integration",
        description: "Installing and testing all building systems and technology."
      },
      {
        title: "Project Completion",
        description: "Final inspections and handover of the completed facility."
      }
    ],
    benefits: [
      "Modern, efficient designs",
      "Sustainable building practices",
      "Cost-effective solutions",
      "Timely project completion",
      "Long-term maintenance support"
    ]
  },
  {
    id: "renovation-services",
    title: "Renovation Services",
    description: "Transforming existing spaces with modern updates and improvements.",
    category: "Renovation",
    coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?q=80&w=2070",
      "https://images.unsplash.com/photo-1523413183762-1d63aea8d71d?q=80&w=2070"
    ],
    details: {
      experience: "20+ years",
      completedProjects: "1000+",
      typicalDuration: "2-6 months",
      specializations: [
        "Kitchen Remodeling",
        "Bathroom Updates",
        "Office Renovations",
        "Complete Home Makeovers"
      ]
    },
    process: [
      {
        title: "Assessment",
        description: "Evaluating current conditions and renovation requirements."
      },
      {
        title: "Design Consultation",
        description: "Creating renovation plans that match your vision and budget."
      },
      {
        title: "Demolition & Preparation",
        description: "Careful removal of outdated elements and space preparation."
      },
      {
        title: "Renovation Work",
        description: "Implementing modern updates with minimal disruption."
      },
      {
        title: "Final Touches",
        description: "Adding finishing touches and ensuring client satisfaction."
      }
    ],
    benefits: [
      "Modern design updates",
      "Improved functionality",
      "Energy efficiency upgrades",
      "Minimal disruption",
      "Value addition to property"
    ]
  }
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge className="mb-4">{service.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-muted-foreground">{service.description}</p>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video mb-12 overflow-hidden rounded-lg"
        >
          <Image
            src={service.coverImage}
            alt={service.title}
            width={2070}
            height={1380}
            className="object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        {/* Service Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            {/* Process Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-4 rounded-lg bg-secondary/50"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Service Details */}
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Service Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Experience</dt>
                  <dd className="font-medium">{service.details.experience}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Completed Projects
                  </dt>
                  <dd className="font-medium">{service.details.completedProjects}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Typical Duration
                  </dt>
                  <dd className="font-medium">{service.details.typicalDuration}</dd>
                </div>
              </dl>
            </div>

            {/* Specializations */}
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Specializations</h3>
              <ul className="space-y-2">
                {service.details.specializations.map((specialization, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                    {specialization}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-4">
                Contact us today for a free consultation
              </p>
              <Button className="w-full">Contact Us</Button>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Service gallery image ${index + 1}`}
                  width={2070}
                  height={1380}
                  className="object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
