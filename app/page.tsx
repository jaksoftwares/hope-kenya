import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, GraduationCap, MapPin, ArrowRight, Star, DollarSign } from 'lucide-react';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { FeaturedChildren } from '@/components/sections/featured-children';
import { ImpactSection } from '@/components/sections/impact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <StatsSection />
      <FeaturedChildren />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}