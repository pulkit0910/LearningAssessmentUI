// src/App.js
import React, { useState } from 'react';
import './App.css';
import Questions from './Questions';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('microservice');

  const topics = ['microservice', 'java', 'react', 'angular'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        <nav>
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={selectedTopic === topic ? 'active' : ''}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </button>
          ))}
        </nav>
      </header>
      <main>
        <Questions topic={selectedTopic} />
      </main>
    </div>
  );
}

export default App;