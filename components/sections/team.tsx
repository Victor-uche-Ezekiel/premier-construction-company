"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/team/john-smith.jpg",
    bio: "25+ years of construction industry experience",
  },
  {
    name: "Sarah Johnson",
    role: "Project Director",
    image: "/team/sarah-johnson.jpg",
    bio: "Expert in commercial project management",
  },
  {
    name: "Michael Brown",
    role: "Chief Architect",
    image: "/team/michael-brown.jpg",
    bio: "Award-winning architectural designs",
  },
  {
    name: "Emily Davis",
    role: "Safety Manager",
    image: "/team/emily-davis.jpg",
    bio: "Certified safety professional",
  },
]

export function Team() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 bg-secondary/10" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experienced professionals dedicated to delivering excellence in every project
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="mt-3 text-sm text-center text-muted-foreground">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
