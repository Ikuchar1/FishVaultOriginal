import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import HomePage from './components/HomePage';

function App() {

  // const [catches, setCaches] = useState([]);
  // const [newCatch, setNewCatch] = useState({
  //   species: '',
  //   length: '',
  //   weight: '',
  //   location: '',
  //   notes: ''
  // });
  // const [user, setUser] = useState(null);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const savedUser = localStorage.getItem('user');
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (user && user.id) {
  //     axios.get(`http://localhost:5002/api/catch/user/${user.id}`)
  //       .then(response => {
  //         setCaches(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching catches:', error);
  //       });
  //   }
  // }, [user]);

  // const addCatch = (catchData) => {
  //   axios.post('http://localhost:5002/api/catch', catchData)
  //     .then(response => {
  //       setCaches([...catches, response.data]);
  //       console.log('Catch added successfully:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error adding catch:', error);
  //     });
  // };

  // const deleteCatch = (catchId) => {
  //   axios.delete(`http://localhost:5002/api/catch/${catchId}`)
  //     .then(response => {
  //       setCaches(catches.filter(catchItem => catchItem.id !== catchId));
  //       console.log('Catch deleted successfully:', catchId);
  //     })
  //     .catch(error => {
  //       console.error('Error deleting catch:', error);
  //     });
  // };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5002/api/users/login', {
  //       email,
  //       password
  //     });

  //     console.log('Login Successful:', response.data);
  //     localStorage.setItem('user', JSON.stringify(response.data));
  //     setUser(response.data);

  //     const catchesResponse = await axios.get(`http://localhost:5002/api/catch/user/${response.data.id}`);
  //     setCaches(catchesResponse.data);

  //   } catch (error) {
  //     console.error('Login Failed:', error.response?.data || error.message);
  //   }
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   setUser(null);

  //   setCaches([]);
  // };

  // Placeholder for user state (uncomment and use real logic later)
  // const [user, setUser] = useState(null);
  const user = null; // Simulate not logged in for now

  const handleLogin = () => {
    console.log('Login clicked');
    // TODO: Implement login modal or redirect
  };

  const handleStartJourney = () => {
    console.log('Start journey clicked');
    // TODO: Implement login/register flow
  };

  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Header user={user} onLogin={handleLogin} />
      
      {!user ? (
        <HomePage onStartJourney={handleStartJourney} />
      ) : (
        <main style={{ 
          maxWidth: '600px', 
          margin: '2rem auto', 
          padding: '2rem', 
          background: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '20px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
        }}>
          <h2>Dashboard (coming soon)</h2>
        </main>
      )}

      {/*
      // ...existing code for login, catches, add catch form, etc. (commented out)
      */}
    </div>
  );
}

export default App;
