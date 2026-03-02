import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Get Started',
    icon: '🚀',
    color: 'bg-yellow-300',
    textColor: 'text-gray-900'
  },
  {
    id: 2,
    title: 'Community Guidelines',
    icon: '🤝',
    color: 'bg-blue-300',
    textColor: 'text-gray-900'
  },
  {
    id: 3,
    title: 'Features',
    icon: '⚡',
    color: 'bg-red-300',
    textColor: 'text-gray-900'
  },
  {
    id: 4,
    title: 'Creation Tips',
    icon: '🎨',
    color: 'bg-green-300',
    textColor: 'text-gray-900'
  },
  {
    id: 5,
    title: 'Monetize',
    icon: '💰',
    color: 'bg-purple-300',
    textColor: 'text-gray-900'
  }
];

export default function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              {/* Icon Container */}
              <div className={`w-full aspect-square ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                <span className="text-5xl">{category.icon}</span>
              </div>

              {/* Category Title */}
              <h3 className={`text-center text-sm font-semibold ${category.textColor}`}>
                {category.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
