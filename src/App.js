import React from 'react';
import CourseViewer from './CourseViewer';

function App() {
  return (
    <div className="container">
      <CourseViewer file="ernaering_clean.md" />
      
      <div className="bg-blue-200 text-blue-900 p-4 rounded-lg">
    Hvis du ser blå bakgrunn og blå tekst – Tailwind virker! 🎉
  </div>
    </div>
  );
}

export default App;