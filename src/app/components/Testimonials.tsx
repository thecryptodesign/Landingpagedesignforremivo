import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graduate Student",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    content: "Remivo has been a game-changer for managing my thesis deadlines and study schedule. I never miss important submission dates anymore!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1603110505034-7e7dd9458f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    content: "As a founder, I juggle a million things. Remivo keeps me accountable and helps me maintain my daily habits even during the craziest weeks.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1603110502322-93cd2173d19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    content: "The follow-up reminders are incredible. I never forget to get back to clients or team members. It's like having a personal assistant 24/7.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by productive people everywhere
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who are taking control of their time with Remivo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
