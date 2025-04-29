import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getPostBySlug, getCategoryLabel } from './blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    
    // Get post data
    const postData = getPostBySlug(slug);
    
    if (postData) {
      setPost(postData);
      setIsLoading(false);
      // Set page title
      document.title = `${postData.title} | WE Online Coaching`;
    } else {
      // If post not found, redirect to blog listing
      navigate('/blog');
    }
    
    // Cleanup
    return () => {
      document.title = 'WE Online Coaching';
    };
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="blog-post blog-post--loading">
        <div className="container">
          <div className="blog-post__loading">
            <div className="spinner"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <article className="blog-post">
      <div className="blog-post__container">
        <div className="blog-post__back-link">
          <Link to="/blog">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8332 10.0001H4.1665M4.1665 10.0001L9.99984 15.8334M4.1665 10.0001L9.99984 4.16675" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to all articles
          </Link>
        </div>
        
        {post.category && (
          <div className="blog-post__category-tag">
            {getCategoryLabel(post.category)}
          </div>
        )}
        
        <header className="blog-post__header">
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            <div className="blog-post__author">
              {post.authorImage && (
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="blog-post__author-image"
                />
              )}
              <span className="blog-post__author-name">By {post.author}</span>
            </div>
            {post.date && (
              <div className="blog-post__date">{post.date}</div>
            )}
          </div>
        </header>
        
        {post.featuredImage && (
          <div className="blog-post__featured-image">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                // Use a default image that exists in your project
                e.target.src = '/images/coaches/william.jpg'; 
              }} 
            />
          </div>
        )}
        
        <div className="blog-post__content">
          {post.content.map((section, index) => {
            if (section.type === 'paragraph') {
              return <p key={index} className="blog-post__paragraph">{section.text}</p>;
            } else if (section.type === 'heading') {
              return <h2 key={index} className="blog-post__section-title">{section.text}</h2>;
            } else if (section.type === 'list') {
              return (
                <ul key={index} className="blog-post__list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="blog-post__list-item">
                      {item.title && <strong>{item.title}</strong>}
                      {item.description}
                    </li>
                  ))}
                </ul>
              );
            } else if (section.type === 'image') {
              return (
                <figure key={index} className="blog-post__figure">
                  <img src={section.url} alt={section.alt} className="blog-post__image" />
                  {section.caption && (
                    <figcaption className="blog-post__caption">{section.caption}</figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })}
        </div>
        
        <footer className="blog-post__footer">
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post__tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-post__tag">#{tag}</span>
              ))}
            </div>
          )}
          
          <div className="blog-post__cta">
            <p className="blog-post__cta-text">{post.ctaText || "Want more mindset + movement tips?"}</p>
            <Link to="/free-consultation" className="button button--primary">
              Get Free Consultation
            </Link>
          </div>
          
          <div className="blog-post__social">
            <p>Share this article:</p>
            <div className="blog-post__social-links">
              <button className="blog-post__social-button" aria-label="Share on Facebook">
                <i className="icon-facebook"></i>
              </button>
              <button className="blog-post__social-button" aria-label="Share on Twitter">
                <i className="icon-twitter"></i>
              </button>
              <button className="blog-post__social-button" aria-label="Share on LinkedIn">
                <i className="icon-linkedin"></i>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPost; 