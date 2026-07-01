import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxFileBySlug, getMdxFiles } from "@/utils/mdx";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getMdxFiles("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getMdxFileBySlug("projects", resolvedParams.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Quilonix Projects`,
    description: post.description,
  };
}

export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getMdxFileBySlug("projects", resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-primary">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-brand-secondary hover:text-brand-primary transition-colors mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
        
        <header className="mb-12 border-b border-brand-border pb-8 text-center max-w-3xl mx-auto">
          {post.category && (
            <div className="text-sm font-semibold text-amber-700 tracking-wider uppercase mb-4">
              {post.category}
            </div>
          )}
          <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary max-w-2xl mx-auto">
            {post.description}
          </p>
          
          {post.link && (
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 mt-8 rounded-full bg-brand-primary text-brand-bg font-medium hover:bg-brand-secondary transition-colors"
            >
              Visit Live Project
            </a>
          )}
        </header>

        <article className="prose prose-lg dark:prose-invert prose-headings:font-satoshi max-w-3xl mx-auto prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-img:rounded-2xl prose-img:border prose-img:border-brand-border prose-pre:border prose-pre:border-brand-border">
          <MDXRemote source={post.content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
