import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Award, Users, BookOpen, GraduationCap, Heart, DollarSign, Globe } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: Users,
      title: 'Children Supported',
      value: '2,547',
      change: '+12% this year',
      description: 'Total children receiving educational support'
    },
    {
      icon: GraduationCap,
      title: 'Graduates',
      value: '1,230',
      change: '+8% completion rate',
      description: 'Students who completed their education'
    },
    {
      icon: BookOpen,
      title: 'Schools Partnered',
      value: '45',
      change: '+5 new schools',
      description: 'Educational institutions in our network'
    },
    {
      icon: DollarSign,
      title: 'Funds Raised',
      value: '$487K',
      change: '+23% from last year',
      description: 'Total donations received this year'
    }
  ];

  const programs = [
    {
      name: 'Primary Education Support',
      description: 'Supporting children ages 6-14 in primary education',
      beneficiaries: 1650,
      budget: 245000,
      progress: 85,
      outcomes: ['98% attendance rate', '92% pass rate', '87% transition to secondary']
    },
    {
      name: 'Secondary Education Program',
      description: 'Helping teenagers complete secondary education',
      beneficiaries: 650,
      budget: 180000,
      progress: 78,
      outcomes: ['95% completion rate', '88% university admission', '90% employment rate']
    },
    {
      name: 'Vocational Training',
      description: 'Skills training for older youth and adults',
      beneficiaries: 247,
      budget: 62000,
      progress: 92,
      outcomes: ['85% job placement', '78% start own business', '93% income increase']
    }
  ];

  const stories = [
    {
      name: 'Amina Hassan',
      age: 18,
      achievement: 'Graduated and now studying Medicine',
      story: 'Started with us in 2018 as a struggling student. Now pursuing her dream of becoming a doctor.',
      image: '🎓'
    },
    {
      name: 'Daniel Kiprotich',
      age: 20,
      achievement: 'Started his own tech company',
      story: 'Learned programming through our vocational program and now employs 5 people.',
      image: '💻'
    },
    {
      name: 'Grace Wanjiku',
      age: 22,
      achievement: 'Became a primary school teacher',
      story: 'Returned to her community to teach and inspire the next generation of children.',
      image: '👩‍🏫'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the real difference your support makes in the lives of children and communities across Kenya. 
            Every number represents a life transformed through education.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <metric.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge variant="secondary" className="text-green-600">
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.title}
                </div>
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programs Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Performance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-bold">{program.progress}%</span>
                  </div>
                  <Progress value={program.progress} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {program.beneficiaries.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        ${(program.budget / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-600">Budget</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-sm mb-2">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{story.image}</div>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <CardDescription>Age {story.age}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge className="bg-green-100 text-green-800">
                    {story.achievement}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {story.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Impact Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Achievement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Primary School Completion</span>
                        <span className="font-bold">98%</span>
                      </div>
                      <Progress value={98} />
                      
                      <div className="flex justify-between items-center">
                        <span>Secondary School Completion</span>
                        <span className="font-bold">92%</span>
                      </div>
                      <Progress value={92} />
                      
                      <div className="flex justify-between items-center">
                        <span>University Admission</span>
                        <span className="font-bold">75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Digital Literacy</span>
                        <span className="font-bold">85%</span>
                      </div>
                      <Progress value={85} />
                      
                      <div className="flex justify-between items-center">
                        <span>English Proficiency</span>
                        <span className="font-bold">90%</span>
                      </div>
                      <Progress value={90} />
                      
                      <div className="flex justify-between items-center">
                        <span>Leadership Skills</span>
                        <span className="font-bold">78%</span>
                      </div>
                      <Progress value={78} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="health" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Health & Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Regular Health Checkups</span>
                        <span className="font-bold">95%</span>
                      </div>
                      <Progress value={95} />
                      
                      <div className="flex justify-between items-center">
                        <span>Proper Nutrition</span>
                        <span className="font-bold">88%</span>
                      </div>
                      <Progress value={88} />
                      
                      <div className="flex justify-between items-center">
                        <span>Vaccination Coverage</span>
                        <span className="font-bold">100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Mental Wellbeing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Psychological Support</span>
                        <span className="font-bold">80%</span>
                      </div>
                      <Progress value={80} />
                      
                      <div className="flex justify-between items-center">
                        <span>Social Integration</span>
                        <span className="font-bold">92%</span>
                      </div>
                      <Progress value={92} />
                      
                      <div className="flex justify-between items-center">
                        <span>Confidence Building</span>
                        <span className="font-bold">87%</span>
                      </div>
                      <Progress value={87} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Family Income Increase</span>
                        <span className="font-bold">65%</span>
                      </div>
                      <Progress value={65} />
                      
                      <div className="flex justify-between items-center">
                        <span>Community Participation</span>
                        <span className="font-bold">78%</span>
                      </div>
                      <Progress value={78} />
                      
                      <div className="flex justify-between items-center">
                        <span>Local Employment</span>
                        <span className="font-bold">72%</span>
                      </div>
                      <Progress value={72} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Social Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Gender Equality</span>
                        <span className="font-bold">93%</span>
                      </div>
                      <Progress value={93} />
                      
                      <div className="flex justify-between items-center">
                        <span>Youth Leadership</span>
                        <span className="font-bold">85%</span>
                      </div>
                      <Progress value={85} />
                      
                      <div className="flex justify-between items-center">
                        <span>Community Projects</span>
                        <span className="font-bold">68%</span>
                      </div>
                      <Progress value={68} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="environment" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Awareness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Environmental Education</span>
                        <span className="font-bold">88%</span>
                      </div>
                      <Progress value={88} />
                      
                      <div className="flex justify-between items-center">
                        <span>Waste Management</span>
                        <span className="font-bold">75%</span>
                      </div>
                      <Progress value={75} />
                      
                      <div className="flex justify-between items-center">
                        <span>Tree Planting</span>
                        <span className="font-bold">82%</span>
                      </div>
                      <Progress value={82} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainable Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Clean Water Access</span>
                        <span className="font-bold">95%</span>
                      </div>
                      <Progress value={95} />
                      
                      <div className="flex justify-between items-center">
                        <span>Solar Energy Use</span>
                        <span className="font-bold">45%</span>
                      </div>
                      <Progress value={45} />
                      
                      <div className="flex justify-between items-center">
                        <span>Organic Farming</span>
                        <span className="font-bold">62%</span>
                      </div>
                      <Progress value={62} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 md:p-12">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Be Part of Our Success Story
            </h3>
            <p className="text-lg md:text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              Every donation creates measurable impact. Join us in transforming more lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Donating
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}