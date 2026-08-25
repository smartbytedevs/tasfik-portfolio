"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { about, experience } = employeeData;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutExperience() {
  return (
    <>
      {/* ─── ABOUT ME ─── */}
      <section id="about" className="bg-[#E3E1DB] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Category tag */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-sm"
          >
            [ About Me ]
          </motion.span>

          {/* Editorial headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-none tracking-tight text-black md:text-6xl"
          >
            The{" "}
            <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
              Research
            </span>{" "}
            Expert.
            <br />
            That&apos;s{" "}
            <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
              Tasfik
            </span>
            .
          </motion.h2>

          {/* ─── BENTO STATS GRID ─── */}
          <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 — Featured (2 cols) */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-8 shadow-2xl md:col-span-2"
            >
              <span className="mb-4 block text-xs font-black uppercase tracking-widest text-[#839dc2]">
                Bio
              </span>
              <p className="text-lg font-medium leading-relaxed text-neutral-300">
                {about.bio}
              </p>
            </motion.div>

            {/* Card 2 — Stat */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] p-6 shadow-xl transition-all duration-300 hover:border-[#839dc2]"
            >
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-[#839dc2]">
                {about.stats[0].label}
              </span>
              <span className="text-xl font-bold text-white transition-transform group-hover:translate-x-1">
                {about.stats[0].value}
              </span>
            </motion.div>

            {/* Card 3 — Stat */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] p-6 shadow-xl transition-all duration-300 hover:border-[#839dc2]"
            >
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-[#839dc2]">
                {about.stats[1].label}
              </span>
              <span className="text-xl font-bold text-white transition-transform group-hover:translate-x-1">
                {about.stats[1].value}
              </span>
            </motion.div>

            {/* Card 4 — Full width bar (3 cols) */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/90 p-6 md:col-span-3"
            >
              {[about.stats[2], about.stats[3], about.stats[0]].map(
                (stat, i) => (
                  <span key={stat.label} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="text-[#839dc2]">&bull;</span>
                    )}
                    <span className="text-sm font-bold text-white">
                      {stat.value}
                    </span>
                  </span>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section
        id="experience"
        className="bg-[#E3E1DB] px-6 py-20 md:px-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Category tag */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-sm"
          >
            [ Experience ]
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 text-4xl font-black leading-none tracking-tight text-black md:text-6xl"
          >
            Where I&apos;ve{" "}
            <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
              Worked
            </span>
          </motion.h2>

          {/* Vertical timeline */}
          <div className="relative ml-2 border-l-2 border-black/20 space-y-8 pl-4 sm:ml-6 sm:pl-10 mr-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glowing neon dot */}
                <span className="absolute -left-[23px] top-6 z-10 h-3.5 w-3.5 rounded-full bg-[#839dc2] ring-4 ring-[#E3E1DB] sm:-left-[47px]" />

                {/* Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0D0D0D] p-5 shadow-2xl transition-all duration-300 hover:border-[#839dc2]/60 sm:p-8">
                  {/* Top meta row — dates & type */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-bold text-[#839dc2]">
                      {exp.period}
                    </span>
                    <span className="shrink-0 rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold text-neutral-300">
                      {exp.type}
                    </span>
                  </div>

                  {/* Job title */}
                  <h3 className="mb-2 block w-full text-xl font-black leading-snug tracking-tight text-white sm:text-2xl">
                    {exp.role}
                  </h3>

                  {/* Company tag */}
                  <span className="mb-4 inline-block rounded-lg bg-[#839dc2] px-3 py-1 text-xs font-extrabold text-black">
                    {exp.company}
                  </span>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                    {exp.description}
                  </p>

                  {/* Highlight pills */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="flex flex-col gap-2.5">
                      {exp.highlights.map((hl) => (
                        <div
                          key={hl}
                          className="flex w-full items-start gap-3 rounded-2xl border border-neutral-800/80 bg-neutral-900/90 p-3.5 sm:p-4"
                        >
                          <FiCheck className="mt-0.5 shrink-0 text-base text-[#839dc2]" />
                          <span className="text-xs font-medium leading-relaxed text-neutral-300 sm:text-sm">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
