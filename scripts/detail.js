import React, { useState } from 'react'; // Corrected import statement
import '../style/detail.css'; // Make sure the path to your CSS module is correct

const MangaDetailHeader = () => {
    const [rating, setRating] = useState(0); // Default rating set to 3
    const genres = ["Action", "Adventure", "Comedy", "Fantasy", "Mystery"];
    return (
        <div className="main-container TitleDetailHeader-module_right1_1o9Bj snipcss-WK42Z">
            <div className="manga-imgCover TitleDetailHeader-module_cover_3ljyH">
                <img 
                    src="https://cdn.myanimelist.net/images/manga/2/253146l.jpg" 
                    alt="Beat & Motion Cover"
                    className="manga-img TitleDetailHeader-module_coverImage_3rvaT"
                />
                <div>
                    <button className="styles-module_btn_17GWO styles-module_default_uUjEB TitleDetailHeader-module_favoritedBtn_Z2Lrg">
                        Add to Favorite
                    </button>
                </div>
            </div>

            <div className="title-container TitleDetailHeader-module_info_1_7BN snipcss0-0-0-1">
                <h1 className="manga-name TitleDetailHeader-module_title_Iy33M snipcss0-1-1-2">Beat & Motion</h1>
                <h1 className="author-name TitleDetailHeader-module_author_3Q2QN snipcss0-1-1-3">Author: Naoki Fujita</h1>
                <div className="snipcss0-1-1-4">
                <div className="TitleDetailHeader-module_overviewTitleWrapper_3_vMN snipcss0-2-4-5">
                    <h6 className="TitleDetailHeader-module_overviewTitle_1X9aO snipcss0-3-5-6">Summary</h6>
                    <p className="summary TitleDetailHeader-module_overview_32fOi snipcss0-2-4-11">
                    The winner of the MILLION TAG manga competition! A new era of manga begins with this series about the struggle and joy of creating art. Anime and music collide in this new series about growing up and reaching for your dreams!
                        The winner of the MILLION TAG manga competition! A neThe winner of the MILLION TAG manga competition! A new era of manga begins with this series about the struggle and joy of creating art. Anime and music collide in this new series about growing up and reaching for your dreams!
                        The winner of the MILLION TAG manga competition! A new era of manga begins with th</p>
                </div>

                    <div className="rating">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <React.Fragment key={star}>
                            <input
                                type="radio"
                                id={`star${star}`}
                                name="rate"
                                value={star}
                                className="hidden-radio"
                                checked={rating === star}
                                onChange={() => setRating(star)}
                            />
                            <label htmlFor={`star${star}`} className="star-label" title={`Rate ${star} stars`}></label>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="genre-container">
                        {genres.map((genre, index) => (
                            <div key={index} className="genre-tag">
                                {genre}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangaDetailHeader;
