import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, GraduationCap, Heart, Star, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Stories() {
  const successStories = [
    {
      id: 1,
      name: 'Amina Hassan',
      age: 22,
      location: 'Kibera, Nairobi',
      currentStatus: 'Medical Student at University of Nairobi',
      sponsorshipDuration: '8 years',
      story: 'Amina joined our program when she was 14, struggling to afford secondary school fees. Her dream was always to become a doctor to help her community. Through consistent support from her sponsor, Sarah Johnson from California, Amina excelled in her studies. She scored an A- in her KCSE exams and secured a scholarship to study medicine. Today, she\'s in her 4th year of medical school and volunteers at local clinics during holidays.',
      achievements: [
        'Top 5% in KCSE national exams',
        'University scholarship recipient',
        'Community health volunteer',
        'Mentors 15 younger students'
      ],
      quote: 'HopeKenya didn\'t just pay for my education - they believed in my dreams when no one else did. Now I\'m months away from becoming Dr. Amina, and I can\'t wait to give back to my community.',
      image: '👩‍⚕️',
      category: 'Education Success'
    },
    {
      id: 2,
      name: 'Daniel Kiprotich',
      age: 25,
      location: 'Mathare, Nairobi',
      currentStatus: 'Software Engineer & Tech Entrepreneur',
      sponsorshipDuration: '6 years',
      story: 'Daniel discovered his passion for technology through our computer literacy program. Despite having no computer at home, he would walk 5km to our learning center every day after school. His dedication caught the attention of his sponsor, Michael Chen, who provided additional support for coding bootcamps. Daniel now runs a successful tech startup that employs 12 people and has developed educational apps used by over 10,000 students across Kenya.',
      achievements: [
        'Founded TechEd Kenya startup',
        'Developed 3 educational mobile apps',
        'Employs 12 local developers',
        'Speaks at international tech conferences'
      ],
      quote: 'From a one-room house in Mathare to Silicon Valley conferences - HopeKenya showed me that with education and determination, any dream is possible.',
      image: '👨‍💻',
      category: 'Technology Innovation'
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      age: 28,
      location: 'Mukuru, Nairobi',
      currentStatus: 'Primary School Principal',
      sponsorshipDuration: '10 years',
      story: 'Grace was one of our first sponsored children in 2008. Coming from a single-parent household, education seemed impossible until HopeKenya stepped in. She excelled throughout her academic journey, becoming a teacher and eventually a school principal. Grace has transformed her former primary school, increasing enrollment by 300% and improving academic performance significantly. She now sponsors 5 children through our program.',
      achievements: [
        'Youngest principal in district at age 26',
        'Increased school enrollment by 300%',
        'Improved school performance by 85%',
        'Sponsors 5 children through HopeKenya'
      ],
      quote: 'I was once a sponsored child, and now I\'m a sponsor. This is the beautiful cycle of hope that HopeKenya creates - lifting others as we rise.',
      image: '👩‍🏫',
      category: 'Educational Leadership'
    },
    {
      id: 4,
      name: 'Samuel Mwangi',
      age: 24,
      location: 'Githurai, Nairobi',
      currentStatus: 'Renewable Energy Engineer',
      sponsorshipDuration: '7 years',
      story: 'Samuel\'s interest in renewable energy began when our program installed solar panels at his school. Fascinated by clean energy, he pursued engineering with support from his sponsors. He now works for a leading renewable energy company and has designed solar systems for over 50 rural schools. His work has brought electricity to communities that never had it before.',
      achievements: [
        'Designed solar systems for 50+ schools',
        'Brought electricity to 15 rural communities',
        'Published research on affordable solar solutions',
        'Trains local technicians in renewable energy'
      ],
      quote: 'HopeKenya lit up my education, and now I\'m literally lighting up communities across Kenya. It\'s amazing how one opportunity can illuminate so many lives.',
      image: '⚡',
      category: 'Environmental Impact'
    },
    {
      id: 5,
      name: 'Faith Akinyi',
      age: 21,
      location: 'Korogocho, Nairobi',
      currentStatus: 'Graphic Designer & Artist',
      sponsorshipDuration: '5 years',
      story: 'Faith\'s artistic talent was discovered during our creative arts program. Despite financial challenges, her sponsor Emily Rodriguez supported her through art school. Faith now runs a successful design studio, creating visual content for NGOs and businesses. She also teaches art to children in her community, inspiring the next generation of creative minds.',
      achievements: [
        'Runs successful design studio',
        'Clients include major NGOs and corporations',
        'Teaches art to 30+ community children',
        'Art exhibited in 3 international galleries'
      ],
      quote: 'Art was my escape from poverty, and HopeKenya made sure it became my pathway to success. Now I use my creativity to inspire others.',
      image: '🎨',
      category: 'Creative Arts'
    },
    {
      id: 6,
      name: 'Peter Omondi',
      age: 26,
      location: 'Kawangware, Nairobi',
      currentStatus: 'Agricultural Scientist',
      sponsorshipDuration: '8 years',
      story: 'Growing up in an urban slum, Peter never imagined he\'d become an agricultural scientist. Our program\'s emphasis on food security sparked his interest in sustainable farming. With sponsorship support, he studied agricultural science and now develops drought-resistant crops. His innovations have helped thousands of farmers increase their yields despite climate challenges.',
      achievements: [
        'Developed 3 drought-resistant crop varieties',
        'Helped 2,000+ farmers increase yields',
        'Published 15 research papers',
        'Advises government on food security'
      ],
      quote: 'HopeKenya planted the seed of education in my life, and now I\'m helping plant seeds that feed thousands. Education truly multiplies impact.',
      image: '🌱',
      category: 'Agricultural Innovation'
    }
  ];

  const impactStats = [
    { label: 'Success Stories', value: '1,200+', description: 'Graduates who completed education' },
    { label: 'University Graduates', value: '450+', description: 'Students who earned degrees' },
    { label: 'Entrepreneurs', value: '180+', description: 'Started their own businesses' },
    { label: 'Community Leaders', value: '95+', description: 'Now leading local initiatives' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
            Discover the incredible journeys of children who transformed their lives through education. 
            These stories showcase the lasting impact of your support and the power of believing in dreams.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measuring Success
            </h2>
            <p className="text-xl text-gray-600">
              Every number represents a life transformed and a dream achieved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inspiring Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our remarkable graduates who are now making a difference in their communities and beyond.
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-6xl">{story.image}</div>
                          <div>
                            <CardTitle className="text-2xl">{story.name}</CardTitle>
                            <CardDescription className="text-lg mt-1">
                              {story.currentStatus}
                            </CardDescription>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Age {story.age}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {story.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {story.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {story.story}
                      </p>

                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <Quote className="h-8 w-8 text-blue-500 mb-4" />
                        <p className="text-blue-800 italic text-lg leading-relaxed">
                          {story.quote}
                        </p>
                        <p className="text-blue-600 font-semibold mt-2">- {story.name}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-4">Key Achievements</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {story.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 flex flex-col justify-center">
                    <div className="text-center space-y-6">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Sponsorship Duration</div>
                        <div className="text-2xl font-bold text-orange-600">
                          {story.sponsorshipDuration}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="text-sm text-gray-600">
                          From sponsored child to community leader
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full" />
                        </div>
                        <div className="text-xs text-green-600 font-semibold">
                          Journey Complete ✓
                        </div>
                      </div>

                      <div className="pt-4">
                        <p className="text-sm text-gray-600 mb-4">
                          Stories like {story.name}&apos;s are possible because of generous supporters like you.
                        </p>
                        <Link href="/donate">
                          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                            Support Another Child
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Support Creates These Stories
          </h3>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Every child you support has the potential to become the next success story. 
            Join us in creating more inspiring journeys from poverty to prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kids">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Sponsor a Child Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Make a Donation
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-purple-100 text-sm">
              📈 98% of our sponsored children complete their education successfully
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}