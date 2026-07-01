import Link from "next/link";
import { getMdxFiles } from "@/utils/mdx";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Projects | Quilonix Showcases",
  description: "Explore the intelligent software and digital products built by Quilonix.",
};

export default function ProjectsList() {
  const posts = getMdxFiles("projects");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-primary">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="font-satoshi font-bold text-4xl md:text-6xl tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-brand-secondary text-lg max-w-2xl">
            A showcase of the premium digital products, AI systems, and cloud architecture we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/projects/${post.slug}`}
              className="clay-card clay-card-hover p-6 md:p-8 group flex flex-col h-full"
            >
              {post.category && (
                <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-3">
                  {post.category}
                </div>
              )}
              <h2 className="font-satoshi font-bold text-2xl mb-3 group-hover:text-amber-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-brand-secondary line-clamp-3 mb-6 flex-grow">
                {post.description}
              </p>
              
              <div className="flex items-center text-sm font-medium mt-auto border-t border-brand-border pt-4">
                <span className="mr-2">View Project</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
