import { getFirestore, collection, doc, getDoc, setDoc, addDoc, updateDoc, getDocs, increment, query, orderBy, serverTimestamp, where } from 'firebase/firestore';
import { firebaseApp } from './config'; // Import your existing Firebase app

// Initialize Firestore using your existing Firebase app
const db = getFirestore(firebaseApp);

// Collection names
const BLOGS_COLLECTION = 'blogs';
const COMMENTS_COLLECTION = 'comments';
const LIKES_COLLECTION = 'likes';

// Get post data including likes count
export const getPostData = async (postSlug) => {
  try {
    const postRef = doc(db, BLOGS_COLLECTION, postSlug);
    const postDoc = await getDoc(postRef);
    
    if (postDoc.exists()) {
      return postDoc.data();
    } else {
      // Create the post document if it doesn't exist
      await setDoc(postRef, {
        slug: postSlug,
        likesCount: 0,
        createdAt: serverTimestamp()
      });
      return { slug: postSlug, likesCount: 0 };
    }
  } catch (error) {
    console.error('Error getting post data:', error);
    return { slug: postSlug, likesCount: 0 };
  }
};

// Add a like to a post
export const likePost = async (postSlug, userId) => {
  try {
    // First make sure the post document exists
    const postRef = doc(db, BLOGS_COLLECTION, postSlug);
    const postDoc = await getDoc(postRef);
    
    if (!postDoc.exists()) {
      await setDoc(postRef, {
        slug: postSlug,
        likesCount: 0,
        createdAt: serverTimestamp()
      });
    }
    
    // Check if the user already liked the post
    const likeId = `${postSlug}_${userId}`;
    const likeRef = doc(db, LIKES_COLLECTION, likeId);
    const likeDoc = await getDoc(likeRef);
    
    if (likeDoc.exists()) {
      // User already liked this post
      return false;
    }
    
    // Add the like
    await setDoc(likeRef, {
      postSlug,
      userId,
      createdAt: serverTimestamp()
    });
    
    // Increment the likes count
    await updateDoc(postRef, {
      likesCount: increment(1)
    });
    
    return true;
  } catch (error) {
    console.error('Error liking post:', error);
    return false;
  }
};

// Check if a user has liked a post
export const hasUserLikedPost = async (postSlug, userId) => {
  try {
    const likeId = `${postSlug}_${userId}`;
    const likeRef = doc(db, LIKES_COLLECTION, likeId);
    const likeDoc = await getDoc(likeRef);
    
    return likeDoc.exists();
  } catch (error) {
    console.error('Error checking if user liked post:', error);
    return false;
  }
};

// Add a comment to a post
export const addComment = async (postSlug, comment) => {
  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION);
    
    const newComment = {
      postSlug,
      name: comment.name,
      email: comment.email,
      content: comment.content,
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(commentsRef, newComment);
    return { id: docRef.id, ...newComment, createdAt: new Date() };
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

// Get all comments for a post
export const getComments = async (postSlug) => {
  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION);
    const q = query(
      commentsRef,
      where("postSlug", "==", postSlug),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const comments = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      comments.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() || new Date()
      });
    });
    
    return comments;
  } catch (error) {
    console.error('Error getting comments:', error);
    return [];
  }
}; 