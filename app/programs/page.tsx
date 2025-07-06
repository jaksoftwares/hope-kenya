import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Users, Briefcase, Heart, GraduationCap, Utensils, Home, Stethoscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Primary Education Support',
      description: 'Comprehensive support for children ages 6-14 in primary education',
      icon: BookOpen,
      color: 'bg-blue-500',
      beneficiaries: 1650,
      budget: 245000,
      raised: 208250,
      features: [
        'School fees and registration',
        'Uniforms and school supplies',
        'Daily nutritious meals',
        'Academic tutoring support',
        'Regular health checkups'
      ],
      impact: {
        attendance: 98,
        passRate: 92,
        transition: 87
      }
    },
    {
      id: 2,
      title: 'Secondary Education Program',
      description: 'Supporting teenagers to complete secondary education and prepare for university',
      icon: GraduationCap,
      color: 'bg-green-500',
      beneficiaries: 650,
      budget: 180000,
      raised: 140400,
      features: [
        'Secondary school fees',
        'Textbooks and learning materials',
        'Science laboratory access',
        'Career guidance counseling',
        'University preparation courses'
      ],
      impact: {
        completion: 95,
        university: 88,
        employment: 90
      }
    },
    {
      id: 3,
      title: 'Vocational Training',
      description: 'Skills training for older youth and adults to gain employment',
      icon: Briefcase,
      color: 'bg-purple-500',
      beneficiaries: 247,
      budget: 62000,
      raised: 57040,
      features: [
        'Technical skills training',
        'Business development courses',
        'Entrepreneurship mentorship',
        'Job placement assistance',
        'Microfinance support'
      ],
      impact: {
        jobPlacement: 85,
        business: 78,
        income: 93
      }
    },
    {
      id: 4,
      title: 'Nutrition & Health',
      description: 'Ensuring children have proper nutrition and healthcare access',
      icon: Stethoscope,
      color: 'bg-red-500',
      beneficiaries: 2100,
      budget: 95000,
      raised: 76000,
      features: [
        'Daily school meals program',
        'Regular health screenings',
        'Vaccination programs',
        'Nutrition education',
        'Emergency medical care'
      ],
      impact: {
        nutrition: 95,
        health: 88,
        vaccination: 100
      }
    },
    {
      id: 5,
      title: 'Community Development',
      description: 'Building stronger communities through infrastructure and support',
      icon: Home,
      color: 'bg-orange-500',
      beneficiaries: 850,
      budget: 120000,
      raised: 84000,
      features: [
        'Clean water access projects',
        'School infrastructure improvement',
        'Community centers',
        'Parent education programs',
        'Women empowerment initiatives'
      ],
      impact: {
        waterAccess: 92,
        infrastructure: 75,
        participation: 68
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Comprehensive support systems designed to break the cycle of poverty through education, 
            health, and community development initiatives.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives Through Targeted Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is carefully designed to address specific needs and create lasting impact 
              in the communities we serve.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${program.color}`}>
                          <program.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{program.title}</CardTitle>
                          <CardDescription className="text-lg mt-1">
                            {program.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Program Features</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-4">Key Metrics</h4>
                          <div className="space-y-3">
                            {Object.entries(program.impact).map(([key, value], idx) => (
                              <div key={idx}>
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                  <span className="font-semibold">{value}%</span>
                                </div>
                                <Progress value={value} className="h-2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="bg-gray-50 p-8 flex flex-col justify-center">
                    <div className="text-center space-y-6">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">
                          {program.beneficiaries.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Beneficiaries</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Funding Progress</span>
                          <span className="font-semibold">
                            ${program.raised.toLocaleString()} / ${program.budget.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={(program.raised / program.budget) * 100} className="h-3" />
                        <div className="text-xs text-gray-600">
                          {Math.round((program.raised / program.budget) * 100)}% funded
                        </div>
                      </div>

                      <Link href={`/donate?program=${program.id}`}>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Support This Program
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Collective Impact Across All Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,497</div>
              <div className="text-gray-600">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$702K</div>
              <div className="text-gray-600">Total Budget</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$565K</div>
              <div className="text-gray-600">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">81%</div>
              <div className="text-gray-600">Overall Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Choose a Program to Support
          </h3>
          <p className="text-lg md:text-xl text-orange-100 mb-6">
            Every program creates lasting change. Select the one that resonates with your passion for helping children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Make a Donation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}