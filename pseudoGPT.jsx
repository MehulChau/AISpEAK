import React, { useState } from 'react';
import axios from 'axios';

const ConversationAnalyzer = () => {
  const [transcript, setTranscript] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleTranscriptChange = (e) => {
    setTranscript(e.target.value);
  };

  const analyzeConversation = async () => {
    try {
      const response = await axios.post(
        'API_ENDPOINT', // Replace with the actual ChatGPT API endpoint
        { transcript },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`,
          },
        }
      );

      // Process the API response to extract Clarity, Professionalism, and Responsiveness percentages.
      const { clarity, professionalism, responsiveness } = response.data;

      setAnalysis({ clarity, professionalism, responsiveness });
    } catch (error) {
      console.error('Error analyzing conversation:', error);
    }
  };

  return (
    <div>
      <h1>Conversation Analyzer</h1>
      <textarea
        placeholder="Enter conversation transcript..."
        value={transcript}
        onChange={handleTranscriptChange}
      />
      <button onClick={analyzeConversation}>Analyze</button>
      {analysis && (
        <div>
          <h2>Analysis Results</h2>
          <p>Clarity: {analysis.clarity}%</p>
          <p>Professionalism: {analysis.professionalism}%</p>
          <p>Responsiveness: {analysis.responsiveness}%</p>
        </div>
      )}
    </div>
  );
};

export default ConversationAnalyzer;