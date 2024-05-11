import React, { useState } from 'react';
import './mangaReader.css';
import mangaImage from "./i1.jpg"; // Ensure the image path is correct if using an image from local assets

const MangaReader = () => {
    const [chapterNumber, setChapterNumber] = useState(1); 
    const [pageNumber, setPageNumber] = useState(1);
    const [markedReadPage, setMarkedReadPage] = useState(null); // Store the marked read page

    const previousPage = () => {
        setPageNumber(prev => prev > 1 ? prev - 1 : prev);
    };

    const nextPage = () => {
        setPageNumber(prev => prev + 1);
    };

    const markRead = () => {
        setMarkedReadPage(pageNumber);
    };

    return (
        <div className="manga-reader-container">
        <div>
            <div id="chapterPageInfo">
                <p>Chapter: <span className="page-info">{chapterNumber}</span></p>
                <p>Page Number: <span className="page-info">{pageNumber}</span></p>
                {markedReadPage && (
                    <p>Marked as read up to page: <span className="page-info">{markedReadPage}</span></p>
                )}
            </div>
            <div id="mangaViewer">
                <img id="mangaImage" src={mangaImage} alt="Manga Page" />
            </div>
            <div id="navigationButtons">
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
                <button onClick={markRead}>Mark as Read</button>
            </div>
            </div>
        </div>
    );
};

export default MangaReader;
