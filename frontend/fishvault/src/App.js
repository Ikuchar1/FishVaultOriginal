import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { on } from '../node_modules/eslint-plugin-import/lib/rules/prefer-default-export';

function App() {

  const [catches, setCaches] = useState([]);
  const [newCatch, setNewCatch] = useState({
    species: '',
    length: '',
    weight: '',
    location: '',
    notes: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5002/api/catch')
      .then(response => {
        setCaches(response.data);
      })
      .catch(error => {
        console.error('Error fetching catches:', error);
      });
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

  return (
    <div className="App">
      <h1>FishVault Catches</h1>
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
