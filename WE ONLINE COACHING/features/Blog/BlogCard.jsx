import { Link } from 'react-router-dom';
import { getCategoryLabel } from './blogData';
import './BlogCard.css';

// Import images
const trainFirstImage = new URL('../../public/images/blog/train-first.jpg', import.meta.url).href;
const strengthTrainingImage = new URL('../../public/images/blog/stnb-apr-25.jpg', import.meta.url).href;

// Map of image paths to imported images
const imageMap = {
  '/images/blog/train-first.jpg': trainFirstImage,
  '/images/blog/stnb-apr-25.jpg': strengthTrainingImage,
};

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <div className="blog-card__image-container">
          {post.featuredImage ? (
            <img 
              src={imageMap[post.featuredImage] || post.featuredImage} 
              alt={post.title} 
              className="blog-card__image"
              onError={(e) => {
                console.error(`Failed to load image: ${post.featuredImage}`);
                e.target.onerror = null;
                // Create a placeholder with the first letter of the title
                const canvas = document.createElement('canvas');
                canvas.width = 400;
                canvas.height = 300;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#f0f0f0';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = 'bold 100px Arial';
                ctx.fillStyle = '#666';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(post.title.charAt(0), canvas.width/2, canvas.height/2);
                e.target.src = canvas.toDataURL();
              }}
            />
          ) : (
            <div className="blog-card__image-placeholder">
              <span>{post.title.charAt(0)}</span>
            </div>
          )}
          {post.category && (
            <div className="blog-card__category">
              {getCategoryLabel(post.category)}
            </div>
          )}
        </div>
        
        <div className="blog-card__content">
          <h2 className="blog-card__title">{post.title}</h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          
          <div className="blog-card__meta">
            <div className="blog-card__author">
              {post.authorImage ? (
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="blog-card__author-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              ) : null}
              <span>Coach {post.author}</span>
            </div>
            
            {post.date && <div className="blog-card__date">{post.date}</div>}
          </div>
          
          <div className="blog-card__read-more">
            Read Article
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard; 