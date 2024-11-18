"use client"

import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const projects = [
  {
    id: "modern-office-complex",
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Downtown Business District",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "A state-of-the-art office building featuring sustainable design elements and modern amenities.",
    year: "2023",
  },
  {
    id: "luxury-residential-tower",
    title: "Luxury Residential Tower",
    category: "Residential",
    location: "Waterfront District",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    description: "Premium residential complex with high-end finishes and panoramic views.",
    year: "2023",
  },
  {
    id: "shopping-mall-development",
    title: "Shopping Mall Development",
    category: "Commercial",
    location: "Suburban Center",
    image: "https://images.unsplash.com/photo-1613514785940-daed77165130?q=80&w=2070",
    description: "Modern retail space featuring innovative design and sustainable practices.",
    year: "2022",
  },
  {
    id: "healthcare-facility",
    title: "Healthcare Facility",
    category: "Healthcare",
    location: "Medical District",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070",
    description: "State-of-the-art medical facility with advanced technology integration.",
    year: "2022",
  },
  {
    id: "educational-campus",
    title: "Educational Campus",
    category: "Education",
    location: "University District",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
    description: "Modern educational complex with innovative learning spaces and sustainable features.",
    year: "2023",
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Industrial Park",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    description: "Large-scale warehouse facility with advanced logistics capabilities.",
    year: "2022",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise
            in various construction sectors.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    width={2070}
                    height={1380}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-sm font-medium mb-1">{project.category}</div>
                      <div className="text-xs opacity-80">{project.location}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Completed in {project.year}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
