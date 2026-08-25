"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { projects } = employeeData;

export default function Projects() {
  return (
    <section id="projects" className="bg-[#E3E1DB] py-24 px-4 sm:px-8 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Category badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-sm"
        >
          [ Featured Case Studies ]
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-black tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Projects &amp;{" "}
          <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
            Case Studies
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16 max-w-2xl text-base font-medium text-neutral-700 sm:text-lg"
        >
          A selection of research-driven projects delivered through Smartbyte Ltd.,
          showcasing market analysis, competitor intelligence, and consumer insights.
        </motion.p>

        {/* Case Study Cards */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#0D0D0D] p-6 shadow-2xl transition-all duration-300 hover:border-[#839dc2]/60 sm:rounded-[2.5rem] sm:p-10"
            >
              {/* Top row — category & impact */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                <span className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white">
                  {project.category}
                </span>
                <span className="rounded-full bg-[#839dc2] px-3.5 py-1.5 text-xs font-extrabold text-black shadow-sm">
                  {project.impactMetric}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-black leading-tight text-white transition-colors group-hover:text-[#839dc2] sm:text-3xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-8 max-w-3xl text-sm font-normal leading-relaxed text-neutral-300 sm:text-base">
                {project.description}
              </p>

              {/* Key Deliverables */}
              <span className="mb-3 block text-[11px] font-black uppercase tracking-widest text-[#839dc2]">
                Key Deliverables
              </span>
              <div className="mb-8 flex flex-wrap gap-2.5">
                {project.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-2 rounded-xl border border-neutral-800/90 bg-neutral-900 px-3.5 py-2 text-xs font-medium text-neutral-200"
                  >
                    <FiCheck className="text-[#839dc2]" />
                    {deliverable}
                  </div>
                ))}
              </div>

              {/* Bottom tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Index watermark */}
              <span className="pointer-events-none absolute bottom-6 right-6 text-5xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] sm:text-7xl">
                {project.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
