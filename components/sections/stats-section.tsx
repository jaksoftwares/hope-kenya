import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Heart } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: GraduationCap,
      value: '2,500+',
      label: 'Children Educated',
      description: 'Students currently enrolled in our programs',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '150+',
      label: 'Active Sponsors',
      description: 'Generous donors making a difference',
      color: 'text-green-600'
    },
    {
      icon: BookOpen,
      value: '45',
      label: 'Schools Supported',
      description: 'Educational institutions in our network',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      value: '98%',
      label: 'Success Rate',
      description: 'Students who complete their education',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every donation creates ripples of change. See how your generosity transforms lives and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 mb-3 sm:mb-4 ${stat.color}`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}