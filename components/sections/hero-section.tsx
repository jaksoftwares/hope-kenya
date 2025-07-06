"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Lives Through
                <span className="block text-yellow-300 mt-2">Education</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Every child deserves the chance to learn, grow, and achieve their dreams. 
                Join us in providing quality education to underprivileged children in Kenya.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/donate">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/kids">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Sponsor a Child
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-orange-100 pt-4 sm:pt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">2,500+</div>
                <div className="text-xs sm:text-sm">Children Helped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">85%</div>
                <div className="text-xs sm:text-sm">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">$250K+</div>
                <div className="text-xs sm:text-sm">Funds Raised</div>
              </div>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-3 sm:space-y-4 p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Watch Our Impact</h3>
                    <p className="text-orange-100 text-sm sm:text-base">See how your donations change lives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}