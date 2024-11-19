"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin, Phone } from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/sections/cta-section"
import { teamMembers } from "@/data/team"

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4">Our Team</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Meet Our Leadership Team
              </h1>
              <p className="text-xl text-muted-foreground">
                Our experienced team brings together decades of expertise in construction,
                architecture, and project management to deliver excellence in every project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/team/${member.slug}`}>
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={member.profileImage}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.position}</p>
                      <p className="text-muted-foreground mb-4">{member.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.content.expertise.slice(0, 3).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="font-normal"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="link" className="ml-auto p-0 group-hover:text-primary">
                          View Profile
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Want to Join Our Team?"
          description="We're always looking for talented individuals to join our growing team. Get in touch to learn about career opportunities."
          buttonText="Contact Us"
        />
      </main>
    </div>
  )
}

export default TeamPage
