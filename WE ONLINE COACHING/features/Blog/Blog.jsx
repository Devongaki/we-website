import { useState } from 'react';
import './blog.css';
import BlogPost from './BlogPost';

// Sample blog post data structure for your first post
const firstBlogPost = {
  id: '1',
  title: 'Train First, Eat Better Later',
  author: 'William',
  authorImage: '/images/coaches/william.jpg',
  date: 'June 15, 2023',
  category: 'personal-opinion',
  content: [
    {
      type: 'paragraph',
      text: 'Most people think they need to fix their diet before they start working out. But I believe the opposite. Training is harder to start—but once you do, it unlocks everything else, including your nutrition.'
    },
    {
      type: 'heading',
      text: 'Why Training Comes First'
    },
    {
      type: 'list',
      items: [
        {
          title: '1. You Can\'t Fake It',
          description: 'Anyone can say, "I\'m eating healthy." But training shows you what real commitment looks like. It\'s uncomfortable. It demands consistency. And that effort builds something deeper than a meal plan: it builds discipline.'
        },
        {
          title: '2. Your Body Starts Choosing Better',
          description: 'When you train regularly, your appetite shifts. You naturally crave cleaner, lighter foods—not because someone told you to, but because your body feels the difference.'
        },
        {
          title: '3. You Want to Protect Your Progress',
          description: 'Once you start getting stronger, moving better, and seeing results, you won\'t want to ruin that with junk. You start thinking, "What\'s going to help me recover? What\'s going to fuel me better?"'
        },
        {
          title: '4. It Builds Mental Toughness',
          description: 'Training trains your mind, too. It teaches you to do hard things, even when you don\'t feel like it. That mental shift helps you take control of your life—and your eating.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'The Takeaway'
    },
    {
      type: 'paragraph',
      text: 'Don\'t wait for the perfect diet. Don\'t wait until you feel "ready." Just start training.'
    },
    {
      type: 'paragraph',
      text: 'Even 10 minutes a day can build the momentum you need. Because when you master movement, better habits follow.'
    }
  ],
  tags: ['fitness', 'nutrition', 'mindset', 'habits'],
  ctaText: 'Want more mindset + movement tips?'
};

const Blog = () => {
  // You could add more blog posts and filtering functionality later
  const [posts] = useState([firstBlogPost]);
  
  return (
    <div className="blog">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
