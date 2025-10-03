import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Logo } from "./logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and App Download */}
          <div className="space-y-6">
            <Logo />
            <div>
              <h3 className="font-medium mb-4">Download Our Mobile App</h3>
              <div className="flex space-x-3">
                <Link to="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=140&h=42&u=playstore" 
                    alt="Get it on Google Play" 
                    className="h-10 w-auto"
                  />
                </Link>
                <Link to="#" className="block">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=140&h=42&u=appstore" 
                    alt="Download on the App Store" 
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/career" className="text-gray-600 hover:text-primary">Career / Recruitment</Link>
              </li>
              <li>
                <Link to="/join-teacher" className="text-gray-600 hover:text-primary">Join as a Teacher</Link>
              </li>
              <li>
                <Link to="/join-affiliate" className="text-gray-600 hover:text-primary">Join as an Affiliate</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy policy</Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-600 hover:text-primary">Refund policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Others</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/bookstore" className="text-gray-600 hover:text-primary">Book Store</Link>
              </li>
              <li>
                <Link to="/notes" className="text-gray-600 hover:text-primary">Free Notes & Guides</Link>
              </li>
              <li>
                <Link to="/job-prep" className="text-gray-600 hover:text-primary">Job Preparation Courses</Link>
              </li>
              <li>
                <Link to="/verify" className="text-gray-600 hover:text-primary">Verify Certificate</Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-600 hover:text-primary">Free Download</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Keep up with us at</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-medium">Call Us:</span>
                <a href="tel:16910" className="ml-2 text-primary font-medium">16910</a>
                <span className="ml-2 text-gray-500">(24×7)</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium">WhatsApp:</span>
                <a href="https://wa.me/8801896016252" className="ml-2 text-primary">+8801896016252</a>
                <span className="ml-2 text-gray-500">(24×7)</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium">Outside Bangladesh:</span>
                <a href="tel:+8809610916910" className="ml-2 text-primary">+880 9610916910</a>
              </li>
              <li className="flex items-center">
                <span className="font-medium">Email Us:</span>
                <a href="mailto:support@10minuteschool.com" className="ml-2 text-primary">support@10minuteschool.com</a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Icon icon="logos:facebook" width={24} height={24} />
                </a>
                <a href="https://instagram.com" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Icon icon="logos:instagram-icon" width={24} height={24} />
                </a>
                <a href="https://linkedin.com" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Icon icon="logos:linkedin-icon" width={24} height={24} />
                </a>
                <a href="https://youtube.com" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Icon icon="logos:youtube-icon" width={24} height={24} />
                </a>
                <a href="https://tiktok.com" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Icon icon="logos:tiktok-icon" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>2015 - {new Date().getFullYear()} Copyright © 10 Minute School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};