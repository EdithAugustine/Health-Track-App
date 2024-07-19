import React, { useState } from 'react';
import './App.css';

function App() {
  const [healthData, setHealthData] = useState({ weight: '', bloodPressure: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/health-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(healthData),
      });
      const result = await response.json();
      setMessage('Data submitted successfully!');
      console.log(result);
    } catch (error) {
      setMessage('Error submitting data');
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Health Tracker App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={healthData.weight}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Blood Pressure:
          <input
            type="text"
            name="bloodPressure"
            value={healthData.bloodPressure}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
