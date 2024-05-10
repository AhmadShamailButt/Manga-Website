import React from 'react';
import './Viewer.css'; // Assuming this CSS file includes all necessary styles
import MangaReader from './mangaReader'; // Ensure this is the correct path
import ChapterList from './unit'; // Ensure this is the correct path

const MangaViewer = () => {
  return (
    <div className="manga-viewer">
      <div className="manga-reader-container">
        <MangaReader />
      </div>
      <div className="chapter-list-container">
        <ChapterList numUnits={12} />
      </div>
    </div>
  );
};

export default MangaViewer;
