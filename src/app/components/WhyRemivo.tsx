import { motion } from "motion/react";
import { Brain, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Reduce Mental Stress",
    description: "Stop trying to remember everything. Let Remivo be your second brain and free up mental space for what matters most.",
  },
  {
    icon: Zap,
    title: "Improve Consistency",
    description: "Build better habits and routines. Remivo keeps you accountable and helps you maintain momentum every single day.",
  },
  {
    icon: Shield,
    title: "Stay Organized",
    description: "Never lose track of important tasks. Everything is organized, categorized, and delivered to you at the perfect time.",
  },
];

export function WhyRemivo() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f0fdf4] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Personal Accountability Assistant
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600">
            <p>
              In today's fast-paced world, it's easy to forget important tasks and lose track of your goals.
              Remivo helps you stay on top of everything without the stress of traditional to-do apps.
            </p>
            <p>
              With Remivo, you get a personal assistant that lives right in your WhatsApp —
              no new apps to download, no complex interfaces to learn. Just simple, natural conversations
              that keep you organized and productive.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10a37f] to-[#0d8968] mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
