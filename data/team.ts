import { Briefcase, Building2, Users } from "lucide-react"

export const teamMembers = [
  {
    id: 1,
    slug: "samz-the-great",
    name: "Samz The Great",
    position: "Chief Executive Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    description: "With over 25 years of experience in construction management, Samz leads our company with vision and expertise.",
    content: {
      bio: "Samz The Great has been at the forefront of construction innovation for over two decades. His leadership has transformed our company into an industry leader, focusing on sustainable practices and cutting-edge technologies.",
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
      email: "samz@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/samzthegreat"
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
    slug: "blacka",
    name: "Blacka",
    position: "Chief Operations Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    description: "Blacka brings innovative operational strategies and exceptional project management expertise to our team.",
    content: {
      bio: "Blacka brings a wealth of operational expertise to our company. Their innovative approach to process optimization and team management has revolutionized our project delivery systems.",
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
          year: "2001"
        }
      ]
    },
    contact: {
      email: "blacka@example.com",
      phone: "+1 (555) 234-5678",
      linkedin: "linkedin.com/in/blacka"
    },
    stats: [
      {
        label: "Projects Managed",
        value: "300+",
        icon: Briefcase
      },
      {
        label: "Team Members",
        value: "150+",
        icon: Users
      },
      {
        label: "Success Rate",
        value: "99%",
        icon: Building2
      }
    ],
    projectGallery: [
      {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        title: "Corporate Headquarters",
        role: "Operations Director"
      },
      {
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
        title: "Residential Complex",
        role: "Project Lead"
      }
    ]
  },
  {
    id: 3,
    slug: "victor",
    name: "Victor",
    position: "Chief Technical Officer",
    category: "Leadership",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
    description: "Victor leads our technical innovations with expertise in cutting-edge construction technologies.",
    content: {
      bio: "Victor is a pioneer in implementing advanced construction technologies. His expertise in technical innovation and sustainable building practices has positioned our company at the forefront of modern construction.",
      expertise: [
        "Technical Innovation",
        "Sustainable Design",
        "Digital Construction",
        "Smart Building Systems"
      ],
      achievements: [
        "Implemented BIM across all projects",
        "Developed proprietary construction software",
        "Led digital transformation initiative",
        "Reduced carbon footprint by 40%"
      ],
      education: [
        {
          degree: "Ph.D. in Construction Technology",
          school: "MIT",
          year: "2010"
        },
        {
          degree: "Master of Architecture",
          school: "Yale University",
          year: "2005"
        }
      ]
    },
    contact: {
      email: "victor@example.com",
      phone: "+1 (555) 345-6789",
      linkedin: "linkedin.com/in/victor"
    },
    stats: [
      {
        label: "Patents",
        value: "15+",
        icon: Briefcase
      },
      {
        label: "Innovations",
        value: "50+",
        icon: Building2
      },
      {
        label: "Tech Projects",
        value: "100+",
        icon: Users
      }
    ],
    projectGallery: [
      {
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070",
        title: "Smart City Development",
        role: "Technical Lead"
      },
      {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        title: "Automated Building System",
        role: "Innovation Director"
      }
    ]
  }
]
