"use client"

import Link from "next/link"
import { MainNav } from "@/components/navigation/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Construction } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Construction className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">ConstructCo</span>
        </Link>
        <div className="flex items-center space-x-4">
          <MainNav />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
