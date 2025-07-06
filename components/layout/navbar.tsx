'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Menu, Heart, ChevronDown, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Programs', 
      href: '/programs',
      submenu: [
        { name: 'All Programs', href: '/programs' },
        { name: 'Primary Education', href: '/programs#primary' },
        { name: 'Secondary Education', href: '/programs#secondary' },
        { name: 'Vocational Training', href: '/programs#vocational' },
        { name: 'Health & Nutrition', href: '/programs#health' }
      ]
    },
    { name: 'Children', href: '/kids' },
    { name: 'Impact', href: '/impact' },
    { 
      name: 'Get Involved', 
      href: '#',
      submenu: [
        { name: 'Donate Now', href: '/donate' },
        { name: 'Sponsor a Child', href: '/kids' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Fundraise', href: '/volunteer#fundraising' }
      ]
    },
    { 
      name: 'Resources', 
      href: '#',
      submenu: [
        { name: 'Success Stories', href: '/stories' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Financial Transparency', href: '/transparency' },
        { name: 'Annual Reports', href: '/transparency#reports' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">HopeKenya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-4 2xl:space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-orange-500 px-2 py-2 rounded-md text-sm font-medium transition-colors">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48">
                        {item.submenu.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link href={subItem.href} className="w-full">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-orange-500 px-2 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:block">
            <Link href="/donate">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 text-sm lg:text-base">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Heart className="h-6 w-6 text-orange-500" />
                      <span className="text-xl font-bold text-gray-900">HopeKenya</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.submenu ? (
                            <div className="space-y-2">
                              <div className="text-gray-700 font-medium px-3 py-2 text-base border-b border-gray-100">
                                {item.name}
                              </div>
                              <div className="ml-4 space-y-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block text-gray-600 hover:text-orange-500 px-3 py-2 text-sm transition-colors rounded-md hover:bg-orange-50"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors block hover:bg-orange-50"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Donate Button */}
                  <div className="p-4 border-t">
                    <Link href="/donate" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}