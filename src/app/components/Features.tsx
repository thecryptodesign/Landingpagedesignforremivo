import { motion } from "motion/react";
import { Bell, TrendingUp, MessageCircle, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss important tasks. Set one-time or recurring reminders with natural language.",
  },
  {
    icon: TrendingUp,
    title: "Habit Tracking",
    description: "Build consistent routines. Track daily habits and maintain your streaks effortlessly.",
  },
  {
    icon: MessageCircle,
    title: "Follow-Up Assistant",
    description: "Stay on top of conversations. Get reminded to follow up on important messages.",
  },
  {
    icon: BarChart3,
    title: "Weekly Productivity Summary",
    description: "See your progress. Receive weekly insights on your productivity and achievements.",
  },
];

export function Features() {
  return (
    <section id="use-case" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#10a37f] mb-4 tracking-wide uppercase">
            Built for everyday productivity
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything you need to stay organized
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#10a37f]/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10a37f] to-[#0d8968] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
