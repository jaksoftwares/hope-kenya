import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, PieChart, FileText, Download, Shield, CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function Transparency() {
  const financialData = {
    totalRevenue: 487000,
    totalExpenses: 463500,
    programExpenses: 394975,
    adminExpenses: 48700,
    fundraisingExpenses: 19825,
    reserves: 23500
  };

  const programBreakdown = [
    { name: 'Primary Education', amount: 177375, percentage: 45, color: 'bg-blue-500' },
    { name: 'Secondary Education', amount: 142190, percentage: 36, color: 'bg-green-500' },
    { name: 'Vocational Training', amount: 39498, percentage: 10, color: 'bg-purple-500' },
    { name: 'Health & Nutrition', amount: 23699, percentage: 6, color: 'bg-red-500' },
    { name: 'Community Development', amount: 11813, percentage: 3, color: 'bg-orange-500' }
  ];

  const impactMetrics = [
    { metric: 'Cost per child per year', value: '$195', description: 'Average annual cost to support one child' },
    { metric: 'Administrative efficiency', value: '10%', description: 'Percentage of funds used for administration' },
    { metric: 'Program effectiveness', value: '85%', description: 'Funds directly supporting programs' },
    { metric: 'Fundraising efficiency', value: '4%', description: 'Cost of raising $1 in donations' }
  ];

  const auditReports = [
    { year: '2023', status: 'Completed', rating: 'Excellent', file: 'audit-2023.pdf' },
    { year: '2022', status: 'Completed', rating: 'Excellent', file: 'audit-2022.pdf' },
    { year: '2021', status: 'Completed', rating: 'Very Good', file: 'audit-2021.pdf' },
    { year: '2020', status: 'Completed', rating: 'Very Good', file: 'audit-2020.pdf' }
  ];

  const certifications = [
    { name: 'GuideStar Gold Seal', description: 'Highest level of transparency certification', valid: '2024' },
    { name: 'Charity Navigator 4-Star', description: 'Top rating for financial health and accountability', valid: '2024' },
    { name: 'Better Business Bureau Accredited', description: 'Meets all 20 standards for charity accountability', valid: '2024' },
    { name: 'Kenya NGO Coordination Board', description: 'Registered and compliant with Kenyan regulations', valid: '2024' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Financial Transparency
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            We believe in complete transparency about how your donations are used. 
            Explore our detailed financial reports, impact metrics, and accountability measures.
          </p>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2023 Financial Overview
            </h2>
            <p className="text-xl text-gray-600">
              A complete breakdown of how your donations create impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ${financialData.totalRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <PieChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ${financialData.programExpenses.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Program Expenses</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  85%
                </div>
                <div className="text-sm text-gray-600">Program Efficiency</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  2,500+
                </div>
                <div className="text-sm text-gray-600">Children Supported</div>
              </CardContent>
            </Card>
          </div>

          {/* Expense Breakdown Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Donations</CardTitle>
                <CardDescription>
                  Breakdown of expenses by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Programs (85%)</span>
                    <span className="text-sm font-bold">${financialData.programExpenses.toLocaleString()}</span>
                  </div>
                  <Progress value={85} className="h-3" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Administration (10%)</span>
                    <span className="text-sm font-bold">${financialData.adminExpenses.toLocaleString()}</span>
                  </div>
                  <Progress value={10} className="h-3" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Fundraising (5%)</span>
                    <span className="text-sm font-bold">${financialData.fundraisingExpenses.toLocaleString()}</span>
                  </div>
                  <Progress value={5} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Distribution</CardTitle>
                <CardDescription>
                  How program funds are allocated
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {programBreakdown.map((program, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{program.name}</span>
                        <span className="font-semibold">${program.amount.toLocaleString()}</span>
                      </div>
                      <Progress value={program.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Reports */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
              <TabsTrigger value="audits">Audit Reports</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Performance Indicators</CardTitle>
                  <CardDescription>
                    Measuring our efficiency and effectiveness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {impactMetrics.map((metric, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {metric.metric}
                        </div>
                        <p className="text-sm text-gray-600">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="audits" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Independent Audit Reports</CardTitle>
                  <CardDescription>
                    Annual financial audits by certified public accountants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditReports.map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <FileText className="h-8 w-8 text-blue-600" />
                          <div>
                            <div className="font-semibold">Annual Audit Report {report.year}</div>
                            <div className="text-sm text-gray-600">
                              Status: {report.status} | Rating: {report.rating}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certifications & Accreditations</CardTitle>
                  <CardDescription>
                    Third-party validations of our accountability and transparency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">
                              {cert.name}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {cert.description}
                            </p>
                            <Badge variant="secondary">
                              Valid through {cert.valid}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="policies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Governance & Policies</CardTitle>
                  <CardDescription>
                    Our commitment to ethical operations and accountability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Financial Management Policy</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Comprehensive guidelines for financial oversight, budgeting, and expense management.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Policy
                      </Button>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Donor Privacy Policy</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        How we protect donor information and respect privacy preferences.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Policy
                      </Button>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Child Protection Policy</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Safeguarding measures to protect the children in our programs.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Policy
                      </Button>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Code of Ethics</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Ethical standards and conduct expectations for all staff and volunteers.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Policy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Donors Trust HopeKenya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Impact</h3>
              <p className="text-gray-600">
                Every program outcome is measured, verified, and reported transparently.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Records</h3>
              <p className="text-gray-600">
                All financial records and reports are publicly available for review.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Third-Party Validation</h3>
              <p className="text-gray-600">
                Independent audits and certifications validate our accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Donate with Confidence
          </h3>
          <p className="text-lg md:text-xl text-green-100 mb-8">
            Your donation will be used efficiently and effectively to create lasting impact. 
            We're committed to transparency every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Download Annual Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}