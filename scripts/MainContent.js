import ChapterList from '../scripts/unit.js'; 
import Footer from '../scripts/footer';
import '../style/MainContent.css'; // Assuming separate CSS for this component
import Cards from '../scripts/mangaCards.js'; 
import Comments from '../scripts/comments'; 
const MainContent = () => {
    return (
        <div className="main-content">
            
            <div className="content-split">
                <div className="left-half">
                    <ChapterList numUnits="12" />
                </div>
                <div className="right-half">
                    {<Comments/>}
                    <h1 className="Recommendations">Recommendations</h1>
                    {<Cards/>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainContent;
