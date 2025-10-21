import React from 'react';
import { FaHeart, FaImages, FaHistory, FaBook } from 'react-icons/fa';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'gallery', label: 'Gallery', icon: FaImages },
    { id: 'timeline', label: 'Timeline', icon: FaHistory },
    { id: 'story', label: 'Our Story', icon: FaBook },
  ];

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Heart Accent */}
          <FaHeart className="text-romantic-rose w-8 h-8 animate-pulse" />

          {/* Title */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-romantic text-romantic-rose font-extrabold drop-shadow-md">
              Our Love Story
            </h1>
            <p className="text-gray-500 mt-2 text-lg md:text-xl">Forever and Always</p>
          </div>

          {/* Navigation */}
          <nav className="w-full max-w-3xl">
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-5 py-2 rounded-full font-medium transition-all duration-300 transform ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 text-white shadow-2xl scale-105'
                        : 'text-gray-600 hover:text-romantic-rose hover:bg-pink-50 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
