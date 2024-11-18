"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 sm:py-24 bg-background border-t">
      <div className="container px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <Badge className="mb-2 sm:mb-4">Newsletter</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2 sm:mb-4">Stay Updated with Construction Trends</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-8">
              Subscribe to our newsletter for the latest industry insights, project updates, and construction tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 sm:space-y-0 sm:flex sm:gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-3 text-sm sm:text-base rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
