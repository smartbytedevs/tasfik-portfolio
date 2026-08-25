"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import employeeData from "@/../data/employee.json";

const { faqs } = employeeData;

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="bg-[#E3E1DB] py-24 px-4 sm:px-8 md:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Category badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-[#839dc2] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-sm"
        >
          [ Frequently Asked Questions ]
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-4xl font-black tracking-tight text-black sm:text-5xl"
        >
          Got{" "}
          <span className="inline-block rounded-2xl bg-black px-4 py-1 text-[#839dc2]">
            Questions
          </span>
          ?
        </motion.h2>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`mb-4 overflow-hidden rounded-2xl border bg-[#0D0D0D] shadow-xl transition-all duration-300 ${
                  isOpen
                    ? "border-[#839dc2]/40"
                    : "border-neutral-800 hover:border-[#839dc2]/40"
                }`}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left font-black text-lg text-white transition-colors hover:text-[#839dc2] sm:p-7 sm:text-xl"
                >
                  {faq.question}
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-[#839dc2]"
                        : "text-neutral-400"
                    }`}
                  />
                </button>

                {/* Answer area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-neutral-900 px-6 pb-6 pt-4 sm:px-7">
                        <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
