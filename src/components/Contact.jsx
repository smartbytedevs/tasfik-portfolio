"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { contact } = employeeData;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <>
      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="bg-[#E3E1DB] py-24 px-4 sm:px-8 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Category badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-sm"
          >
            [ Direct Contact ]
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-black tracking-tight text-black sm:text-6xl"
          >
            {contact.headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 max-w-2xl text-base font-medium text-neutral-700 sm:text-lg"
          >
            {contact.subheadline}
          </motion.p>

          {/* ─── BENTO GRID ─── */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — WhatsApp (featured) */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#0D0D0D] p-8 shadow-2xl transition-all duration-300 hover:border-[#839dc2] md:col-span-2 lg:col-span-1"
            >
              <div>
                <FiMessageSquare className="mb-4 text-3xl text-[#839dc2]" />
                <span className="mb-1 block text-xs font-black uppercase tracking-widest text-[#839dc2]">
                  WhatsApp Direct
                </span>
                <p className="text-lg font-bold text-white">
                  {contact.whatsappDisplay}
                </p>
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#839dc2] py-3.5 text-xs font-black uppercase tracking-wider text-black shadow-md transition-all hover:bg-[#6d87ae]"
              >
                Start Chat
                <FiMessageSquare />
              </a>
            </motion.div>

            {/* Card 2 — Email */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col justify-between rounded-[2rem] border border-neutral-800 bg-[#0D0D0D] p-8 shadow-2xl transition-all duration-300 hover:border-[#839dc2]"
            >
              <div>
                <FiMail className="mb-4 text-3xl text-[#839dc2]" />
                <span className="mb-1 block text-xs font-black uppercase tracking-widest text-[#839dc2]">
                  Email
                </span>
                <p className="break-all text-lg font-bold text-white sm:text-xl">
                  {contact.email}
                </p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-[#839dc2] hover:text-[#839dc2]"
              >
                Send Email
                <FiMail />
              </a>
            </motion.div>

            {/* Card 3 — Phone & Location */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col justify-between rounded-[2rem] border border-neutral-800 bg-[#0D0D0D] p-8 shadow-2xl transition-all duration-300 hover:border-[#839dc2]"
            >
              <div>
                {/* Phone */}
                <FiPhoneCall className="mb-4 text-3xl text-[#839dc2]" />
                <p className="mb-6 text-lg font-bold text-white">
                  {contact.phone}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-neutral-300">
                  <FiMapPin className="text-[#839dc2]" />
                  {contact.location}
                </div>
                <span className="mt-3 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-400">
                  {contact.availability}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER BAR ─── */}
      <footer className="bg-[#E3E1DB] px-4 pb-12 pt-8 sm:px-8 md:px-16">
        <div className="mx-auto max-w-7xl border-t border-black/15">
          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-semibold text-neutral-600 sm:flex-row">
            <p>
              &copy; 2026 Tasfik Hossain &mdash; Business Research Manager at
              Smartbyte Ltd.
            </p>
            <a
              href="#home"
              className="transition-colors hover:text-black"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
