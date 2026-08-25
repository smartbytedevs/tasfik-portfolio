"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTrendingUp, FiAward, FiFileText, FiCheckCircle } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { personalInfo, hero, badges } = employeeData;

const iconMap = {
  FiTrendingUp,
  FiAward,
  FiFileText,
  FiCheckCircle,
};

const skillsBadge = badges.find((b) => b.type === "skills");
const metricBadges = badges.filter((b) => b.type === "number");
const primaryMetric = metricBadges[0];
const secondaryMetric = metricBadges[1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#E3E1DB] flex flex-col justify-between pt-16"
    >
      {/* Giant background name */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-full text-center text-[28vw] font-black leading-none tracking-tighter text-[#1D4ED8] z-0 select-none"
      >
        {personalInfo.bgName}
      </motion.span>

      {/* Portrait image — top center, overlapping the giant text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-md h-[75vh] z-10 md:hidden"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={hero.profileImageUrl}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Portrait image — desktop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[88vh] w-auto"
        >
          <Image
            src={hero.profileImageUrl}
            alt={personalInfo.name}
            width={0}
            height={0}
            sizes="88vh"
            className="h-full w-auto object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Mobile Badge 1 — Middle-Left Skills */}
      {skillsBadge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="absolute top-[40%] left-3 z-30 max-w-[150px] rounded-2xl border border-white/25 bg-black/65 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
        >
          <span className="mb-2 block border-b border-white/10 pb-1 text-xs font-black uppercase tracking-widest text-[#839dc2]">
            {skillsBadge.title}
          </span>
          <ul className="space-y-1.5">
            {skillsBadge.items.map((item, idx) => {
              const SkillIcon = iconMap[Object.keys(iconMap)[idx % Object.keys(iconMap).length]];
              return (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white drop-shadow-sm">
                  {SkillIcon && <SkillIcon className="text-sm text-[#839dc2]" />}
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}

      {/* Mobile Badge 2 — Middle-Right Metrics */}
      {primaryMetric && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute top-[42%] right-3 z-30 min-w-[130px] rounded-2xl border border-white/25 bg-black/65 p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
        >
          <span className="block text-4xl font-black leading-none tracking-tight text-[#839dc2] drop-shadow-md md:text-5xl">
            {primaryMetric.value}
          </span>
          <span className="mt-1 block text-xs font-bold uppercase leading-tight tracking-wider text-white drop-shadow-sm">
            {primaryMetric.label}
          </span>
        </motion.div>
      )}

      {/* Mobile Badge 3 — Lower-Left */}
      {secondaryMetric && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="absolute bottom-16 left-4 z-30 flex items-center gap-3 rounded-2xl border border-white/25 bg-black/65 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
        >
          {(() => {
            const MetricIcon = iconMap[secondaryMetric.icon];
            return MetricIcon ? <MetricIcon className="text-xl text-[#839dc2]" /> : null;
          })()}
          <div>
            <span className="block text-base font-black text-white drop-shadow-sm">
              {secondaryMetric.value}
            </span>
            <span className="text-[11px] font-medium text-gray-300">
              {secondaryMetric.label}
            </span>
          </div>
        </motion.div>
      )}

      {/* Mobile headline — over lower torso */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-[22%] left-6 z-30 max-w-[75%] text-left text-3xl font-black leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-4xl md:hidden"
      >
        {hero.headline}
      </motion.h1>

      {/* Desktop headline — over torso */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-[50%] z-30 hidden -translate-x-1/2 text-center text-5xl font-black leading-[0.95] tracking-tight text-white drop-shadow-md md:block md:text-7xl"
      >
        {hero.headline}
      </motion.h1>

      {/* Desktop badges */}
      {primaryMetric && (
        <FloatingBadge
          badge={primaryMetric}
          className="left-[6%] top-[32%] hidden md:block"
          delay={0.6}
          floatDuration={4.5}
        />
      )}
      {secondaryMetric && (
        <FloatingBadge
          badge={secondaryMetric}
          className="left-[19%] top-[68%] hidden md:block"
          delay={0.9}
          floatDuration={5.5}
        />
      )}
      {skillsBadge && (
        <FloatingSkillsBadge
          badge={skillsBadge}
          className="right-[16%] top-[50%] hidden md:block"
          delay={1.2}
          floatDuration={6}
        />
      )}

      {/* Desktop CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        className="absolute bottom-[10%] left-1/2 z-40 hidden -translate-x-1/2 space-x-4 md:flex"
      >
        {hero.ctaButtons.map((btn) => (
          <motion.a
            key={btn.label}
            href={btn.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#839dc2] px-8 py-3 text-sm font-extrabold shadow-lg transition-transform hover:scale-105 text-black"
          >
            {btn.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom-left corner caption */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-3 left-4 z-20 text-[11px] font-semibold tracking-tight text-neutral-800 md:bottom-8 md:left-16 md:text-xs md:font-medium"
      >
        {hero.subHeadlineLeft}
      </motion.span>

      {/* Bottom-right corner text — desktop only */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 right-8 z-20 hidden max-w-[260px] text-right text-xs font-medium leading-snug text-gray-800 md:block md:right-16"
      >
        {hero.subHeadlineRight}
      </motion.span>
    </section>
  );
}

function FloatingBadge({ badge, className, delay, floatDuration }) {
  const Icon = iconMap[badge.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex items-center gap-3 rounded-2xl border border-white/25 bg-black/65 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        {Icon && <Icon className="text-2xl text-[#839dc2]" />}
        <div>
          <span className="block text-xl font-black text-white drop-shadow-sm">
            {badge.value}
          </span>
          <span className="text-xs font-medium text-gray-300">{badge.label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingSkillsBadge({ badge, className, delay, floatDuration }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="rounded-2xl border border-white/25 bg-black/65 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <span className="mb-2 block border-b border-white/10 pb-1 text-xs font-black uppercase tracking-widest text-[#839dc2]">
          {badge.title}
        </span>
        <ul className="space-y-1">
          {badge.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs font-bold text-white drop-shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
