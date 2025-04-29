import { useState, useEffect } from 'react';
import './BlogComments.css';

const BlogComments = ({ postId, postSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Load comments and likes from localStorage or a backend API
  useEffect(() => {
    // For now, we'll use localStorage as a simple storage solution
    const savedComments = JSON.parse(localStorage.getItem(`comments-${postSlug}`)) || [];
    const savedLikes = parseInt(localStorage.getItem(`likes-${postSlug}`)) || 0;
    const userHasLiked = localStorage.getItem(`user-liked-${postSlug}`) === 'true';
    
    setComments(savedComments);
    setLikes(savedLikes);
    setHasLiked(userHasLiked);
    
    // In a real application, you would fetch from your backend:
    // fetch(`/api/posts/${postSlug}/comments`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setComments(data.comments);
    //     setLikes(data.likes);
    //     setHasLiked(data.hasLiked);
    //   });
  }, [postSlug]);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      
      // Save to localStorage
      localStorage.setItem(`likes-${postSlug}`, newLikes.toString());
      localStorage.setItem(`user-liked-${postSlug}`, 'true');
      
      // In a real application, you would send to your backend:
      // fetch(`/api/posts/${postSlug}/like`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // });
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) {
      alert('Please enter your name and comment');
      return;
    }
    
    setIsSubmitting(true);
    
    // Create new comment object
    const comment = {
      id: Date.now().toString(),
      name,
      email,
      content: newComment,
      date: new Date().toISOString(),
    };
    
    // Add to existing comments
    const updatedComments = [...comments, comment];
    
    // Save to localStorage
    localStorage.setItem(`comments-${postSlug}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
    
    // Reset form
    setNewComment('');
    setIsSubmitting(false);
    
    // In a real application, you would send to your backend:
    // fetch(`/api/posts/${postSlug}/comments`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(comment),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setComments([...comments, data]);
    //     setNewComment('');
    //     setIsSubmitting(false);
    //   });
  };

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
                  {new Date(comment.date).toLocaleDateString('en-US', {
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