import { useState, useEffect } from 'react';
import Button from '../ui/Button';

// Container component - handles data fetching and state
const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Simulating API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          name: 'William',
          email: 'william@example.com',
          role: 'Fitness Enthusiast'
        }), 1000)
      );
      setUserData(response);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      {userData && (
        <>
          <div className="mb-4">
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Role: {userData.role}</p>
          </div>
          <Button onClick={() => console.log('Edit profile')}>
            Edit Profile
          </Button>
        </>
      )}
    </div>
  );
};

export default UserProfile; 