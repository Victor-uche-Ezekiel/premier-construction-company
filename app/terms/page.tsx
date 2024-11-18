"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.`
  },
  {
    title: "Services Description",
    content: `ConstructCo provides construction, renovation, and consulting services including but not limited to:
    • Residential construction
    • Commercial construction
    • Renovation and remodeling
    • Project management
    • Construction consulting
    
    Service availability may vary by location and project requirements.`
  },
  {
    title: "User Responsibilities",
    content: `When using our services, you agree to:
    • Provide accurate and complete information
    • Maintain the confidentiality of any account credentials
    • Notify us immediately of any unauthorized use
    • Comply with all applicable laws and regulations
    • Use our services in good faith`
  },
  {
    title: "Project Terms",
    content: `For construction projects:
    • All estimates are subject to change based on site conditions
    • Timeline estimates are approximate
    • Changes to project scope require written approval
    • Payment schedules must be adhered to
    • Work will comply with local building codes
    
    Specific terms will be detailed in individual project contracts.`
  },
  {
    title: "Intellectual Property",
    content: `All content on this website, including but not limited to:
    • Text
    • Graphics
    • Logos
    • Images
    • Audio clips
    • Digital downloads
    • Data compilations
    
    is the property of ConstructCo and protected by international copyright laws.`
  },
  {
    title: "Limitation of Liability",
    content: `ConstructCo shall not be liable for:
    • Indirect, incidental, or consequential damages
    • Lost profits or business interruption
    • Data loss or corruption
    • Damages resulting from third-party services
    
    Our liability is limited to the amount paid for the specific service in question.`
  },
  {
    title: "Warranty and Guarantees",
    content: `Our work comes with:
    • Workmanship warranty
    • Material warranties as provided by manufacturers
    • Structural guarantees where applicable
    
    Specific warranty terms will be provided in project documentation.`
  },
  {
    title: "Dispute Resolution",
    content: `Any disputes shall be resolved through:
    1. Direct negotiation
    2. Mediation
    3. Binding arbitration
    
    The process will follow the jurisdiction of New York State law.`
  },
  {
    title: "Modifications to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services following any changes indicates acceptance of the new terms.`
  },
  {
    title: "Contact Information",
    content: `For questions about these terms:
    Email: legal@constructco.com
    Phone: +1 (555) 123-4567
    Address: 123 Construction Ave, New York, NY 10001`
  }
]

export default function TermsPage() {
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
              <Badge className="mb-4" variant="secondary">Terms of Service</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Last updated: January 2024
              </p>
              <p className="text-lg text-muted-foreground">
                Please read these terms of service carefully before using our website or services.
                These terms govern your use of our website and services.
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
