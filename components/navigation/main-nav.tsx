"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  ChevronDown,
  Menu,
  ArrowRight,
} from "lucide-react"
import { services } from "@/data/services"

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 relative z-50">
        {navigationItems.map((item) => (
          item.title === "Services" ? (
            <div key={item.href} className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname.startsWith(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto hover:bg-transparent"
                >
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground" />
                </Button>
              </div>
              <div className="absolute -left-48 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[300px] w-max max-w-[95vw]">
                <div className="bg-white dark:bg-gray-950 rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/5 p-4">
                  <div className="grid gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group/item block p-3 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-accent"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                              {service.title}
                            </div>
                            <div className="text-sm text-muted-foreground line-clamp-2">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover/item:text-primary transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          )
        ))}
        
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-full h-full p-0 border-none sm:max-w-none bg-gray-950"
        >
          <div className="h-full flex flex-col overflow-hidden bg-gray-950">
            <div className="px-6 py-4 border-b border-gray-800">
              <SheetTitle className="text-lg font-bold text-white">Menu</SheetTitle>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
              <nav className="flex flex-col p-6">
                <style jsx global>{`
                  /* Webkit browsers like Chrome, Safari */
                  .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                  }
                  
                  .scrollbar-thin::-webkit-scrollbar-track {
                    background: #1f2937; /* gray-800 */
                  }
                  
                  .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #4b5563; /* gray-600 */
                    border-radius: 3px;
                  }
                  
                  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #6b7280; /* gray-500 */
                  }

                  /* Firefox */
                  .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #4b5563 #1f2937;
                  }
                `}</style>
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors p-4 rounded-lg",
                      pathname === item.href
                        ? "text-white bg-gray-800"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                
                {/* Mobile Services Menu */}
                <div className="space-y-4 py-6 border-t border-gray-800 mt-4">
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium px-4 mb-4 text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="group block p-4 rounded-lg transition-colors border border-transparent hover:border-gray-800 hover:bg-gray-800/50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                              {service.title}
                            </div>
                            <div className="mt-1 text-sm text-gray-500 group-hover:text-gray-400">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
