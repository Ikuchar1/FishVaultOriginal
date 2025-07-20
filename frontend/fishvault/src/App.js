import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [catches, setCaches] = useState([]);
  const [newCatch, setNewCatch] = useState({
    species: '',
    length: '',
    weight: '',
    location: '',
    notes: ''
  });
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5002/api/catch')
      .then(response => {
        setCaches(response.data);
      })
      .catch(error => {
        console.error('Error fetching catches:', error);
      });

      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

  }, []);

  const addCatch = (catchData) => {
    axios.post('http://localhost:5002/api/catch', catchData)
      .then(response => {
        setCaches([...catches, response.data]);
        console.log('Catch added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding catch:', error);
      });
  };

  const deleteCatch = (catchId) => {
    axios.delete(`http://localhost:5002/api/catch/${catchId}`)
      .then(response => {
        setCaches(catches.filter(catchItem => catchItem.id !== catchId));
        console.log('Catch deleted successfully:', catchId);
      })
      .catch(error => {
        console.error('Error deleting catch:', error);
      });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5002/api/users/login', {
        email,
        password
      });

      console.log('Login Successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);

    } catch (error) {
      console.error('Login Failed:', error.response?.data || error.message);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="App">

      <h1>FishVault</h1>
      {user === null ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <h1>Your Catches</h1>
      <ul>
        {catches.map(catchItem => (
          <li key={catchItem.id}>
            {catchItem.species} - {catchItem.length}in - {catchItem.weight}lbs
            <button onClick={() => deleteCatch(catchItem.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add a New Catch</h2>
      <form onSubmit={e => {
        e.preventDefault();
        addCatch({
          userId: 1,
          species: newCatch.species,
          length: parseFloat(newCatch.length),
          weight: parseFloat(newCatch.weight),
          location: newCatch.location,
          notes: newCatch.notes
        });
        setNewCatch({ species: '', length: '', weight: '', location: '', notes: '' });
      }}>
        <label>
          Species:
          <input 
            type="text" 
            name="species" 
            value={newCatch.species}
            onChange={e => setNewCatch({ ...newCatch, species: e.target.value })}
          />
        </label>
        <label>
          Length (in):
          <input 
            type="number" 
            name="length" 
            value={newCatch.length}
            onChange={e => setNewCatch({ ...newCatch, length: e.target.value })}
          />
        </label>
        <label>
          Weight (lbs):
          <input 
            type="number" 
            name="weight" 
            value={newCatch.weight}
            onChange={e => setNewCatch({ ...newCatch, weight: e.target.value })}
            />
        </label>
        <label>
          Location:
          <input 
            type="text" 
            name="location" 
            value={newCatch.location}
            onChange={e => setNewCatch({ ...newCatch, location: e.target.value })}
          />
        </label>
        <label>
          Notes:
          <textarea 
            name="notes" 
            value={newCatch.notes}
            onChange={e => setNewCatch({ ...newCatch, notes: e.target.value })}
          />
        </label>
        <button type="submit">Add Catch</button>
      </form>
    </div>
  );
}

export default App;
