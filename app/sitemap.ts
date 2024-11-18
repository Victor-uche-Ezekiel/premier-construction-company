import { MetadataRoute } from "next"
import { services } from "@/data/services"
import { siteConfig } from "@/config/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}${service.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...routes, ...serviceRoutes]
}
