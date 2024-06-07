import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Questions({ topic }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/questions?topic=${topic}`)
      .then(response => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, [topic]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Questions for {topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
