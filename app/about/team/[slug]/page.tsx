"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { teamMembers } from "@/data/team"

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Back Button */}
        <Link href="/about">
          <Button
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Button>
        </Link>

        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src={member.profileImage}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Badge className="mb-4">{member.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
            <p className="text-xl text-primary mb-6">{member.position}</p>
            <p className="text-lg text-muted-foreground mb-8">{member.description}</p>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                {member.contact.email}
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                {member.contact.phone}
              </Button>
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                {member.contact.linkedin}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {member.stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border"
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Bio */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <p className="text-muted-foreground">{member.content.bio}</p>
            </section>

            {/* Expertise */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.content.expertise.map((item, index) => (
                  <Badge key={index} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
              <ul className="space-y-2">
                {member.content.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </section>

            {/* Project Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.projectGallery.map((project, index) => (
                  <div key={index} className="group relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end">
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-white/80">{project.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Education */}
            <section className="bg-card p-6 rounded-xl border mb-8">
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                {member.content.education.map((edu, index) => (
                  <div key={index}>
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.school}, {edu.year}</div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
