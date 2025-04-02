// src/CourseViewer.js
import React, { useEffect, useState } from 'react';

const CourseViewer = ({ file }) => {

  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [courseTitle, setCourseTitle] = useState('');

  useEffect(() => {
    fetch(`/${file}`)
      .then(res => res.text())
      .then(text => {

            const lines = text.split('\n');
    
        const h1 = lines.find(line => line.startsWith('# '));
        setCourseTitle(h1 ? h1.replace('# ', '').trim() : '');

        const chaps = [];
        let current = null;

        lines.forEach(line => {
          if (line.startsWith('## ')) {
            if (current) chaps.push(current);
            current = { title: line.replace('## ', '').trim(), content: '' };
          } else if (current && (line.startsWith('### ') || line.trim())) {
            current.content += line + '\n';
          }
        });

        if (current) chaps.push(current);
        setChapters(chaps);
      });
  }, [file]);

  return (
    <div className="markdown-body">
      <h1>{courseTitle}</h1>
      {!selectedChapter && (
        <div>
          <h2>Velg et kapittel:</h2>
          <ul>
            {chapters.map((chap, idx) => (
              <li key={idx}>
                <button onClick={() => setSelectedChapter(chap)}>
                  {chap.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedChapter && (
        <div>
          <button onClick={() => setSelectedChapter(null)}>
            ⬅ Tilbake
          </button>
          <h2>{selectedChapter.title}</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{selectedChapter.content}</pre>
        </div>
      )}
    </div>
  );
};

export default CourseViewer;
