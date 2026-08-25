"use client";

import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiSearch,
  FiPieChart,
  FiUserCheck,
} from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { services } = employeeData;

const iconMap = {
  FiTrendingUp,
  FiSearch,
  FiPieChart,
  FiUserCheck,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="bg-[#E3E1DB] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Category tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-sm"
        >
          [ Services &amp; Capabilities ]
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-4xl font-black tracking-tight text-black md:text-6xl"
        >
          What I Bring To{" "}
          <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
            Smartbyte Ltd.
          </span>
        </motion.h2>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-[#0A0A0A] p-8 shadow-2xl transition-all duration-500 hover:border-[#839dc2] md:p-10"
              >
                {/* Oversized outline index number */}
                <span className="pointer-events-none absolute top-4 right-6 text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_#839dc2]">
                  {service.id}
                </span>

                {/* Icon box */}
                {Icon && (
                  <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-[#839dc2] p-4 text-2xl text-black shadow-[0_0_20px_rgba(131,157,194,0.4)] transition-transform group-hover:scale-110">
                    <Icon />
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-3 text-2xl font-black text-white transition-colors group-hover:text-[#839dc2]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </p>

                {/* Interactive skill chips */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-800 bg-neutral-900 px-3.5 py-1.5 text-xs font-bold text-neutral-300 transition-all group-hover:border-[#839dc2]/40 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
