"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Newsletter } from "@/components/sections/newsletter"

// This would typically come from your CMS or API
const blogPosts = [
  {
    id: "sustainable-construction-trends-2024",
    title: "Sustainable Construction Trends to Watch in 2024",
    author: "John Smith",
    date: "January 15, 2024",
    category: "Industry Trends",
    tags: ["Sustainability", "Innovation", "Green Building"],
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    excerpt: "Discover the latest sustainable construction trends that are shaping the future of the industry.",
    content: `
      <h2>The Future of Sustainable Construction</h2>
      <p>The construction industry is rapidly evolving, with sustainability at the forefront of innovation. In 2024, we're seeing remarkable advancements in eco-friendly building practices and materials.</p>

      <h3>1. Green Building Materials</h3>
      <p>Innovative materials are revolutionizing how we build. From recycled steel to bamboo composites, sustainable materials are becoming increasingly popular and accessible.</p>

      <h3>2. Energy Efficiency</h3>
      <p>Smart building technologies and improved insulation methods are making buildings more energy-efficient than ever before.</p>

      <h3>3. Waste Reduction</h3>
      <p>New construction methods are focusing on minimizing waste through better planning and recycling programs.</p>

      <h2>Impact on the Industry</h2>
      <p>These trends are not just environmental choices; they're becoming economic necessities. Companies that adapt to sustainable practices are seeing improved long-term cost savings and increased client satisfaction.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Reduced environmental impact</li>
        <li>Lower operating costs</li>
        <li>Improved building performance</li>
        <li>Enhanced occupant comfort</li>
        <li>Better regulatory compliance</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we move forward, sustainable construction will continue to evolve. Stay tuned for more updates on industry innovations and best practices.</p>
    `,
    relatedPosts: [
      {
        id: "smart-building-technology",
        title: "Smart Building Technology: The Next Frontier",
        excerpt: "Exploring how smart technology is revolutionizing building management and efficiency."
      },
      {
        id: "construction-safety-innovations",
        title: "Latest Innovations in Construction Safety",
        excerpt: "New technologies and practices making construction sites safer for workers."
      }
    ]
  }
  // Add more blog posts as needed
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
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
          Back to Blog
        </Button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video mb-12 overflow-hidden rounded-lg"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            width={2070}
            height={1380}
            className="object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        {/* Article Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div 
              className="prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Tags */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium hover:text-primary cursor-pointer">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest construction industry insights.
              </p>
              <Button className="w-full">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </div>
  )
}
