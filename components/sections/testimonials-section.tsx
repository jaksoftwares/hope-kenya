import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sponsor from California',
      content: 'Sponsoring Amina has been the most rewarding experience. Seeing her progress through school reports and photos fills my heart with joy. She\'s now in her final year and dreams of becoming a doctor.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Monthly Donor from New York',
      content: 'HopeKenya\'s transparency and regular updates make me confident that my donations are making a real difference. The children\'s success stories inspire me to continue supporting this amazing cause.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sponsor from Texas',
      content: 'I\'ve been sponsoring Daniel for three years now. His letters and drawings mean the world to me. It\'s incredible to watch him grow academically and personally. This organization truly changes lives.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Supporters Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Hear from the generous hearts who are helping transform lives through education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start justify-between space-x-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 rating from 150+ supporters</span>
          </div>
        </div>
      </div>
    </section>
  );
}