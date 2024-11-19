"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
}

export function CTASection({
  title = "Ready to Build Your Dream?",
  description = "Let's work together to bring your construction vision to life. Our team is ready to help you every step of the way.",
  buttonText = "Contact Our Team",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-24 bg-primary ${className}`}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/80">
            {description}
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base sm:text-lg font-medium"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
