import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(setWeather)
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>React + .NET 8 demo</h1>
      <p>This is a simple demo calling the backend API at <code>/api/weather</code>.</p>
      <ul>
        {weather.length === 0 && <li>Loading...</li>}
        {weather.map((w, i) => (
          <li key={i}>
            {new Date(w.date).toLocaleDateString()} — {w.temperatureC} °C — {w.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
