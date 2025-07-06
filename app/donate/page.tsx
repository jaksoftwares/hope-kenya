'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Heart, CreditCard, Shield, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Donate() {
  const [amount, setAmount] = useState('25');
  const [donationType, setDonationType] = useState('monthly');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [
    { value: '10', label: '$10', description: 'School supplies for 2 weeks' },
    { value: '25', label: '$25', description: 'Monthly school fees' },
    { value: '50', label: '$50', description: 'Full school kit' },
    { value: '100', label: '$100', description: 'Quarterly support' },
    { value: '300', label: '$300', description: 'Annual sponsorship' }
  ];

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is where Stripe integration would go
    toast.success('Thank you for your generous donation! You will be redirected to complete the payment.');
    
    // In a real implementation, you would:
    // 1. Validate the form
    // 2. Create a Stripe checkout session
    // 3. Redirect to Stripe payment page
    // 4. Handle success/failure callbacks
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Make a Donation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your generosity directly impacts a child's education and future. 
            Every dollar helps provide quality education to children in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mr-2" />
                  Choose Your Donation
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Select an amount and frequency that works for you
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleDonation} className="space-y-4 sm:space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-2">
                    <Label className="text-sm sm:text-base">Donation Type</Label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <Button
                        type="button"
                        variant={donationType === 'monthly' ? 'default' : 'outline'}
                        onClick={() => setDonationType('monthly')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      >
                        Monthly
                      </Button>
                      <Button
                        type="button"
                        variant={donationType === 'one-time' ? 'default' : 'outline'}
                        onClick={() => setDonationType('one-time')}
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      >
                        One-time
                      </Button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label className="text-sm sm:text-base">Select Amount</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset.value}
                          type="button"
                          variant={amount === preset.value ? 'default' : 'outline'}
                          onClick={() => {
                            setAmount(preset.value);
                            setCustomAmount('');
                          }}
                          className="flex flex-col h-auto p-3 sm:p-4 text-left"
                        >
                          <span className="text-base sm:text-lg font-bold">{preset.label}</span>
                          <span className="text-xs text-gray-600">{preset.description}</span>
                        </Button>
                      ))}
                    </div>
                    
                    {/* Custom Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount" className="text-sm sm:text-base">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount(e.target.value);
                          }}
                          className="pl-8 h-10 sm:h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Donor Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-sm">First Name</Label>
                        <Input id="first-name" placeholder="John" required className="h-10 sm:h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-sm">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required className="h-10 sm:h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="h-10 sm:h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Share why you're supporting HopeKenya..." 
                        className="min-h-[60px] sm:min-h-[80px] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg py-4 sm:py-6"
                  >
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Donate ${amount || customAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                  </Button>

                  {/* Security Notice */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span>Your donation is secure and encrypted</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Donation Impact */}
          <div className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Your Impact</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  See how your donation makes a difference
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Direct support to children</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Monthly progress reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Tax-deductible receipt</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Access to donor updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">How Donations Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">School Fees</span>
                    <Badge variant="secondary" className="text-xs">45%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">School Supplies</span>
                    <Badge variant="secondary" className="text-xs">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">Uniforms</span>
                    <Badge variant="secondary" className="text-xs">15%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">Meals</span>
                    <Badge variant="secondary" className="text-xs">10%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">Administration</span>
                    <Badge variant="secondary" className="text-xs">5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-orange-700 text-lg sm:text-xl">Monthly Giving</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm text-orange-600 mb-3 sm:mb-4">
                  Monthly donations provide consistent support and help us plan better for the children's needs.
                </p>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-700">$25/month</div>
                  <div className="text-xs sm:text-sm text-orange-600">sponsors a child's education</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}