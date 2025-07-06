"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-white/80" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join our community of change-makers and help us provide quality education to more children in Kenya. 
          Your support creates lasting impact that extends far beyond the classroom.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/donate">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Start Donating
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <Link href="/kids">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Sponsor a Child
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-blue-100 text-xs sm:text-sm">
            🔒 Secure donations • 💳 Multiple payment options • 📊 Track your impact
          </p>
        </div>
      </div>
    </section>
  );
}