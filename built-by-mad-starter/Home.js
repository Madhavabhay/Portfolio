import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-[#F4F4F5] min-h-screen px-6 md:px-16 py-12 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-4 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Built by Mad
          </motion.h1>
          <p className="text-lg text-[#71717A]">
            I build fast, aesthetic websites and smart AI-powered solutions for modern brands.
          </p>
          <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-2xl mt-4">
            Let’s Work Together
          </button>
        </div>
        <motion.div
          className="mt-12 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img
            src="/hero-abstract.png"
            alt="Abstract Background"
            className="w-[300px] md:w-[400px] rounded-xl"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="mt-32 space-y-6 max-w-3xl">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-[#C0C0C0]">
          I'm Madhav, a 17-year-old self-taught web developer from Pune. My code is clean, my designs are minimal,
          and my vibes are aesthetic. I specialize in responsive websites, AI chatbot integration, and branding for
          creators and startups.
        </p>
        <p className="italic text-[#3B82F6]">
          "I build things that look simple, but feel unforgettable."
        </p>
      </section>

      {/* Services */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Web Design & Development", desc: "Clean, responsive websites built with Next.js and Tailwind." },
            { title: "AI Chatbot Integration", desc: "Custom OpenAI-powered bots with real-time website deployment." },
            { title: "Instagram Content Design", desc: "Minimal, aesthetic post packs that boost brand vibe." },
            { title: "Tech Consulting", desc: "Automation, stack guidance, and brand-focused tech strategy." },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#111] p-6 rounded-2xl border border-[#2a2a2a] hover:border-[#3B82F6] transition"
            >
              <h3 className="text-xl font-medium mb-2">{s.title}</h3>
              <p className="text-[#C0C0C0]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-32 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-[#C0C0C0]">
          DM me on Instagram <span className="text-[#3B82F6]">@mad.codes</span> or drop a mail at <br />
          <span className="text-[#3B82F6]">madnext@gmail.com</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-[#2a2a2a] text-sm text-center relative">
        <p>Built with late nights & broken playlists 💔</p>
        <p className="text-[#71717A] mt-2">© 2025 Madhav. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
