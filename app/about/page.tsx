"use client"

import { motion } from "framer-motion"
import { Stats } from "@/components/sections/stats"
import { Values } from "@/components/sections/values"
import { ArrowRight, Award, Calendar, FileCheck, CheckCircle2, Users, ChartBar, History, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { teamMembers } from "@/data/team"
import { CTASection } from "@/components/sections/cta-section"

const timeline = [
  {
    id: 1,
    year: "1995",
    title: "Company Founded",
    description: "Started as a small residential construction company with a team of dedicated professionals",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
    stats: "50+ Residential Projects"
  },
  {
    id: 2,
    year: "2000",
    title: "Commercial Expansion",
    description: "Expanded into commercial construction projects, marking our entry into larger-scale developments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    stats: "$10M+ Project Value"
  },
  {
    id: 3,
    year: "2005",
    title: "Regional Growth",
    description: "Established offices across multiple states, becoming a regional construction leader",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2787&auto=format&fit=crop",
    stats: "3 Regional Offices"
  },
  {
    id: 4,
    year: "2010",
    title: "Sustainable Building",
    description: "Pioneered green building practices in the region, setting new industry standards",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=2070",
    stats: "LEED Certification"
  },
  {
    id: 5,
    year: "2015",
    title: "International Projects",
    description: "Expanded globally with our first international construction projects",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    stats: "5+ Countries"
  },
  {
    id: 6,
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented cutting-edge construction technologies and BIM integration",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    stats: "100% Digital"
  }
]

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    icon: FileCheck
  },
  {
    title: "LEED Certification",
    description: "Leadership in Energy and Environmental Design",
    icon: Award
  },
  {
    title: "Safety Excellence",
    description: "OSHA Safety & Health Achievement Recognition",
    icon: CheckCircle2
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center py-20 sm:py-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/75 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2787&auto=format&fit=crop"
              alt="Construction team at work"
              className="w-full h-full object-cover"
              width={2787}
              height={1858}
            />
          </div>
          
          <div className="container relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4" variant="secondary">About Us</Badge>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Building Tomorrow's World Today
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                With over two decades of experience, we've established ourselves as
                a leading force in the construction industry. Our commitment to
                excellence and innovation drives everything we do.
              </p>
              <Link href="/contact" >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>

            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none z-10" />
        </section>

        {/* About Sections */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Story</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our journey, meet our team, and learn about our mission to transform the construction industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/about/our-history" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative bg-background rounded-xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/50"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px] opacity-100 transition-opacity group-hover:opacity-50" />
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <History className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Our History</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      From humble beginnings to industry leadership, discover our journey of growth and excellence spanning over three decades.
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Explore Our Journey</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link href="/about/our-team" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-background rounded-xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/50"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px] opacity-100 transition-opacity group-hover:opacity-50" />
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Our Team</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      Meet the experts behind our success - a dedicated team of professionals committed to excellence in construction.
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Meet Our Experts</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link href="/about/our-mission" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative bg-background rounded-xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/50"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px] opacity-100 transition-opacity group-hover:opacity-50" />
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Our Mission</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      Discover our vision and commitment to innovation, sustainability, and excellence in construction.
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Learn Our Vision</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4" variant="outline">Our Mission</Badge>
                <h2 className="text-3xl font-bold mb-6">Building Tomorrow's World Today</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're committed to delivering exceptional construction services that transform 
                  communities and create lasting value for our clients. Through innovation, 
                  sustainability, and unwavering dedication to quality, we build more than 
                  structures – we build futures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Quality Excellence</h3>
                      <p className="text-muted-foreground">Delivering superior craftsmanship in every project we undertake</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Client Partnership</h3>
                      <p className="text-muted-foreground">Building lasting relationships through collaborative success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Timely Delivery</h3>
                      <p className="text-muted-foreground">Meeting deadlines with precision while maintaining quality</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2787&auto=format&fit=crop"
                  alt="Modern construction project"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={2787}
                  height={1858}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4" variant="outline">Our Journey</Badge>
              <h2 className="text-4xl font-bold mb-6">Milestones That Define Us</h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to industry leadership, our journey reflects our commitment to excellence and innovation in construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={2070}
                        height={1380}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <ChartBar className="h-4 w-4" />
                        {item.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge className="mb-4" variant="outline">Certifications</Badge>
              <h2 className="text-3xl font-bold mb-4">Industry Recognition</h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to excellence is recognized through various industry certifications and awards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 h-12 w-12 text-primary">
                        {<cert.icon className="h-12 w-12" />}
                      </div>
                      <CardTitle>{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground">
                      {cert.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our experienced team brings together decades of expertise in construction and project management.
              </p>
              <Link href="/team">
                <Button variant="outline" size="lg">
                  View All Team Members
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Link 
                  key={index}
                  href={`/team/${member.slug}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-background rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={member.profileImage}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary mb-4">{member.position}</p>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{member.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">View Profile</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <Values />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  )
}
