'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Construction, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mb-8">
            <Construction className="h-24 w-24 mx-auto text-primary" />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Looks like this page is still under construction.
          </p>

          {/* Home Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/">
              <Button size="lg" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 transform rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-0 bottom-1/4 h-64 w-64 translate-x-1/2 transform rounded-full bg-primary/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
