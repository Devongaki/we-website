import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../../../features/Blog/blogData';
import BlogCard from '../../../../features/Blog/BlogCard';
import './BlogShowcase.css';

const BlogShowcase = () => {
  // Get the latest 3 blog posts
  const featuredBlogs = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="blog-showcase">
      <div className="container">
        <div className="blog-showcase__header">
          <h2 className="blog-showcase__title">Latest from Our Blog</h2>
          <p className="blog-showcase__subtitle">
            Fitness insights, nutrition advice, and mindset strategies to help you achieve your goals.
          </p>
        </div>
        
        <div className="blog-showcase__grid">
          {featuredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="blog-showcase__cta">
          <Link to="/blog" className="btn btn--primary">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase; 