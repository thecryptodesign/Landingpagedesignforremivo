import { motion } from "motion/react";
import { Calendar, Repeat, CheckCircle2, Clock, Flame } from "lucide-react";

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful features that work for you
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From simple reminders to advanced habit tracking, Remivo adapts to your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#f0fdf4] to-white border border-gray-200 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#10a37f] flex items-center justify-center">
                <Repeat className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Recurring Reminders
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#f0fdf4] rounded-lg">
                  <Calendar className="w-5 h-5 text-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Team standup</p>
                    <p className="text-sm text-gray-600">Every Mon, Wed, Fri at 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f0fdf4] rounded-lg">
                  <Calendar className="w-5 h-5 text-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Water the plants</p>
                    <p className="text-sm text-gray-600">Every Sunday at 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f0fdf4] rounded-lg">
                  <Calendar className="w-5 h-5 text-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Pay rent</p>
                    <p className="text-sm text-gray-600">First day of every month</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#fff7ed] to-white border border-gray-200 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Habit Streak Tracking
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-lg">💪</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Morning Exercise</p>
                      <p className="text-sm text-gray-600">14 day streak</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-orange-500">🔥</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-lg">📚</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Daily Reading</p>
                      <p className="text-sm text-gray-600">7 day streak</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-500">🔥</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-lg">💧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Drink 8 glasses of water</p>
                      <p className="text-sm text-gray-600">21 day streak</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-500">🔥</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#eff6ff] to-white border border-gray-200 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Daily Planner
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input type="checkbox" checked readOnly className="mt-1 w-5 h-5 accent-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 line-through">Review project proposal</p>
                    <p className="text-sm text-gray-500">9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" checked readOnly className="mt-1 w-5 h-5 accent-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 line-through">Client call with Sarah</p>
                    <p className="text-sm text-gray-500">11:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" readOnly className="mt-1 w-5 h-5 accent-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Lunch with team</p>
                    <p className="text-sm text-gray-500">1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" readOnly className="mt-1 w-5 h-5 accent-[#10a37f]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Finish quarterly report</p>
                    <p className="text-sm text-gray-500">3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#faf5ff] to-white border border-gray-200 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Smart Rescheduling
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="font-medium text-gray-900 mb-1">Call dentist</p>
                  <p className="text-sm text-gray-600 mb-3">Originally: Today at 2:00 PM</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-purple-500 text-white text-sm rounded-lg">
                      Snooze 1 hour
                    </button>
                    <button className="px-3 py-1 bg-white border border-purple-300 text-purple-700 text-sm rounded-lg">
                      Tomorrow
                    </button>
                  </div>
                </div>
                <div className="text-center py-2">
                  <p className="text-sm text-gray-500 italic">
                    "Remind me tomorrow at 10am" - Remivo handles it automatically
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
