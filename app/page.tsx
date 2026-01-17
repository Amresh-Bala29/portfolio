"use client";

import { useState, useRef, useCallback } from "react";
import { HeroMesh } from "@/components/HeroMesh";
import { Nav } from "@/components/Nav";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, FileText, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMouse({ x, y, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <main className="relative min-h-screen text-black">
      <Nav />

      {/* Hero Section */}
      <Section 
        id="hero" 
        className="min-h-screen flex items-center relative overflow-hidden pt-20 hero-gradient"
      >
        <div 
          ref={heroRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 z-0"
        >
          <HeroMesh mouse={mouse} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-violet-600 font-semibold mb-4 text-sm tracking-wide uppercase">
              <MapPin size={14} />
              {siteConfig.location}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black">
              {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-4 font-bold leading-tight">
              {siteConfig.tagline}
            </p>
            <p className="text-lg md:text-xl text-black/50 mb-10 leading-relaxed font-medium max-w-2xl">
              {siteConfig.heroSubheadline}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/80 transition-colors shadow-lg shadow-black/5"
              >
                View projects
          </a>
          <a
                href="#contact" 
                className="px-8 py-3 rounded-full border border-black/10 text-black/70 hover:bg-black/5 transition-all"
              >
                Get in touch
              </a>
            </div>

            <div className="flex gap-6">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
            target="_blank"
            rel="noopener noreferrer"
                  className="text-black/30 hover:text-black transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  {social.name === "GitHub" && <Github size={18} />}
                  {social.name === "LinkedIn" && <Linkedin size={18} />}
                  {social.name === "Resume" && <FileText size={18} />}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-white/50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.projects.map((project: any) => (
              <div 
                key={project.title}
                className="glass glass-hover p-8 rounded-2xl flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black/90">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-black/60 mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>
                <ul className="mb-6 space-y-2 flex-grow">
                  {project.highlights?.map((highlight: string, i: number) => (
                    <li key={i} className="text-sm text-black/50 leading-relaxed flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  {project.tags.map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-black/[0.03] border border-black/[0.05] text-black/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">About</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8 font-medium">
                {siteConfig.about}
              </p>
              
              <h3 className="text-sm font-bold uppercase tracking-widest text-black/30 mb-4">Leadership & Community</h3>
              <ul className="space-y-3">
                {siteConfig.leadership.map((item, i) => (
                  <li key={i} className="text-black/60 font-medium flex gap-3 items-start">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black/30 mb-6">Current Interests</h3>
              <ul className="space-y-4">
                {siteConfig.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span className="text-black/70 font-semibold">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-white/50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Experience</h2>
          <div className="space-y-12">
            {siteConfig.experience.map((exp) => (
              <div key={exp.company + exp.role} className="relative pl-8 border-l border-black/5 pb-4 last:pb-0">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-violet-400 shadow-sm" />
                <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-xl font-bold text-black/90">{exp.role}</h3>
                  <span className="text-black/30 text-sm font-bold bg-black/[0.03] px-3 py-1 rounded-full">{exp.dates}</span>
                </div>
                <h4 className="text-violet-600 font-bold mb-4 text-sm uppercase tracking-wide">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-black/50 leading-relaxed font-medium flex gap-2">
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
        <Container>
          <div className="glass p-12 md:p-16 rounded-3xl text-center shadow-xl shadow-black/[0.02]">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Let&apos;s build something.</h2>
            <p className="text-black/50 mb-10 max-w-md mx-auto text-lg font-medium">
              I&apos;m currently open to new opportunities and interesting projects. 
              Feel free to reach out via email or any of my socials.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 px-10 py-4 rounded-full bg-black text-white font-bold hover:scale-105 transition-all shadow-lg shadow-black/10"
              >
                <Mail size={20} />
                Send an Email
              </a>
              <div className="flex items-center gap-4">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-black/30 hover:text-black hover:border-black/10 hover:bg-black/5 transition-all"
                    aria-label={social.name}
                  >
                    {social.name === "GitHub" && <Github size={20} />}
                    {social.name === "LinkedIn" && <Linkedin size={20} />}
                    {social.name === "Resume" && <FileText size={20} />}
                  </a>
                ))}
              </div>
            </div>
        </div>
        </Container>
      </Section>

      <footer className="py-12 border-t border-black/5 text-center text-black/20 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Three.js</p>
      </footer>
      </main>
  );
}
