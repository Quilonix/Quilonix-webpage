import { MetadataRoute } from "next";
import { getMdxFiles } from "@/utils/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quilonix.in";
  
  const blogs = getMdxFiles("blog").map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const projects = getMdxFiles("projects").map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogs,
    ...projects,
  ];
}
