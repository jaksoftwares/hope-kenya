import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Award, Globe, Users } from 'lucide-react';

export function ImpactSection() {
  const achievements = [
    {
      title: 'Education Access',
      description: 'Children now have access to quality education',
      progress: 85,
      metric: '2,500+ students',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Graduation Success',
      description: 'Students successfully completing their education',
      progress: 92,
      metric: '98% success rate',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      title: 'Community Impact',
      description: 'Families lifted out of poverty through education',
      progress: 78,
      metric: '1,200+ families',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Global Reach',
      description: 'International donors supporting our mission',
      progress: 90,
      metric: '45 countries',
      icon: Globe,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Measuring Our Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Track the real difference your contributions make in the lives of children and communities across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${achievement.color} flex-shrink-0`}>
                      <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-lg sm:text-xl truncate">{achievement.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="font-semibold text-xs sm:text-sm self-start sm:self-center">
                    {achievement.metric}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-2 sm:h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Together, We're Changing Lives
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Every dollar donated directly impacts a child's future. Join our growing community of change-makers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">$1</div>
                <div className="text-orange-100 text-sm sm:text-base">Provides school supplies for one week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">$25</div>
                <div className="text-orange-100 text-sm sm:text-base">Covers school fees for one month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">$300</div>
                <div className="text-orange-100 text-sm sm:text-base">Sponsors a child for an entire year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}