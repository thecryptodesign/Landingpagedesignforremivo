import { MessageCircle, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10a37f] to-[#0d8968] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Remivo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your personal productivity assistant on WhatsApp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#10a37f] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#10a37f] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#10a37f] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-[#10a37f] transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-[#10a37f] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Remivo. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@remivo.app" className="hover:text-[#10a37f] transition-colors">
              hello@remivo.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
