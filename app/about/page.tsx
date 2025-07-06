import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, MapPin, Calendar, Award, Target } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Dr. Mary Wanjiku',
      role: 'Founder & Executive Director',
      bio: 'Former teacher with 20 years of experience in education and community development.',
      avatar: 'MW'
    },
    {
      name: 'James Kiprotich',
      role: 'Program Director',
      bio: 'Coordinates educational programs and manages relationships with local schools.',
      avatar: 'JK'
    },
    {
      name: 'Sarah Otieno',
      role: 'Community Outreach Manager',
      bio: 'Works directly with families to identify children in need of educational support.',
      avatar: 'SO'
    }
  ];

  const milestones = [
    { year: '2018', event: 'HopeKenya founded with 25 children', icon: Heart },
    { year: '2019', event: 'Reached 100 sponsored children', icon: Users },
    { year: '2020', event: 'Expanded to 10 schools', icon: MapPin },
    { year: '2021', event: 'First graduating class of 50 students', icon: Award },
    { year: '2022', event: 'Achieved 95% success rate', icon: Target },
    { year: '2024', event: 'Supporting 2,500+ children', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About HopeKenya
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
            Empowering children through education, one story at a time. 
            Learn about our mission, vision, and the impact we're making together.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality education and support to underprivileged children in Kenya, 
                  breaking the cycle of poverty through learning and empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A Kenya where every child has access to quality education and the opportunity 
                  to reach their full potential, regardless of their background or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to transforming thousands of lives
            </p>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                HopeKenya was founded in 2018 by Dr. Mary Wanjiku, a former teacher who witnessed 
                firsthand the challenges faced by children in Kenya's underserved communities. 
                After years of teaching in Nairobi's informal settlements, she saw how poverty 
                prevented bright, ambitious children from accessing quality education.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                What started as a small initiative to sponsor 25 children has grown into a 
                comprehensive program supporting over 2,500 students across 45 schools. 
                Our approach goes beyond just paying school fees – we provide uniforms, 
                school supplies, nutritional support, and mentorship to ensure each child 
                has the best chance of success.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, HopeKenya works with a network of dedicated educators, community leaders, 
                and international supporters to create lasting change. We believe that education 
                is the most powerful tool for breaking the cycle of poverty and creating a 
                brighter future for Kenya's children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform lives through education
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <milestone.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-orange-100 text-orange-800">
                      {milestone.year}
                    </Badge>
                  </div>
                  <p className="text-gray-700 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals working to make education accessible for all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-blue-100">
                We maintain complete transparency in how donations are used and the impact they create.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-blue-100">
                Every decision we make is guided by compassion for the children and families we serve.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-blue-100">
                We strive for excellence in education and support to ensure the best outcomes for every child.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}