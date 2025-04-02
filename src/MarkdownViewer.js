import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const files = {
  "Jodapro": "hepro-demo.md",
  "Matsikkerhet": "ernearing.md",
};

const MarkdownViewer = () => {
  const [selectedFile, setSelectedFile] = useState("hepro-demo.md");
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/${selectedFile}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [selectedFile]);

  return (
    <div className="markdown-body">
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="file-select"><strong>Velg kurs:</strong>{' '}</label>
        <select
          id="file-select"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
        >
          {Object.entries(files).map(([label, filename]) => (
            <option key={filename} value={filename}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;