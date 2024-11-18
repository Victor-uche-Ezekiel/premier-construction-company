"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Shield,
  Target,
  Users,
  Leaf,
  Lightbulb,
  Heart,
} from "lucide-react"

const values = [
  {
    name: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring superior craftsmanship and attention to detail.",
    icon: Shield,
  },
  {
    name: "Safety First",
    description:
      "Safety is our top priority, implementing rigorous protocols to protect our team and clients.",
    icon: Target,
  },
  {
    name: "Client Focus",
    description:
      "We prioritize our clients' needs, ensuring clear communication and exceeding expectations.",
    icon: Users,
  },
  {
    name: "Sustainability",
    description:
      "Committed to environmentally responsible construction practices and sustainable building solutions.",
    icon: Leaf,
  },
  {
    name: "Innovation",
    description:
      "Embracing cutting-edge technology and methods to deliver modern construction solutions.",
    icon: Lightbulb,
  },
  {
    name: "Community Impact",
    description:
      "Making a positive difference in our community through responsible development and local engagement.",
    icon: Heart,
  },
]

export function Values() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide our work and relationships
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.name}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
