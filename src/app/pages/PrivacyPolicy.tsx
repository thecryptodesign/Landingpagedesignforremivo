import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

const LAST_UPDATED = "May 26, 2026";
const CONTACT_EMAIL = "privacy@remivo.app";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "1.1 Information You Provide",
        text: "When you interact with Remivo through WhatsApp, we collect the messages you send to our assistant. This includes task descriptions, reminders, habit goals, and any other content you share directly with Remivo. We also collect your phone number as part of the WhatsApp connection process.",
      },
      {
        subtitle: "1.2 Usage Information",
        text: "We automatically collect certain information about how you use Remivo, including the frequency of interactions, feature usage patterns, and reminder completion rates. This data helps us improve our service and personalize your experience.",
      },
      {
        subtitle: "1.3 Device Information",
        text: "We may collect basic technical information such as your device type and operating system version, solely for the purpose of ensuring compatibility and delivering a reliable experience.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "2.1 Providing the Service",
        text: "We use the information you provide to operate Remivo — creating and delivering reminders, tracking habits, scheduling tasks, and sending notifications through WhatsApp at the times you request.",
      },
      {
        subtitle: "2.2 Improving Our Service",
        text: "We analyze aggregated, anonymized usage data to understand how people use Remivo, identify areas for improvement, and develop new features. Individual messages are never used for advertising or sold to third parties.",
      },
      {
        subtitle: "2.3 Communications",
        text: "We may send you service-related messages, such as updates about new features, important changes to the service, or responses to your support requests. You can opt out of non-essential communications at any time.",
      },
    ],
  },
  {
    title: "3. Data Storage and Security",
    content: [
      {
        subtitle: "3.1 Data Encryption",
        text: "All data transmitted between your device and our servers is encrypted using industry-standard TLS/SSL protocols. Data stored on our servers is encrypted at rest using AES-256 encryption.",
      },
      {
        subtitle: "3.2 Data Retention",
        text: "We retain your data for as long as your account is active or as needed to provide you with the service. You may request deletion of your data at any time by contacting us at " + CONTACT_EMAIL + ". We will process deletion requests within 30 days.",
      },
      {
        subtitle: "3.3 Security Measures",
        text: "We implement industry-standard security practices including access controls, regular security audits, and employee training to protect your information from unauthorized access, disclosure, or misuse.",
      },
    ],
  },
  {
    title: "4. Sharing Your Information",
    content: [
      {
        subtitle: "4.1 No Sale of Data",
        text: "We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Your data belongs to you.",
      },
      {
        subtitle: "4.2 Service Providers",
        text: "We may share information with trusted third-party service providers who assist us in operating the service — such as cloud hosting providers and analytics tools — under strict confidentiality agreements that prohibit them from using your data for any other purpose.",
      },
      {
        subtitle: "4.3 Legal Requirements",
        text: "We may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect the rights, property, or safety of Remivo, our users, or the public.",
      },
    ],
  },
  {
    title: "5. WhatsApp and Third-Party Services",
    content: [
      {
        subtitle: "5.1 WhatsApp Integration",
        text: "Remivo operates through WhatsApp's Business API. By using Remivo, you acknowledge that your interactions are also subject to WhatsApp's Privacy Policy and Terms of Service. We only access messages sent directly to the Remivo bot — we have no access to your personal WhatsApp conversations.",
      },
      {
        subtitle: "5.2 Third-Party Links",
        text: "Our service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites and encourage you to review their privacy policies.",
      },
    ],
  },
  {
    title: "6. Your Rights and Choices",
    content: [
      {
        subtitle: "6.1 Access and Correction",
        text: "You have the right to access the personal information we hold about you and to request corrections if any information is inaccurate or incomplete.",
      },
      {
        subtitle: "6.2 Data Deletion",
        text: "You may request the deletion of your account and all associated data at any time. To submit a deletion request, contact us at " + CONTACT_EMAIL + ". Note that some information may be retained for legal compliance purposes.",
      },
      {
        subtitle: "6.3 Opting Out",
        text: "You can stop using Remivo at any time by simply no longer messaging the bot. You may also contact us to have your account deactivated and your data removed from our systems.",
      },
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      {
        subtitle: "",
        text: "Remivo is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us immediately and we will take steps to delete such information.",
      },
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      {
        subtitle: "",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make material changes, we will notify you via WhatsApp or by posting a prominent notice on our website. Your continued use of Remivo after any changes constitutes your acceptance of the updated policy.",
      },
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      {
        subtitle: "",
        text: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy team at ${CONTACT_EMAIL}. We are committed to addressing your concerns promptly and transparently.`,
      },
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <div className="bg-gradient-to-b from-[#f0fdf4] to-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10a37f] to-[#0d8968] mb-6 shadow-lg shadow-green-200">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-lg">
              Last updated: {LAST_UPDATED}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#f0fdf4] border border-[#10a37f]/20 rounded-2xl p-6 mb-12"
        >
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#10a37f]">Remivo</span>, your privacy is fundamental to everything we build.
            This Privacy Policy explains how we collect, use, and protect your personal information when you use our
            WhatsApp-based productivity assistant. We believe in transparency — please read this carefully.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: sectionIndex * 0.04 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-5">
                {section.content.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    {block.subtitle && (
                      <h3 className="font-semibold text-gray-800 mb-2">{block.subtitle}</h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
        >
          <h3 className="font-bold text-gray-900 mb-2">Have questions about your privacy?</h3>
          <p className="text-gray-500 mb-4 text-sm">
            Our Privacy team is here to help with any questions or requests.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #10a37f 0%, #0d8968 100%)",
              boxShadow: "0 2px 12px rgba(16,163,127,0.3)",
              fontWeight: 600,
            }}
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        <p className="text-center text-gray-400 text-sm mt-12 mb-8">
          © 2026 Remivo. All rights reserved.
        </p>
      </div>
    </div>
  );
}
