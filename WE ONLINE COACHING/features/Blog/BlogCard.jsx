import { Link } from 'react-router-dom';
import { getCategoryLabel } from './blogData';
import TrainFirstImage from '../../../public/images/Blog/train-first.jpg';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <div className="blog-card__image-container">
          {post.featuredImage ? (
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="blog-card__image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = TrainFirstImage;
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
                />
              ) : null}
              <span>{post.author}</span>
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