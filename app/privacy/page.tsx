"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    • Name and contact information
    • Project requirements and preferences
    • Communication history
    • Payment information
    
    We also automatically collect certain information when you visit our website, including:
    • Device information
    • IP address
    • Browser type
    • Pages viewed`
  },
  {
    title: "How We Use Your Information",
    content: `We use the collected information to:
    • Provide and improve our services
    • Communicate with you about projects
    • Send important updates and notifications
    • Process payments
    • Analyze website usage
    • Comply with legal obligations`
  },
  {
    title: "Information Sharing",
    content: `We may share your information with:
    • Project partners and contractors
    • Service providers and vendors
    • Legal authorities when required
    
    We do not sell your personal information to third parties.`
  },
  {
    title: "Data Security",
    content: `We implement appropriate security measures to protect your information, including:
    • Encryption of sensitive data
    • Regular security assessments
    • Access controls
    • Secure data storage`
  },
  {
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal information
    • Request corrections
    • Delete your information
    • Opt-out of communications
    • File a complaint
    
    Contact us to exercise these rights.`
  },
  {
    title: "Cookies",
    content: `We use cookies to:
    • Improve website functionality
    • Analyze traffic
    • Personalize content
    • Remember preferences
    
    You can control cookie settings in your browser.`
  },
  {
    title: "Updates to Privacy Policy",
    content: `We may update this privacy policy periodically. We will notify you of any material changes through:
    • Email notifications
    • Website announcements
    • Direct communications`
  },
  {
    title: "Contact Information",
    content: `For privacy-related inquiries:
    Email: privacy@constructco.com
    Phone: +1 (555) 123-4567
    Address: 123 Construction Ave, New York, NY 10001`
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4" variant="secondary">Privacy Policy</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Last updated: January 2024
              </p>
              <p className="text-lg text-muted-foreground">
                At ConstructCo, we take your privacy seriously. This policy describes how we collect,
                use, and protect your personal information.
              </p>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
        </section>

        {/* Content Sections */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose prose-gray max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-base text-muted-foreground">
                      {section.content}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
