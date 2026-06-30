"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Star, GitFork, Layers, Cpu, Code2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const ORG_REPOS = [
  {
    name: "quilonix/aether-os",
    desc: "A custom edge-optimized TypeScript framework engineered for low-latency SaaS rendering and offline CRDT sync.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: "1,240",
    forks: "84",
    status: "passing",
    icon: Cpu,
  },
  {
    name: "quilonix/cognito-core",
    desc: "An enterprise vector matching system linking LLM reasoning models to localized PostgreSQL engine nodes.",
    lang: "Python",
    langColor: "#3572A5",
    stars: "842",
    forks: "53",
    status: "passing",
    icon: Layers,
  },
  {
    name: "quilonix/vortex-control",
    desc: "A minimal dashboard rendering microservices cluster health, live user footprints, and serverless compute costs.",
    lang: "Go",
    langColor: "#00ADD8",
    stars: "719",
    forks: "39",
    status: "building",
    icon: Code2,
  },
  {
    name: "quilonix/spec-driven-ide",
    desc: "Agentic template environments enabling spec-driven code generation, syntax compiling, and automated linting.",
    lang: "Rust",
    langColor: "#dea584",
    stars: "1,105",
    forks: "72",
    status: "passing",
    icon: Cpu,
  },
];

export default function Products() {
  const [repos, setRepos] = useState<any[]>(ORG_REPOS);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Quilonix/repos?sort=updated&per_page=6");
        if (!response.ok) return;
        const data = await response.json();
        
        if (data && data.length > 0) {
          const formattedRepos = data.map((repo: any) => {
            let icon = Code2;
            let langColor = "#888";
            if (repo.language === "TypeScript" || repo.language === "JavaScript") { icon = Cpu; langColor = "#3178c6"; }
            else if (repo.language === "Python") { icon = Layers; langColor = "#3572A5"; }
            else if (repo.language === "Rust") { icon = Cpu; langColor = "#dea584"; }
            else if (repo.language === "Go") { icon = Code2; langColor = "#00ADD8"; }

            return {
              name: repo.full_name,
              desc: repo.description || "No description provided.",
              lang: repo.language || "Markdown",
              langColor: langColor,
              stars: repo.stargazers_count.toString(),
              forks: repo.forks_count.toString(),
              status: "passing",
              icon: icon,
              url: repo.html_url
            };
          });
          setRepos(formattedRepos);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="products" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-brand-border">
      {/* Background Subtle Gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/[0.01] filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organization Summary & Links */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-secondary/60">
                03 // OPEN SOURCE ASSETS
              </span>
              <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary">
                Engineered for the community.
              </h2>
            </div>
            
            <p className="font-inter font-light text-brand-secondary text-sm md:text-base leading-relaxed">
              We design and construct high-performance intelligent frameworks. Our core modules are open-sourced under the Quilonix organization on GitHub, enabling teams to deploy production-grade software assets with complete transparency.
            </p>


            {/* View on GitHub Button */}
            <div className="flex">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open("https://github.com/Quilonix", "_blank")}
                className="group/btn"
              >
                Explore Organization
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Scrolling Terminal Repository Card */}
          <div className="lg:col-span-7">
            <Card
              variant="clay"
              hoverEffect={false}
              className="w-full p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden bg-brand-surface border border-brand-border h-[520px]"
            >
              {/* Decorative inner line */}
              <div className="absolute inset-2 rounded-[22px] border border-brand-primary/[0.01] pointer-events-none" />
              
              {/* Header: GitHub Org Interface */}
              <div className="flex items-center justify-between border-b border-brand-border pb-5 z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-primary/[0.03] border border-brand-border flex items-center justify-center text-brand-primary">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-general font-semibold text-sm text-brand-primary">github.com/Quilonix</span>
                    <span className="font-inter text-[10px] text-brand-secondary/60">Verified Organization</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-primary/[0.02]">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-satoshi text-[9px] font-bold text-brand-primary uppercase tracking-wider">Sync Live</span>
                </div>
              </div>

              {/* Scrolling List Container */}
              <div className="flex-1 relative overflow-hidden">
                {/* Fade overlays */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-brand-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-brand-surface to-transparent z-10 pointer-events-none" />

                {/* Vertical Scroll Loop */}
                <div 
                  className="flex flex-col gap-4 animate-marquee-vertical hover:[animation-play-state:paused] cursor-pointer"
                  style={{ animationDuration: "20s" }}
                >
                  {[...repos, ...repos].map((repo, rIdx) => {
                    const RepoIcon = repo.icon;
                    return (
                      <div
                        key={rIdx}
                        onClick={() => window.open(repo.url || `https://github.com/${repo.name}`, "_blank")}
                        className="p-4 rounded-xl border border-brand-border bg-brand-primary/[0.01] hover:bg-brand-primary/[0.03] hover:border-brand-primary/10 transition-all duration-300 flex flex-col gap-3 group/item relative"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <RepoIcon className="h-4.5 w-4.5 text-brand-secondary/60 group-hover/item:text-brand-primary transition-colors" />
                            <span className="font-mono text-xs font-semibold text-brand-primary truncate max-w-[200px] md:max-w-none">
                              {repo.name}
                            </span>
                          </div>
                          
                          {/* Stars & Forks */}
                          <div className="flex items-center gap-3 font-mono text-[10px] text-brand-secondary">
                            <span className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 text-brand-secondary/40 fill-none" />
                              {repo.stars}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3.5 w-3.5 text-brand-secondary/40" />
                              {repo.forks}
                            </span>
                          </div>
                        </div>

                        {repo.desc !== "No description provided." && (
                          <p className="font-inter font-light text-xs text-brand-secondary leading-relaxed">
                            {repo.desc}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-brand-border/40 text-[10px] font-satoshi">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                            <span className="text-brand-secondary font-medium">{repo.lang}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-mono text-[9px] text-brand-secondary/40 uppercase">Build:</span>
                            <span className={`font-mono text-[9px] font-bold ${repo.status === "passing" ? "text-green-600" : "text-amber-600 animate-pulse"}`}>
                              {repo.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
