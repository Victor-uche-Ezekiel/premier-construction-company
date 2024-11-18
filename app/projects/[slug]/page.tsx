"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from your CMS or API
const projects = [
  {
    id: "modern-office-complex",
    title: "Modern Office Complex",
    description: "A state-of-the-art office complex featuring sustainable design and smart building technology.",
    location: "Downtown Business District",
    date: "2023",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    ],
    details: {
      client: "Tech Innovations Inc.",
      duration: "18 months",
      value: "$45M",
      size: "125,000 sq ft",
      services: ["Architecture", "Construction Management", "Interior Design"],
      features: [
        "LEED Platinum certification",
        "Smart building systems",
        "Green roof garden",
        "EV charging stations",
        "Floor-to-ceiling windows"
      ]
    }
  },
  {
    id: "luxury-residential-tower",
    title: "Luxury Residential Tower",
    description: "Premium residential complex with high-end finishes, panoramic views, and luxury amenities.",
    location: "Waterfront District",
    date: "2023",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop"
    ],
    details: {
      client: "Luxury Living Developers",
      duration: "24 months",
      value: "$85M",
      size: "250,000 sq ft",
      services: ["Architecture", "Construction Management", "Interior Design", "Landscape Design"],
      features: [
        "Panoramic ocean views",
        "Private balconies",
        "Luxury amenities",
        "Smart home integration",
        "24/7 concierge service"
      ]
    }
  },
  {
    id: "shopping-mall-development",
    title: "Shopping Mall Development",
    description: "Modern retail space featuring innovative design, sustainable practices, and diverse shopping experiences.",
    location: "Suburban Center",
    date: "2022",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1613514785940-daed77165130?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    ],
    details: {
      client: "Retail Development Corp",
      duration: "30 months",
      value: "$120M",
      size: "500,000 sq ft",
      services: ["Architecture", "Construction Management", "Interior Design", "Civil Engineering"],
      features: [
        "Modern retail spaces",
        "Food court",
        "Entertainment zone",
        "Underground parking",
        "Sustainable design"
      ]
    }
  },
  {
    id: "healthcare-facility",
    title: "Healthcare Facility",
    description: "State-of-the-art medical facility with advanced technology integration and patient-centered design.",
    location: "Medical District",
    date: "2022",
    category: "Healthcare",
    coverImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2070&auto=format&fit=crop"
    ],
    details: {
      client: "Healthcare Solutions Inc.",
      duration: "20 months",
      value: "$75M",
      size: "150,000 sq ft",
      services: ["Architecture", "Construction Management", "MEP Engineering", "Medical Planning"],
      features: [
        "Advanced medical equipment",
        "Patient comfort focus",
        "Infection control systems",
        "Modern operating rooms",
        "Healing gardens"
      ]
    }
  },
  {
    id: "educational-campus",
    title: "Educational Campus",
    description: "Modern educational complex with innovative learning spaces and sustainable features.",
    location: "University District",
    date: "2023",
    category: "Education",
    coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
    ],
    details: {
      client: "State University",
      duration: "24 months",
      value: "$95M",
      size: "300,000 sq ft",
      services: ["Architecture", "Construction Management", "Landscape Design", "Educational Planning"],
      features: [
        "Modern classrooms",
        "Research laboratories",
        "Student commons",
        "Sports facilities",
        "Sustainable design"
      ]
    }
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse",
    description: "Large-scale warehouse facility with advanced logistics capabilities and sustainable features.",
    location: "Industrial Park",
    date: "2022",
    category: "Industrial",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553850435-1a8a87bc2bd0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504376379689-8d54347b26c6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
    ],
    details: {
      client: "Logistics Pro Corp",
      duration: "12 months",
      value: "$35M",
      size: "200,000 sq ft",
      services: ["Architecture", "Construction Management", "Industrial Engineering"],
      features: [
        "Advanced logistics systems",
        "Loading docks",
        "Climate control",
        "Security systems",
        "Energy efficiency"
      ]
    }
  }
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
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
          Back to Projects
        </Button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {project.date}
            </div>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video mb-12 overflow-hidden rounded-lg"
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            width={2070}
            height={1380}
            className="object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-8">{project.description}</p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Gallery */}
            <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Project gallery image ${index + 1}`}
                    width={2070}
                    height={1380}
                    className="object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.details.client}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Duration</dt>
                  <dd className="font-medium">{project.details.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Project Value</dt>
                  <dd className="font-medium">{project.details.value}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Size</dt>
                  <dd className="font-medium">{project.details.size}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Services Provided</h3>
              <ul className="space-y-2">
                {project.details.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
