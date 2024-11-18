"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Building2, Trophy, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// This would typically come from your CMS or API
const milestones = [
  {
    id: "company-founding",
    title: "Company Founding",
    year: "1995",
    subtitle: "The Beginning of Excellence",
    category: "Foundation",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "The inception of our construction company marked the beginning of a journey dedicated to excellence in construction.",
    content: {
      story: "In 1995, with a vision to transform the construction industry, our founders established what would become one of the region's most trusted construction companies. Starting with a small team and a big dream, we began our journey in residential construction.",
      impact: "This milestone laid the foundation for decades of innovation, quality, and trust in the construction industry. Our founding principles of integrity, excellence, and client satisfaction continue to guide us today.",
      keyPoints: [
        "Started with residential construction projects",
        "Established core company values",
        "Built first team of skilled professionals",
        "Completed first major project"
      ]
    },
    stats: [
      {
        label: "Initial Team Size",
        value: "12",
        icon: Users
      },
      {
        label: "First Year Projects",
        value: "8",
        icon: Building2
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
    ]
  },
  {
    id: "commercial-expansion",
    title: "Commercial Expansion",
    year: "2000",
    subtitle: "Expanding Horizons",
    category: "Growth",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "A strategic expansion into commercial construction marked a new era of growth and capabilities.",
    content: {
      story: "By 2000, our success in residential construction enabled us to expand into commercial projects. This strategic move opened new opportunities and challenges, allowing us to showcase our expertise on a larger scale.",
      impact: "The expansion into commercial construction significantly increased our project portfolio and established us as a versatile construction company capable of handling diverse projects.",
      keyPoints: [
        "Entered commercial construction market",
        "Expanded team and expertise",
        "Acquired new equipment and resources",
        "Established commercial division"
      ]
    },
    stats: [
      {
        label: "Commercial Projects",
        value: "25+",
        icon: Building2
      },
      {
        label: "Team Growth",
        value: "150%",
        icon: Users
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
    ]
  },
  {
    id: "industry-leadership",
    title: "Industry Leadership",
    year: "2020",
    subtitle: "Setting New Standards",
    category: "Achievement",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "Achieving industry leadership through innovation, sustainability, and excellence in construction.",
    content: {
      story: "By 2020, our commitment to excellence and innovation positioned us as an industry leader. We've pioneered sustainable construction practices and embraced cutting-edge technologies, setting new standards in the industry.",
      impact: "Our leadership role has influenced industry practices and inspired a new generation of construction professionals. We continue to drive innovation and sustainability in construction.",
      keyPoints: [
        "Recognized as industry leader",
        "Implemented sustainable practices",
        "Adopted advanced technologies",
        "Mentored industry professionals"
      ]
    },
    stats: [
      {
        label: "Industry Awards",
        value: "15+",
        icon: Trophy
      },
      {
        label: "Market Share",
        value: "25%",
        icon: Target
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
    ]
  }
]

export default function MilestonePage({ params }: { params: { slug: string } }) {
  const milestone = milestones.find((m) => m.id === params.slug)

  if (!milestone) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Milestones
        </Button>

        {/* Milestone Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge className="mb-4">{milestone.category}</Badge>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">{milestone.title}</h1>
            <Badge variant="secondary" className="text-lg px-4 py-1">
              {milestone.year}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{milestone.description}</p>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video mb-12 overflow-hidden rounded-lg"
        >
          <Image
            src={milestone.coverImage}
            alt={milestone.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            {/* Story */}
            <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-semibold mb-6">The Story</h2>
              <p className="text-lg leading-relaxed mb-8">{milestone.content.story}</p>
              <h3 className="text-xl font-semibold mb-4">Impact & Legacy</h3>
              <p className="text-lg leading-relaxed">{milestone.content.impact}</p>
            </div>

            {/* Key Points */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {milestone.content.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 p-4 rounded-lg flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {milestone.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${milestone.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Key Statistics</h3>
              <div className="space-y-6">
                {milestone.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Other Milestones</h3>
              <div className="space-y-3">
                {milestones
                  .filter((m) => m.id !== milestone.id)
                  .map((m) => (
                    <Link
                      key={m.id}
                      href={`/about/milestones/${m.id}`}
                      className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{m.title}</div>
                          <div className="text-sm text-muted-foreground">{m.year}</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 transform rotate-180" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
