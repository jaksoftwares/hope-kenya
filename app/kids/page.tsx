'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, GraduationCap, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function Kids() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [gradeFilter, setGradeFilter] = useState('all');

  const children = [
    {
      id: 1,
      name: 'Amina Hassan',
      age: 12,
      location: 'Kibera, Nairobi',
      grade: 'Class 7',
      story: 'Dreams of becoming a doctor to help her community. Loves science and reading, especially books about medicine and biology.',
      monthlyNeed: 45,
      sponsored: 60,
      urgent: true,
      interests: ['Science', 'Reading', 'Medicine']
    },
    {
      id: 2,
      name: 'Daniel Kiprotich',
      age: 14,
      location: 'Mathare, Nairobi',
      grade: 'Class 8',
      story: 'Aspires to be an engineer. Excellent in mathematics and enjoys building things from recycled materials.',
      monthlyNeed: 50,
      sponsored: 80,
      urgent: false,
      interests: ['Mathematics', 'Engineering', 'Building']
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      age: 10,
      location: 'Mukuru, Nairobi',
      grade: 'Class 5',
      story: 'Wants to be a teacher to educate others. Top student in her class with excellent leadership skills.',
      monthlyNeed: 40,
      sponsored: 30,
      urgent: true,
      interests: ['Teaching', 'Leadership', 'English']
    },
    {
      id: 4,
      name: 'Michael Ochieng',
      age: 13,
      location: 'Kawangware, Nairobi',
      grade: 'Class 7',
      story: 'Passionate about football and dreams of becoming a professional player while studying business.',
      monthlyNeed: 45,
      sponsored: 70,
      urgent: false,
      interests: ['Football', 'Business', 'Sports']
    },
    {
      id: 5,
      name: 'Faith Akinyi',
      age: 11,
      location: 'Korogocho, Nairobi',
      grade: 'Class 6',
      story: 'Loves art and wants to become a graphic designer. Creates beautiful drawings and crafts.',
      monthlyNeed: 42,
      sponsored: 25,
      urgent: true,
      interests: ['Art', 'Design', 'Creativity']
    },
    {
      id: 6,
      name: 'Samuel Mwangi',
      age: 15,
      location: 'Githurai, Nairobi',
      grade: 'Form 1',
      story: 'Interested in technology and computers. Wants to study computer science and programming.',
      monthlyNeed: 60,
      sponsored: 90,
      urgent: false,
      interests: ['Technology', 'Programming', 'Computers']
    }
  ];

  const filteredChildren = children.filter(child => {
    const matchesSearch = child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         child.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         child.story.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAge = ageFilter === 'all' || 
                      (ageFilter === '6-10' && child.age >= 6 && child.age <= 10) ||
                      (ageFilter === '11-15' && child.age >= 11 && child.age <= 15) ||
                      (ageFilter === '16+' && child.age >= 16);
    
    const matchesGrade = gradeFilter === 'all' || 
                        (gradeFilter === 'primary' && child.grade.includes('Class')) ||
                        (gradeFilter === 'secondary' && child.grade.includes('Form'));
    
    return matchesSearch && matchesAge && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Children Seeking Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet the bright, ambitious children who are waiting for your support. 
            Each child has a unique story and dreams that you can help make reality.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, location, or interests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 sm:h-12"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="w-full sm:w-[140px] h-10 sm:h-12">
                  <SelectValue placeholder="Age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="11-15">11-15 years</SelectItem>
                  <SelectItem value="16+">16+ years</SelectItem>
                </SelectContent>
              </Select>
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className="w-full sm:w-[140px] h-10 sm:h-12">
                  <SelectValue placeholder="Grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="primary">Primary</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing {filteredChildren.length} of {children.length} children
          </p>
        </div>

        {/* Children Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredChildren.map((child) => (
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
                  <div className="min-w-0">
                    <CardTitle className="text-lg sm:text-xl truncate">{child.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1 text-sm">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
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

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {child.story}
                </p>

                <div className="flex flex-wrap gap-1">
                  {child.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>

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

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link href={`/kids/${child.id}`} className="flex-1">
                    <Button variant="outline" className="w-full text-xs sm:text-sm py-2">
                      Learn More
                    </Button>
                  </Link>
                  <Link href={`/donate?child=${child.id}`} className="flex-1">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm py-2">
                      Sponsor
                      <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredChildren.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              No children found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try adjusting your search terms or filters to find more children.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Can&apos;t Choose Just One?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-4 sm:mb-6">
              Consider making a general donation to support all children in our program.
            </p>
            <Link href="/donate">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-3 text-sm sm:text-base">
                Make a General Donation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}