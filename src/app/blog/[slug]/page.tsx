import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxFileBySlug, getMdxFiles } from "@/utils/mdx";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getMdxFiles("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getMdxFileBySlug("blog", resolvedParams.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Quilonix Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getMdxFileBySlug("blog", resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-primary">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-3xl mx-auto w-full">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-brand-secondary hover:text-brand-primary transition-colors mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        
        <header className="mb-12 border-b border-brand-border pb-8">
          <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-brand-secondary gap-4 text-sm">
            {post.author && (
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-primary">
                  {post.author.charAt(0)}
                </div>
                {post.author}
              </div>
            )}
            <span className="opacity-50">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert prose-headings:font-satoshi prose-headings:text-brand-primary prose-p:text-brand-secondary prose-strong:text-brand-primary prose-ul:text-brand-secondary prose-ol:text-brand-secondary prose-li:text-brand-secondary max-w-none prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-img:rounded-2xl prose-img:border prose-img:border-brand-border prose-pre:border prose-pre:border-brand-border">
          <MDXRemote source={post.content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
