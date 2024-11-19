"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { notFound, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { teamMembers } from "@/data/team"
import { CTASection } from "@/components/sections/cta-section"

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container px-4 sm:px-6">
        {/* Go To Team Button */}
        <Link href="/team">
        <Button
          variant="ghost"
          className="mb-8"
          >
          Go To Team Page
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
          </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src={member.profileImage}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <Badge className="mb-4">{member.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
            <p className="text-xl text-primary mb-6">{member.position}</p>
            <p className="text-lg text-muted-foreground mb-8">
              {member.content.bio}
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href={`mailto:${member.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`https://${member.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`tel:${member.contact.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {member.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Details Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {member.content.expertise.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
            <ul className="space-y-3">
              {member.content.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              {member.content.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">
                    {edu.school}, {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Notable Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {member.projectGallery.map((project, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-white/80">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <CTASection
            title="Want to Work With Us?"
            description="Join our team of professionals and be part of innovative construction projects."
            buttonText="Contact Us"
          />
        </div>
      </div>
    </div>
  )
}
