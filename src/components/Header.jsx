import React from 'react';
import { BookOpen, Search, User } from 'lucide-react';
import { Button } from './ui/button';

const categories = [
  "Fantasy",
  "Memoir",
  "Romance novel",
  "Science fiction",
  "Horror",
  "Mystery",
  "Thriller",
  "Young adult",
  "Historical fiction",
  "Magical Realism"
];

import { useNavigate } from 'react-router-dom';
const Header = ({ selectedCategory }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-white">BookHub</h1>
          </div>

          {/* Categories */}
          <nav className="hidden md:flex items-center space-x-4 mx-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "ghost"}
                className={selectedCategory === cat ? "bg-pink-500 text-white" : "text-white hover:text-pink-500"}
                onClick={() => navigate(`/category/${cat}`)}
              >
                {cat}
              </Button>
            ))}
            <Button
              variant={!selectedCategory ? "default" : "ghost"}
              className={!selectedCategory ? "bg-pink-500 text-white" : "text-white hover:text-pink-500"}
              onClick={() => navigate(`/`)}
            >
              All
            </Button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search books, authors..."
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-pink-500">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

