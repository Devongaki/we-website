import { useState } from 'react';
import { blogPosts, CATEGORIES, getCategoryLabel } from './blogData';
import BlogCard from './BlogCard';
import './BlogListing.css';

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get all unique categories from posts
  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: CATEGORIES.PERSONAL, label: getCategoryLabel(CATEGORIES.PERSONAL) },
    { key: CATEGORIES.SCIENCE, label: getCategoryLabel(CATEGORIES.SCIENCE) }
  ];
  
  // Sort posts by date in descending order (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-listing">
      <div className="container">
        <div className="blog-listing__header">
          <h1 className="blog-listing__title">Our Blog</h1>
          <p className="blog-listing__subtitle">
            Fitness insights, nutrition advice, and mindset strategies to help you achieve your goals.
          </p>
          
          <div className="blog-listing__categories">
            {categories.map(category => (
              <button
                key={category.key}
                className={`blog-listing__category-btn ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="blog-listing__grid">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-listing__empty">
            <p>We're working on more content for this category. Check back soon!</p>
            <p className="blog-listing__empty-sub">In the meantime, try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing; 