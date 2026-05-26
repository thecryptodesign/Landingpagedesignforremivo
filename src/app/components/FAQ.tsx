import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Remivo work?",
    answer:
      `Remivo connects to your WhatsApp and acts as your personal productivity assistant. Simply send it a message — like "remind me to call Sarah at 3pm" — and it will understand, schedule it, and send you a timely notification right in WhatsApp when the time comes. No apps to download, no complicated setup.`,
  },
  {
    question: "Do I need to install anything to use Remivo?",
    answer:
      "No installation required. Remivo works entirely through WhatsApp, which you already have. Just add Remivo as a contact, send it a message, and you're ready to go. It's that simple.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. Your privacy is our top priority. We never read your personal WhatsApp conversations — Remivo only processes messages sent directly to it. All data is encrypted in transit and at rest, and we never sell your information to third parties.",
  },
  {
    question: "Can I use Remivo for free?",
    answer:
      "Remivo is currently in early access. Join the waitlist to get notified when we launch and secure your spot for free early access. We plan to offer a generous free tier so you can experience all the core features before deciding if a premium plan is right for you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#10a37f] mb-4 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stay Organized. Stay Consistent.
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Everything you need to know about Remivo.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{
                  borderColor: isOpen ? "rgba(16,163,127,0.3)" : "rgba(0,0,0,0.08)",
                  background: isOpen ? "#f0fdf4" : "#ffffff",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f0fdf4]"
                >
                  <span
                    className="text-gray-900 transition-colors"
                    style={{
                      fontWeight: 600,
                      color: isOpen ? "#10a37f" : undefined,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: isOpen ? "#10a37f" : "rgba(0,0,0,0.06)",
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-600" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
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
