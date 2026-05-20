import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0fdf4] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Never Forget Again.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Remivo is your personal productivity assistant on WhatsApp — helping you manage reminders, habits, follow-ups, and daily tasks effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#10a37f] hover:bg-[#0f9172] text-white px-8 py-4 rounded-xl font-medium text-lg inline-flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-medium text-lg border-2 border-gray-200 transition-colors">
                Try Remivo on WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppMockup() {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-[#10a37f] px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Remivo</h3>
            <p className="text-green-100 text-sm">online</p>
          </div>
        </div>

        <div className="p-6 space-y-4 bg-[#f0f0f0] min-h-[500px]">
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow">
              <p className="text-sm text-gray-800">
                Hi! I'm Remivo, your personal productivity assistant. How can I help you today?
              </p>
              <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow">
              <p className="text-sm text-gray-800">
                Remind me to call mom tomorrow at 5pm
              </p>
              <span className="text-xs text-gray-600 mt-1 block">10:31 AM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow">
              <p className="text-sm text-gray-800">
                Got it! I'll remind you to call mom tomorrow at 5:00 PM. ✅
              </p>
              <span className="text-xs text-gray-500 mt-1 block">10:31 AM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow">
              <p className="text-sm text-gray-800">
                Also track my morning exercise habit
              </p>
              <span className="text-xs text-gray-600 mt-1 block">10:32 AM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow">
              <p className="text-sm text-gray-800">
                Perfect! I've started tracking your morning exercise habit. I'll check in with you daily! 💪
              </p>
              <span className="text-xs text-gray-500 mt-1 block">10:32 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
