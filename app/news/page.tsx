import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, ExternalLink, Heart, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'HopeKenya Reaches Milestone: 2,500 Children Supported',
      excerpt: 'We are thrilled to announce that HopeKenya has reached a significant milestone, now supporting over 2,500 children across Kenya in their educational journey.',
      content: 'This achievement represents years of dedication, generous donations, and the unwavering commitment of our sponsors, volunteers, and partners. Each of these 2,500 children represents a story of hope, determination, and the transformative power of education.',
      date: '2024-01-15',
      author: 'Dr. Mary Wanjiku',
      category: 'Milestone',
      readTime: '3 min read',
      featured: true,
      image: '🎉'
    },
    {
      id: 2,
      title: 'New Partnership with University of Nairobi Announced',
      excerpt: 'HopeKenya partners with University of Nairobi to provide scholarship opportunities for our top-performing students.',
      content: 'This groundbreaking partnership will provide full scholarships to 50 of our highest-achieving students annually, covering tuition, accommodation, and living expenses for undergraduate programs.',
      date: '2024-01-10',
      author: 'James Kiprotich',
      category: 'Partnership',
      readTime: '4 min read',
      featured: true,
      image: '🎓'
    },
    {
      id: 3,
      title: 'Solar Power Initiative Brings Light to Rural Schools',
      excerpt: 'Our renewable energy program has successfully installed solar panels in 15 rural schools, providing reliable electricity for the first time.',
      content: 'The solar power initiative is part of our commitment to sustainable development and ensuring that geographical location doesn\'t limit access to quality education.',
      date: '2024-01-05',
      author: 'Samuel Mwangi',
      category: 'Environment',
      readTime: '5 min read',
      featured: false,
      image: '☀️'
    },
    {
      id: 4,
      title: 'Annual Graduation Ceremony Celebrates 450 Graduates',
      excerpt: 'Our annual graduation ceremony honored 450 students who completed their education with HopeKenya support this year.',
      content: 'The ceremony, held in Nairobi, brought together graduates, sponsors, families, and community leaders to celebrate these remarkable achievements.',
      date: '2023-12-20',
      author: 'Grace Wanjiku',
      category: 'Education',
      readTime: '6 min read',
      featured: false,
      image: '🎓'
    },
    {
      id: 5,
      title: 'Technology Lab Opens in Kibera Community Center',
      excerpt: 'A state-of-the-art technology lab has opened in Kibera, providing computer access and digital literacy training to 200+ students.',
      content: 'The lab features 30 computers, high-speed internet, and coding bootcamp programs designed to prepare students for the digital economy.',
      date: '2023-12-15',
      author: 'Daniel Kiprotich',
      category: 'Technology',
      readTime: '4 min read',
      featured: false,
      image: '💻'
    },
    {
      id: 6,
      title: 'Mental Health Support Program Launches',
      excerpt: 'HopeKenya introduces comprehensive mental health support services for students and families in our programs.',
      content: 'The program includes counseling services, peer support groups, and mental health awareness workshops to ensure holistic student wellbeing.',
      date: '2023-12-10',
      author: 'Dr. Sarah Otieno',
      category: 'Health',
      readTime: '5 min read',
      featured: false,
      image: '🧠'
    },
    {
      id: 7,
      title: 'International Recognition: UN Sustainable Development Award',
      excerpt: 'HopeKenya receives UN recognition for outstanding contribution to Sustainable Development Goal 4: Quality Education.',
      content: 'This prestigious award acknowledges our innovative approaches to education access and our measurable impact on community development.',
      date: '2023-12-01',
      author: 'Dr. Mary Wanjiku',
      category: 'Award',
      readTime: '3 min read',
      featured: false,
      image: '🏆'
    },
    {
      id: 8,
      title: 'Nutrition Program Expansion Reaches 1,000 More Children',
      excerpt: 'Our school feeding program expands to serve nutritious meals to an additional 1,000 children across 10 new schools.',
      content: 'The expansion addresses food insecurity and ensures that hunger doesn\'t become a barrier to learning for vulnerable children.',
      date: '2023-11-25',
      author: 'Faith Akinyi',
      category: 'Nutrition',
      readTime: '4 min read',
      featured: false,
      image: '🍎'
    }
  ];

  const categories = ['All', 'Milestone', 'Partnership', 'Education', 'Technology', 'Environment', 'Health', 'Award', 'Nutrition'];

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Stay informed about our latest achievements, program updates, and the incredible 
            impact we&apos;re making together in children&apos;s lives across Kenya.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600">
              Our most important updates and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{article.image}</div>
                    <Badge className="bg-orange-500 text-white">Featured</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {article.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              All the latest news from HopeKenya
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-4xl">{article.image}</div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {article.readTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-lg md:text-xl text-orange-100 mb-8">
            Get the latest news, success stories, and impact updates delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-orange-100 text-sm mt-2">
              Join 5,000+ supporters who stay informed about our impact
            </p>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Follow Us for More Updates
            </h2>
            <p className="text-gray-600">
              Connect with us on social media for daily updates and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📘</div>
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-gray-600 mb-4">Daily updates and community stories</p>
                <Button variant="outline" size="sm">
                  Follow Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-gray-600 mb-4">Photos and videos from the field</p>
                <Button variant="outline" size="sm">
                  Follow Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🐦</div>
                <h3 className="font-semibold mb-2">Twitter</h3>
                <p className="text-sm text-gray-600 mb-4">Real-time updates and news</p>
                <Button variant="outline" size="sm">
                  Follow Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}