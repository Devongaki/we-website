import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getPostBySlug, getCategoryLabel } from './blogData';
import './BlogPost.css';
import BlogComments from './BlogComments';

// Map of image paths to imported images
const imageMap = {
  '/images/blog/train-first.jpg': '/images/blog/train-first.jpg',
  '/images/blog/stnb-apr-25.jpg': '/images/blog/stnb-apr-25.jpg',
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const postData = getPostBySlug(slug);
    
    if (postData) {
      console.log('Post Data:', postData);
      console.log('Featured Image Path:', postData.featuredImage);
      console.log('Mapped Image:', imageMap[postData.featuredImage]);
      
      setPost(postData);
      setIsLoading(false);
      document.title = `${postData.title} | WE Online Coaching`;
      
      const firstParagraph = postData.content.find(section => section.type === 'paragraph')?.text || '';
      
      document.querySelectorAll('meta[property^="og:"], meta[property^="twitter:"]').forEach(el => el.remove());
      
      const metaTags = [
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:title', content: postData.title },
        { property: 'og:description', content: postData.excerpt || firstParagraph },
        { property: 'og:image', content: postData.featuredImage },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: window.location.href },
        { property: 'twitter:title', content: postData.title },
        { property: 'twitter:description', content: postData.excerpt || firstParagraph },
        { property: 'twitter:image', content: postData.featuredImage }
      ];
      
      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      });
    } else {
      navigate('/blog');
    }
    
    return () => {
      document.title = 'WE Online Coaching';
      document.querySelectorAll('meta[property^="og:"], meta[property^="twitter:"]').forEach(el => el.remove());
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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <span className="blog-post__author-name">By {post.author}</span>
            </div>
            {post.date && (
              <div className="blog-post__date">{post.date}</div>
            )}
          </div>
        </header>
        
        {post.featuredImage && !imageError && (
          <div className="blog-post__featured-image">
            <img 
              src={post.featuredImage}
              alt={post.title}
              className="blog-post__featured-image-img"
              onError={(e) => {
                console.error(`Failed to load image: ${post.featuredImage}`);
                console.error('Image load error:', e);
                setImageError(true);
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', post.featuredImage);
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
            } else if (section.type === 'selling-point') {
              return <p key={index} className="blog-post__selling-point">{section.text}</p>;
            }
            return null;
          })}
        </div>
        
        <BlogComments postId={post.id} postSlug={slug} />
        
        <div className="blog-post__cta">
          <p className="blog-post__cta-text">{post.ctaText || "Want more mindset + movement tips?"}</p>
          <Link to="/free-consultation" className="button button--primary">
            Get Free Consultation
          </Link>
        </div>
        
        <div className="blog-post__social">
          <p>Share this article:</p>
          <div className="blog-post__social-links">
            <button 
              className="blog-post__social-button" 
              aria-label="Share on Facebook"
              onClick={() => {
                const url = window.location.href;
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                  'facebook-share-dialog',
                  'width=626,height=436'
                );
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            
            <button 
              className="blog-post__social-button" 
              aria-label="Copy link for Instagram"
              onClick={() => {
                const url = window.location.href;
                navigator.clipboard.writeText(url)
                  .then(() => alert('Link copied! You can now paste it in your Instagram post or story.'))
                  .catch(() => {
                    // Fallback for browsers that don't support clipboard API
                    const input = document.createElement('input');
                    input.value = url;
                    document.body.appendChild(input);
                    input.select();
                    document.execCommand('copy');
                    document.body.removeChild(input);
                    alert('Link copied! You can now paste it in your Instagram post or story.');
                  });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
            
            <button 
              className="blog-post__social-button" 
              aria-label="Share on LinkedIn"
              onClick={() => {
                const url = window.location.href;
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                  'linkedin-share-dialog',
                  'width=626,height=436'
                );
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 