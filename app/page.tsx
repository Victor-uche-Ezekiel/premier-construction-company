"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ArrowUpRight, Star, Calendar, Ruler, Hammer } from "lucide-react"
import { Stats } from "@/components/sections/stats"
import { Newsletter } from "@/components/sections/newsletter"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "State-of-the-art office building with sustainable features",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    description: "High-end apartments with premium amenities",
  },
  {
    title: "Shopping Mall Development",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1613514785940-daed77165130?q=80&w=2070",
    description: "Modern retail space with innovative design",
  },
]

const features = [
  "Expert Project Management",
  "Quality Craftsmanship",
  "Sustainable Building Practices",
  "Innovative Design Solutions",
  "Safety First Approach",
  "Timely Project Completion",
]

const testimonials = [
  {
    name: "John Smith",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    quote: "Their attention to detail and commitment to quality is unmatched. They delivered our project ahead of schedule.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    quote: "Outstanding service from start to finish. The team was professional and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974",
    quote: "A reliable partner that brings innovation and expertise to every project. Highly recommended.",
    rating: 5,
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and project scope to understand your needs perfectly.",
    icon: Calendar,
  },
  {
    title: "Planning & Design",
    description: "Our team creates detailed plans and designs tailored to your specifications.",
    icon: Ruler,
  },
  {
    title: "Project Execution",
    description: "We bring your vision to life with precision and attention to detail.",
    icon: Hammer,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks ensure everything meets our high standards.",
    icon: CheckCircle,
  },
]

const newsItems = [
  {
    title: "Sustainable Building Practices for 2024",
    date: "Jan 15, 2024",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070",
    excerpt: "Exploring the latest trends in eco-friendly construction and sustainable building materials.",
  },
  {
    title: "Award-Winning Commercial Project",
    date: "Jan 10, 2024",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
    excerpt: "Our team received recognition for excellence in commercial construction design.",
  },
  {
    title: "Innovation in Modern Architecture",
    date: "Jan 5, 2024",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070",
    excerpt: "Discovering new architectural approaches that blend functionality with aesthetic appeal.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-20 sm:py-24">
          {/* Background Video and Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2787&auto=format&fit=crop"
                alt="Construction background"
                className="w-full h-full object-cover"
                width={2787}
                height={1858}
                priority
              />
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hidden sm:block w-full h-full object-cover absolute inset-0 mix-blend-overlay"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-construction-site-with-cranes-2633/1080p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Hero Content */}
          <div className="container relative z-20 text-white px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto sm:mx-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Building Excellence, Delivering Dreams
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200">
                Transform your vision into reality with our expert construction services. 
                We bring innovation, quality, and reliability to every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-sm sm:text-base">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black text-sm sm:text-base"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring together expertise, innovation, and dedication to deliver exceptional construction solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Featured Projects Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Featured Projects</Badge>
              <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of completed projects, showcasing our commitment
                to excellence in construction.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-lg bg-background shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={2070}
                        height={1350}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2">{project.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="outline" size="sm">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <Badge className="mb-3 sm:mb-4">Our Process</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">How We Work</h2>
              <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                We follow a proven methodology to ensure your project is delivered successfully
              </p>
            </motion.div>

            {/* Mobile Process Steps (visible on small screens) */}
            <div className="sm:hidden space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 border-l-2 border-primary/20 pb-8 last:pb-0"
                  >
                    <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Step {index + 1}</span>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Desktop Process Steps (hidden on small screens) */}
            <div className="hidden sm:block relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
              
              {/* Process Steps */}
              <div className="space-y-12">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <span className="text-sm text-muted-foreground mb-1 block">Step {index + 1}</span>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read what our satisfied clients have to say about their experience
                working with us.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-24 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Latest News</Badge>
              <h2 className="text-3xl font-bold mb-4">Construction Insights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest news and insights from the construction
                industry.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Link href={`/blog/${item.title.toLowerCase().replace(/\s+/g, '-')}`} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-lg bg-background hover:bg-accent transition-colors"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all z-10" />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={2070}
                        height={1350}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <Button variant="link" className="p-0">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Ready to Build Your Dream?</h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/90 max-w-xl mx-auto">
                  Let's discuss your project and bring your vision to life. Our team
                  is ready to help you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="w-full sm:w-auto text-sm sm:text-base"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base"
                    >
                      View Portfolio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
    </div>
  )
}
