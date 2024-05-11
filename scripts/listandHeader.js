
import MangaDetailHeader from '../scripts/detail.js'; // Adjust the path based on your file structure
import MainContent from '../scripts/MainContent.js'; 

function listandHeader() {
  return (
    <div className="app">
    
    <MangaDetailHeader/>
    <MainContent/>
  </div>
);

}

export default listandHeader;
