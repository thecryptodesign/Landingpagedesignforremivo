import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#10a37f] to-[#0d8968] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LThtLTggNGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stay Organized. Stay Consistent.
          </h2>
          <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-2xl mx-auto">
            Join thousands of people who never forget what matters. Start your journey to effortless productivity today.
          </p>
          <button className="bg-white hover:bg-gray-50 text-[#10a37f] px-10 py-5 rounded-xl font-semibold text-lg inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl">
            Start Using Remivo
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-6 text-green-100 text-sm">
            No credit card required • Free to get started • Works on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
