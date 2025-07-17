import React from "react";
import {Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer
        id="contact"
        className="bg-gray-900 text-white dark:bg-black text-sm py-10 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">GLUBS</h3>
            <p>
              Your gateway to campus opportunities and meaningful connections.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                About Us
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Features
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Pricing
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Help Center
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                Terms of Service
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-transform hover:translate-x-1">
                API Docs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <ul className="flex gap-4">
              <li>
                <Twitter className="w-5 h-5 hover:text-blue-400 transition-transform transform hover:scale-110" />
              </li>
              <li>
                <Linkedin className="w-5 h-5 hover:text-blue-400 transition-transform transform hover:scale-110" />
              </li>
              <li>
                <Instagram className="w-5 h-5 hover:text-blue-400 transition-transform transform hover:scale-110" />
              </li>
              <li>
                <MessageCircle className="w-5 h-5 hover:text-blue-400 transition-transform transform hover:scale-110" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          © 2025 GLUBS. All rights reserved.
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
