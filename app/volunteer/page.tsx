'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Clock, MapPin, Send, CheckCircle, Globe, Camera, Laptop, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  availability: string;
  experience: string;
  motivation: string;
  commitment: string;
}

export default function Volunteer() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    skills: [],
    availability: '',
    experience: '',
    motivation: '',
    commitment: ''
  });

  const opportunities = [
    {
      title: 'Education Mentorship',
      description: 'Provide online tutoring and mentorship to students',
      icon: BookOpen,
      commitment: '2-4 hours/week',
      location: 'Remote',
      skills: ['Teaching', 'Subject expertise', 'Patience'],
      volunteers: 45,
      needed: 20
    },
    {
      title: 'Fundraising Support',
      description: 'Help organize fundraising events and campaigns',
      icon: Heart,
      commitment: '5-10 hours/week',
      location: 'Remote/Local',
      skills: ['Marketing', 'Event planning', 'Communication'],
      volunteers: 32,
      needed: 15
    },
    {
      title: 'Content Creation',
      description: 'Create compelling content for social media and website',
      icon: Camera,
      commitment: '3-6 hours/week',
      location: 'Remote',
      skills: ['Photography', 'Writing', 'Social media'],
      volunteers: 18,
      needed: 10
    },
    {
      title: 'Technical Support',
      description: 'Maintain website, databases, and technical infrastructure',
      icon: Laptop,
      commitment: '4-8 hours/week',
      location: 'Remote',
      skills: ['Web development', 'Database management', 'IT support'],
      volunteers: 12,
      needed: 8
    },
    {
      title: 'Field Coordination',
      description: 'On-ground support in Kenya for program implementation',
      icon: Globe,
      commitment: '20+ hours/week',
      location: 'Kenya',
      skills: ['Project management', 'Local language', 'Cultural awareness'],
      volunteers: 8,
      needed: 5
    },
    {
      title: 'Administrative Support',
      description: 'Help with data entry, communications, and office tasks',
      icon: Users,
      commitment: '2-5 hours/week',
      location: 'Remote',
      skills: ['Organization', 'Data entry', 'Communication'],
      volunteers: 28,
      needed: 12
    }
  ];

  const skillOptions = [
    'Teaching/Education', 'Marketing/PR', 'Web Development', 'Graphic Design',
    'Photography', 'Writing/Content Creation', 'Event Planning', 'Fundraising',
    'Project Management', 'Data Analysis', 'Social Media', 'Translation',
    'Accounting/Finance', 'Legal/Compliance', 'Healthcare', 'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest in volunteering! We will contact you within 48 hours.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      skills: [],
      availability: '',
      experience: '',
      motivation: '',
      commitment: ''
    });
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of dedicated volunteers making a real difference in children's lives. 
            Your skills, time, and passion can help transform education in Kenya.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <opportunity.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.commitment}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Skills Needed:</h4>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Current Volunteers: {opportunity.volunteers}</span>
                    <span className="text-orange-600 font-semibold">
                      Need: {opportunity.needed} more
                    </span>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Volunteer Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Volunteer Application</CardTitle>
                <CardDescription>
                  Tell us about yourself and how you'd like to contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="City, State/Country"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                        required
                      />
                    </div>
                  </div>

                  {/* Skills and Experience */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Skills & Experience</h3>
                    <div className="space-y-2">
                      <Label>Skills (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {skillOptions.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={formData.skills.includes(skill)}
                              onCheckedChange={(checked) => handleSkillChange(skill, checked === true)}
                            />
                            <Label htmlFor={skill} className="text-sm">{skill}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        placeholder="Describe your relevant experience, education, or background..."
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Availability and Commitment */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Availability & Commitment</h3>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Time Availability</Label>
                      <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({...prev, availability: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 hours per week</SelectItem>
                          <SelectItem value="3-5">3-5 hours per week</SelectItem>
                          <SelectItem value="6-10">6-10 hours per week</SelectItem>
                          <SelectItem value="11-20">11-20 hours per week</SelectItem>
                          <SelectItem value="20+">20+ hours per week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commitment">Commitment Duration</Label>
                      <Select value={formData.commitment} onValueChange={(value) => setFormData(prev => ({...prev, commitment: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="How long can you commit?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 months</SelectItem>
                          <SelectItem value="3-6">3-6 months</SelectItem>
                          <SelectItem value="6-12">6-12 months</SelectItem>
                          <SelectItem value="1-year">1+ years</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to volunteer with HopeKenya?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Share your motivation and what you hope to achieve..."
                        value={formData.motivation}
                        onChange={(e) => setFormData(prev => ({...prev, motivation: e.target.value}))}
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why Volunteer?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Make Real Impact</p>
                    <p className="text-sm text-gray-600">Directly contribute to children's education and future</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Flexible Commitment</p>
                    <p className="text-sm text-gray-600">Choose opportunities that fit your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Skill Development</p>
                    <p className="text-sm text-gray-600">Gain new skills and experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Global Community</p>
                    <p className="text-sm text-gray-600">Connect with like-minded people worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Training & Orientation</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive onboarding to help you succeed in your role.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ongoing Support</h4>
                  <p className="text-sm text-gray-600">
                    Regular check-ins and support from our volunteer coordinator.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recognition</h4>
                  <p className="text-sm text-gray-600">
                    Certificates and recognition for your valuable contributions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">Current Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-orange-700">143</div>
                  <div className="text-sm text-orange-600">Active volunteers worldwide</div>
                  <div className="text-xs text-orange-600">From 23 countries</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}