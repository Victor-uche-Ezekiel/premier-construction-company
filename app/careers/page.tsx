"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, GraduationCap, Heart, Users, Building, HardHat, Trophy, Clock } from "lucide-react"

const jobOpenings = [
  {
    title: "Senior Project Manager",
    department: "Project Management",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    description: "Lead and oversee large-scale construction projects from inception to completion.",
    requirements: [
      "Bachelor's degree in Construction Management or related field",
      "PMP certification preferred",
      "Strong leadership and communication skills",
      "Experience with commercial construction projects",
    ]
  },
  {
    title: "Construction Site Supervisor",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Supervise day-to-day construction activities and ensure project quality and safety.",
    requirements: [
      "Proven experience in construction supervision",
      "OSHA certification",
      "Strong organizational skills",
      "Knowledge of building codes and regulations",
    ]
  },
  {
    title: "Architectural Designer",
    department: "Design",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "3+ years",
    description: "Create innovative architectural designs for residential and commercial projects.",
    requirements: [
      "Bachelor's degree in Architecture",
      "Proficiency in AutoCAD and Revit",
      "Strong portfolio of work",
      "Experience with sustainable design",
    ]
  },
  {
    title: "Civil Engineer",
    department: "Engineering",
    location: "Miami, FL",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and oversee civil engineering aspects of construction projects.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "PE license preferred",
      "Experience with infrastructure projects",
      "Strong analytical skills",
    ]
  }
]

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family",
    icon: Heart
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities and certification support",
    icon: GraduationCap
  },
  {
    title: "Work-Life Balance",
    description: "Flexible scheduling and paid time off",
    icon: Clock
  },
  {
    title: "Career Growth",
    description: "Clear career progression paths and mentorship programs",
    icon: Trophy
  }
]

const values = [
  {
    title: "Safety First",
    description: "We prioritize the safety and well-being of our team above all else",
    icon: HardHat
  },
  {
    title: "Innovation",
    description: "Embracing new technologies and methods in construction",
    icon: Building
  },
  {
    title: "Teamwork",
    description: "Collaborative environment where every voice matters",
    icon: Users
  },
  {
    title: "Excellence",
    description: "Commitment to delivering the highest quality in everything we do",
    icon: Trophy
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
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
              <Badge className="mb-4" variant="secondary">Careers</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Build Your Future With Us
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Join our team of dedicated professionals and help shape the future of construction.
                We offer exciting opportunities for growth and development.
              </p>
              <Button size="lg">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4" variant="outline">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our values shape our culture and guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-24 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4" variant="outline">Open Positions</Badge>
              <h2 className="text-3xl font-bold mb-4">Current Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our current job openings and find your perfect role
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Button>
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4" variant="outline">Benefits</Badge>
              <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits and a supportive work environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards an exciting career in construction. 
                Browse our open positions and apply today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  View All Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
