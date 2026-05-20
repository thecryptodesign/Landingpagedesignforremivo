import { motion } from "motion/react";
import { MessageSquare, Brain, Clock } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Send a message",
    description: "Simply text Remivo on WhatsApp like you're talking to a friend.",
  },
  {
    icon: Brain,
    title: "Remivo organizes it",
    description: "Our smart AI understands your request and categorizes it automatically.",
  },
  {
    icon: Clock,
    title: "Get reminded on time",
    description: "Receive timely notifications right in WhatsApp when you need them.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple as 1, 2, 3
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Remivo is effortless. No complicated setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute w-20 h-20 bg-[#10a37f]/10 rounded-full animate-pulse"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#10a37f] to-[#0d8968] flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#10a37f] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#10a37f] to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
