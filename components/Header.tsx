'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white px-3 py-2 rounded-lg font-bold text-xl">
                MBH
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Mushin Buys Houses</span>
                <span className="text-xs text-gray-600">Cash Home Buyers</span>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              Home
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="/#property-form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
            >
              Get Your Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 