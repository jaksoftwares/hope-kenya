import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold">HopeKenya</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">
              Empowering education and transforming lives of children in Kenya through your generous support. 
              Together, we're building a brighter future, one child at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Our Programs</Link></li>
              <li><Link href="/kids" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Children</Link></li>
              <li><Link href="/impact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Our Impact</Link></li>
              <li><Link href="/stories" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Success Stories</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">News & Updates</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Donate Now</Link></li>
              <li><Link href="/kids" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Sponsor a Child</Link></li>
              <li><Link href="/volunteer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Volunteer</Link></li>
              <li><Link href="/transparency" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Financial Reports</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-400">info@hopeKenya.org</div>
                  <div className="text-gray-400">donations@hopeKenya.org</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                  <div className="text-gray-400">+254 700 123 456</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  123 Hope Street<br />
                  Nairobi, Kenya
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 HopeKenya. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="/transparency" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Financial Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}