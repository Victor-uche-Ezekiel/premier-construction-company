"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, CheckCircle2, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface LeadershipItem {
  name: string
  position: string
  experience: string
  expertise: string
}

interface Goal {
  title: string
  description: string
}

interface SectionContent {
  introduction: string
  timeline?: TimelineItem[]
  leadership?: LeadershipItem[]
  goals?: Goal[]
  achievements?: string[]
  values?: string[]
  commitments?: string[]
}

interface AboutSection {
  id: string
  title: string
  subtitle: string
  category: string
  coverImage: string
  description: string
  content: SectionContent
  gallery: string[]
}

// This would typically come from your CMS or API
const aboutSections: AboutSection[] = [
  {
    id: "our-history",
    title: "Our History",
    subtitle: "Building Excellence Since 1990",
    category: "Company History",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: "From humble beginnings to industry leadership, our journey spans over three decades of construction excellence.",
    content: {
      introduction: "Founded in 1990, our construction company has grown from a small local contractor to a leading force in the construction industry. Through dedication, innovation, and unwavering commitment to quality, we've built not just structures, but lasting relationships with our clients and communities.",
      timeline: [
        {
          year: "1990",
          title: "Company Founded",
          description: "Started as a small residential construction company"
        },
        {
          year: "2000",
          title: "Commercial Expansion",
          description: "Expanded into commercial construction projects"
        },
        {
          year: "2010",
          title: "Regional Growth",
          description: "Established presence across multiple states"
        },
        {
          year: "2020",
          title: "Industry Leadership",
          description: "Became one of the top construction firms in the region"
        }
      ],
      achievements: [
        "Over 1000 successful projects completed",
        "Multiple industry awards for excellence",
        "Sustainable building certifications",
        "Community development initiatives"
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
    ]
  },
  {
    id: "our-team",
    title: "Our Team",
    subtitle: "Meet the Experts Behind Our Success",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
    description: "A dedicated team of professionals committed to delivering excellence in every project.",
    content: {
      introduction: "Our success is built on the expertise and dedication of our team. From seasoned industry veterans to innovative young professionals, each member brings unique skills and perspectives to deliver exceptional results for our clients.",
      leadership: [
        {
          name: "John Smith",
          position: "Chief Executive Officer",
          experience: "25+ years in construction",
          expertise: "Strategic Planning, Project Management"
        },
        {
          name: "Sarah Johnson",
          position: "Chief Operations Officer",
          experience: "20+ years in operations",
          expertise: "Operations Management, Process Optimization"
        },
        {
          name: "Michael Chen",
          position: "Chief Technical Officer",
          experience: "18+ years in engineering",
          expertise: "Technical Innovation, Sustainable Design"
        }
      ],
      values: [
        "Excellence in execution",
        "Innovation in approach",
        "Integrity in dealings",
        "Safety first culture"
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070"
    ]
  },
  {
    id: "our-mission",
    title: "Our Mission",
    subtitle: "Building Tomorrow's World Today",
    category: "Company Values",
    coverImage: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
    description: "Committed to excellence, innovation, and sustainable development in construction.",
    content: {
      introduction: "Our mission is to transform the construction industry through innovation, sustainability, and excellence. We strive to create lasting value for our clients while contributing to the development of sustainable communities.",
      goals: [
        {
          title: "Excellence",
          description: "Delivering superior quality in every project"
        },
        {
          title: "Innovation",
          description: "Embracing new technologies and methods"
        },
        {
          title: "Sustainability",
          description: "Promoting environmentally responsible construction"
        },
        {
          title: "Community",
          description: "Contributing to social development"
        }
      ],
      commitments: [
        "Quality craftsmanship",
        "Environmental responsibility",
        "Client satisfaction",
        "Community engagement"
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070"
    ]
  }
]

export default function AboutPage({ params }: { params: { slug: string } }) {
  const section = aboutSections.find((s) => s.id === params.slug)

  if (!section) {
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
          Back to About
        </Button>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge className="mb-4">{section.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{section.title}</h1>
          <p className="text-xl text-muted-foreground">{section.description}</p>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video mb-12 overflow-hidden rounded-lg"
        >
          <Image
            src={section.coverImage}
            alt={section.title}
            fill
            width={2070}
            height={1380}
            className="object-cover"
            style={{ width: '100%', height: '100%' }}
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
            {/* Introduction */}
            <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
              <p className="text-lg leading-relaxed">{section.content.introduction}</p>
            </div>

            {/* Timeline or Leadership or Goals */}
            {section.id === "our-history" && section.content.timeline && (
              <div className="space-y-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Company Timeline</h2>
                {section.content.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">{item.year}</div>
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.id === "our-team" && section.content.leadership && (
              <div className="space-y-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Leadership Team</h2>
                {section.content.leadership.map((leader, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">{leader.name}</div>
                      <h3 className="font-medium mb-2">{leader.position}</h3>
                      <p className="text-muted-foreground mb-2">{leader.experience}</p>
                      <p className="text-muted-foreground">{leader.expertise}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.id === "our-mission" && section.content.goals && (
              <div className="space-y-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Our Goals</h2>
                {section.content.goals.map((goal, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Lists */}
            {section.content.achievements && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
                <ul className="space-y-4">
                  {section.content.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.content.values && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
                <ul className="space-y-4">
                  {section.content.values.map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.content.commitments && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Our Commitments</h2>
                <ul className="space-y-4">
                  {section.content.commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Gallery Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            {section.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
