// import React, { useState } from "react";
// import mangaDataFromFile from "./db.js";
// import "../style/dailymanga.css";

// const UpdatedTitleWrapper = () => {
//   const [mangaDataState] = useState(mangaDataFromFile);

//   return (
//     <div className="UpdatedTitles-module_gridContainer_mw8H9 snipcss-zXl4m">
//       {mangaDataState.map(({ image, mangaName, authorName }, index) => (
//         <div key={index} className="UpdatedTitle-module_titleWrapper_2EQIT">
//           <a href="model.html">
//             <div className="UpdatedTitle-module_title_2KlMr">
//               <img
//                 alt=""
//                 className="UpdatedTitle-module_titleImage_3DBmi"
//                 src={image}
//               /> 
//               <div className="UpdatedTitle-module_titleDescription_Cf0hO">
//                 <p className="UpdatedTitle-module_titleName_1QO_s">{mangaName}</p>
//                 <p className="UpdatedTitle-module_author_1ltec">{authorName}</p>
//               </div>
//             </div>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };
//import mangaDataFromFile from "./db.js";
// export default UpdatedTitleWrapper;

import React, { useState, useEffect } from "react";
import "../style/dailymanga.css";

const UpdatedTitleWrapper = () => {
  const [mangaInfo, setMangaDataState] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);

  const getAllMangaInfo = async () => {
    try {
        const response = await fetch('/executeQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sql: 'EXEC GetAllMangaInfo;'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        if (data.success) {
            setMangaDataState(data.rows);
            console.log("Retrieved data:", data.rows);
        } else {
            setError(data.error);
        }
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false); // Set loading state to false after fetch completes
    }
  };

  useEffect(() => {
    getAllMangaInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Render an error message if fetch fails
  }

  return (
    <div className="UpdatedTitles-module_gridContainer_mw8H9 snipcss-zXl4m">
      {mangaInfo.map(({ Cover_Image, title, author }, index) => (
        <div key={index} className="UpdatedTitle-module_titleWrapper_2EQIT">
          <a href="model.html">
            <div className="UpdatedTitle-module_title_2KlMr">
              <img
                alt=""
                className="UpdatedTitle-module_titleImage_3DBmi"
                src={Cover_Image} // Use cover_image for the image source
              /> 
              <div className="UpdatedTitle-module_titleDescription_Cf0hO">
                <p className="UpdatedTitle-module_titleName_1QO_s">{title}</p> {/* Use title for manga name */}
                <p className="UpdatedTitle-module_author_1ltec">{author}</p> {/* Use author for author name */}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UpdatedTitleWrapper;
