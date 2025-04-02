import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/hepro-demo.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
  return (
    <div style={{ padding: '2rem' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;