import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'How to Optimize Your TikTok Profile for Maximum Growth',
    description: 'Learn the essential elements of a high-performing TikTok profile that attracts followers and engagement.',
    category: 'Get Started',
    views: '125K',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Profile+Tips'
  },
  {
    id: 2,
    title: 'Understanding TikTok\'s Algorithm in 2026',
    description: 'Master how TikTok\'s For You Page algorithm works and how to create content that gets recommended.',
    category: 'Features',
    views: '98K',
    image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Algorithm+Guide'
  },
  {
    id: 3,
    title: 'Monetization 101: Your First $1,000 on TikTok',
    description: 'Step-by-step guide to qualifying for and maximizing earnings from TikTok\'s monetization programs.',
    category: 'Monetize',
    views: '210K',
    image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Monetization'
  },
  {
    id: 4,
    title: 'Creating Viral Content: What Actually Works',
    description: 'Data-backed strategies from successful creators on what makes content go viral on TikTok.',
    category: 'Creation Tips',
    views: '156K',
    image: 'https://via.placeholder.com/400x250/fa709a/ffffff?text=Viral+Content'
  },
  {
    id: 5,
    title: 'Community Guidelines: What You Need to Know',
    description: 'Avoid violations and build a sustainable presence by understanding TikTok\'s community standards.',
    category: 'Community Guidelines',
    views: '87K',
    image: 'https://via.placeholder.com/400x250/43e97b/ffffff?text=Guidelines'
  },
  {
    id: 6,
    title: 'Advanced Editing Techniques for TikTok',
    description: 'Take your content to the next level with professional editing tips and trending effects.',
    category: 'Creation Tips',
    views: '142K',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Editing+Tips'
  }
];

const categoryColors = {
  'Get Started': 'bg-yellow-100 text-yellow-800',
  'Community Guidelines': 'bg-blue-100 text-blue-800',
  'Features': 'bg-red-100 text-red-800',
  'Creation Tips': 'bg-green-100 text-green-800',
  'Monetize': 'bg-purple-100 text-purple-800'
};

export default function Recommended() {
  const [sortBy, setSortBy] = useState('most-viewed');

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Filter */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Recommended</h2>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              <option value="most-viewed">Most viewed</option>
              <option value="most-recent">Most recent</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-gray-200 aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Tag and Views */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category] || 'bg-gray-100 text-gray-800'}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {article.views}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:shadow-md transition">
            Load More Articles
          </button>
        </div>

      </div>
    </section>
  );
}
