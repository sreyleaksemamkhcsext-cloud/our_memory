import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

const MemoryTimeline = () => {
  const memories = [
    {
      id: 1,
      date: 'January 15, 2023',
      title: 'First Meeting',
      description: 'The day we first met and our journey began',
      icon: FaHeart,
      color: 'text-romantic-rose'
    },
    {
      id: 2,
      date: 'February 14, 2023',
      title: 'First Valentine\'s Day',
      description: 'Our first Valentine\'s Day together, filled with love and romance',
      icon: FaHeart,
      color: 'text-romantic-rose'
    },
    {
      id: 3,
      date: 'June 10, 2023',
      title: 'First Vacation',
      description: 'Our amazing trip to the mountains, creating unforgettable memories',
      icon: FaStar,
      color: 'text-yellow-500'
    },
    // Add more memories
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-romantic text-center text-romantic-rose mb-12">
        Our Journey Together
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {memories.map((memory, index) => {
          const Icon = memory.icon;
          return (
            <div key={memory.id} className="flex mb-8">
              {/* Timeline line */}
              <div className="flex flex-col items-center mr-6">
                <div className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center ${memory.color} border-2 border-romantic-rose`}>
                  <Icon className="w-6 h-6" />
                </div>
                {index !== memories.length - 1 && (
                  <div className="w-1 h-full bg-romantic-rose bg-opacity-30 mt-2"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{memory.title}</h3>
                  <span className="text-romantic-rose font-semibold">{memory.date}</span>
                </div>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryTimeline;