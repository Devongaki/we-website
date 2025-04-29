import { useState, useEffect } from 'react';
import { 
  getPostData, 
  likePost, 
  hasUserLikedPost, 
  addComment, 
  getComments 
} from '../../firebase/blogService';
import './BlogComments.css';

const BlogComments = ({ postId, postSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Generate a unique ID for the user if they don't have one yet
  useEffect(() => {
    const storedUserId = localStorage.getItem('blog_user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('blog_user_id', newUserId);
      setUserId(newUserId);
    }
    
    // Also load stored name and email if available
    const storedName = localStorage.getItem('blog_user_name');
    if (storedName) setName(storedName);
    
    const storedEmail = localStorage.getItem('blog_user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // Load post data, comments, and check if user has liked
  useEffect(() => {
    const loadData = async () => {
      if (!postSlug || !userId) return;
      
      setIsLoading(true);

      try {
        // Get post data including likes count
        const postData = await getPostData(postSlug);
        setLikes(postData.likesCount || 0);
        
        // Check if user has liked this post
        const userHasLiked = await hasUserLikedPost(postSlug, userId);
        setHasLiked(userHasLiked);
        
        // Get comments for this post
        const postComments = await getComments(postSlug);
        setComments(postComments);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      loadData();
    }
  }, [postSlug, userId]);

  const handleLike = async () => {
    if (hasLiked || !userId) return;
    
    try {
      const success = await likePost(postSlug, userId);
      if (success) {
        setLikes(prevLikes => prevLikes + 1);
        setHasLiked(true);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) {
      alert('Please enter your name and comment');
      return;
    }
    
    setIsSubmitting(true);
    
    // Save name and email for future comments
    localStorage.setItem('blog_user_name', name);
    if (email) localStorage.setItem('blog_user_email', email);
    
    try {
      // Create new comment object
      const comment = {
        name,
        email,
        content: newComment,
      };
      
      // Add to Firestore
      const addedComment = await addComment(postSlug, comment);
      
      // Add to existing comments
      setComments(prevComments => [addedComment, ...prevComments]);
      
      // Reset form
      setNewComment('');
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('There was an error posting your comment. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="blog-comments blog-comments--loading">
        <div className="blog-comments__loading">
          <div className="spinner"></div>
          <p>Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-comments">
      <div className="blog-comments__likes">
        <button 
          className={`blog-comments__like-button ${hasLiked ? 'liked' : ''}`}
          onClick={handleLike} 
          disabled={hasLiked}
          aria-label={hasLiked ? "Liked" : "Like this article"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={hasLiked ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="blog-comments__heart-icon"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
      </div>
      
      <h3 className="blog-comments__title">Comments ({comments.length})</h3>
      
      {comments.length > 0 ? (
        <div className="blog-comments__list">
          {comments.map(comment => (
            <div key={comment.id} className="blog-comments__item">
              <div className="blog-comments__meta">
                <div className="blog-comments__author">{comment.name}</div>
                <div className="blog-comments__date">
                  {new Date(comment.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <div className="blog-comments__content">{comment.content}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-comments__empty">
          Be the first to leave a comment!
        </div>
      )}
      
      <div className="blog-comments__form-container">
        <h3>Leave a Comment</h3>
        <form className="blog-comments__form" onSubmit={handleSubmitComment}>
          <div className="blog-comments__form-row">
            <div className="blog-comments__form-group">
              <label htmlFor="comment-name">Name *</label>
              <input
                id="comment-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="blog-comments__form-group">
              <label htmlFor="comment-email">Email (will not be published)</label>
              <input
                id="comment-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="blog-comments__form-group">
            <label htmlFor="comment-content">Comment *</label>
            <textarea
              id="comment-content"
              rows="4"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              required
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="blog-comments__submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Post Comment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogComments; 