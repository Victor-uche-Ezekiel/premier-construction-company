import { Briefcase, Building2, Users } from "lucide-react"

export const teamMembers = [
  {
    id: 1,
    slug: "john-anderson",
    name: "John Anderson",
    position: "Chief Executive Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    description: "With over 25 years of experience in construction management, John leads our company with vision and expertise.",
    content: {
      bio: "John Anderson has been at the forefront of construction innovation for over two decades. His leadership has transformed our company into an industry leader, focusing on sustainable practices and cutting-edge technologies.",
      expertise: [
        "Strategic Planning",
        "Project Management",
        "Sustainable Construction",
        "Team Leadership"
      ],
      achievements: [
        "Led company growth by 300% over 10 years",
        "Pioneered sustainable construction practices",
        "Awarded Construction Leader of the Year 2022",
        "Successfully completed over 500 projects"
      ],
      education: [
        {
          degree: "Master of Construction Management",
          school: "Stanford University",
          year: "1998"
        },
        {
          degree: "Bachelor of Civil Engineering",
          school: "MIT",
          year: "1995"
        }
      ]
    },
    contact: {
      email: "john.anderson@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/johnanderson"
    },
    stats: [
      {
        label: "Years Experience",
        value: "25+",
        icon: Briefcase
      },
      {
        label: "Projects Led",
        value: "500+",
        icon: Building2
      },
      {
        label: "Team Size",
        value: "200+",
        icon: Users
      }
    ],
    projectGallery: [
      {
        image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
        title: "Modern Office Complex",
        role: "Project Executive"
      },
      {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
        title: "Sustainable Housing Development",
        role: "Strategic Advisor"
      }
    ]
  },
  {
    id: 2,
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    position: "Chief Operations Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2787&auto=format&fit=crop",
    description: "Sarah brings 15 years of operational excellence and innovative project management strategies to our team.",
    content: {
      bio: "Sarah Mitchell brings over fifteen years of operational expertise to our company. Her innovative approach to process optimization and team management has revolutionized our project delivery systems.",
      expertise: [
        "Operations Management",
        "Process Optimization",
        "Risk Management",
        "Quality Control"
      ],
      achievements: [
        "Reduced project delivery time by 30%",
        "Implemented lean construction practices",
        "Achieved ISO 9001 certification",
        "Developed innovative safety protocols"
      ],
      education: [
        {
          degree: "MBA",
          school: "Harvard Business School",
          year: "2005"
        },
        {
          degree: "Bachelor of Construction Management",
          school: "University of California",
          year: "2000"
        }
      ]
    },
    contact: {
      email: "sarah.mitchell@example.com",
      phone: "+1 (555) 234-5678",
      linkedin: "linkedin.com/in/sarahmitchell"
    },
    stats: [
      {
        label: "Years Experience",
        value: "15+",
        icon: Briefcase
      },
      {
        label: "Projects Managed",
        value: "300+",
        icon: Building2
      },
      {
        label: "Team Members",
        value: "150+",
        icon: Users
      }
    ],
    projectGallery: [
      {
        image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
        title: "Commercial Center Development",
        role: "Operations Director"
      },
      {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
        title: "Industrial Complex",
        role: "Project Director"
      }
    ]
  },
  {
    id: 3,
    slug: "michael-chen",
    name: "Michael Chen",
    position: "Chief Technical Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop",
    description: "Michael's expertise in construction technology and sustainable building practices drives our technical innovation.",
    content: {
      bio: "Michael Chen is a pioneer in implementing cutting-edge technology solutions in construction. His vision for digital transformation has revolutionized our approach to project execution and quality control.",
      expertise: [
        "Construction Technology",
        "Digital Transformation",
        "BIM Implementation",
        "Sustainable Technologies"
      ],
      achievements: [
        "Implemented company-wide BIM adoption",
        "Developed proprietary project management software",
        "Reduced error rates by 45% through tech integration",
        "Led 20+ innovative construction projects"
      ],
      education: [
        {
          degree: "Ph.D. in Construction Technology",
          school: "Berkeley University",
          year: "2010"
        },
        {
          degree: "Master of Engineering",
          school: "Stanford University",
          year: "2005"
        }
      ]
    },
    contact: {
      email: "michael.chen@example.com",
      phone: "+1 (555) 345-6789",
      linkedin: "linkedin.com/in/michaelchen"
    },
    stats: [
      {
        label: "Years Experience",
        value: "18+",
        icon: Briefcase
      },
      {
        label: "Tech Solutions",
        value: "50+",
        icon: Building2
      },
      {
        label: "Team Size",
        value: "75+",
        icon: Users
      }
    ],
    projectGallery: [
      {
        image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070",
        title: "Smart Building Complex",
        role: "Technical Director"
      },
      {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
        title: "Sustainable Tech Center",
        role: "Innovation Lead"
      }
    ]
  }
]
