"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

export function FeaturedChildren() {
  const children = [
    {
      id: 1,
      name: 'Amina Hassan',
      age: 12,
      location: 'Kibera, Nairobi',
      grade: 'Class 7',
      story: 'Dreams of becoming a doctor to help her community. Loves science and reading.',
      monthlyNeed: 45,
      sponsored: 60,
      urgent: true
    },
    {
      id: 2,
      name: 'Daniel Kiprotich',
      age: 14,
      location: 'Mathare, Nairobi',
      grade: 'Class 8',
      story: 'Aspires to be an engineer. Excellent in mathematics and enjoys building things.',
      monthlyNeed: 50,
      sponsored: 80,
      urgent: false
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      age: 10,
      location: 'Mukuru, Nairobi',
      grade: 'Class 5',
      story: 'Wants to be a teacher to educate others. Top student in her class.',
      monthlyNeed: 40,
      sponsored: 30,
      urgent: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Some of Our Children
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every child has a unique story and dream. Your sponsorship can help them achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {children.map((child) => (
            <Card key={child.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-gray-600 p-4">
                    <div className="text-3xl sm:text-4xl mb-2">📚</div>
                    <div className="text-xs sm:text-sm">Photo coming soon</div>
                  </div>
                </div>
                {child.urgent && (
                  <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-500 text-white text-xs">
                    Urgent
                  </Badge>
                )}
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{child.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1 text-sm">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {child.age} years old
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{child.location}</span>
                </div>
                
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                  {child.grade}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {child.story}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Monthly Need:</span>
                    <span className="font-semibold">${child.monthlyNeed}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${child.sponsored}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600">
                    {child.sponsored}% sponsored
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base py-2 sm:py-3">
                  Sponsor {child.name}
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/kids">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 sm:px-8 py-3 text-sm sm:text-base">
              View All Children
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}