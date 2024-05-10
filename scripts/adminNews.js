import React, { useState } from "react";

const NewsInputPage = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [recentNews, setRecentNews] = useState([]);

  const handleTitleChange = (event) => {
    setNewsTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setNewsContent(event.target.value);
  };

  async function handleEnter(){
    if (newsTitle.trim() !== "" && newsContent.trim() !== "") {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString(); // Format the date as per your requirement

      //console.log("News added successfully.");
      // Add the new news to the recent news list
      const news = { title: newsTitle, content: newsContent, date: date };
      const updatedNews = [news, ...recentNews.slice(0, 9)];
      setRecentNews(updatedNews);

      console.log(news);

      // Clear the input fields
      setNewsTitle("");
      setNewsContent("");

        // server code here

    }
  };

  return (
    <div style={{ color: "black" }}>
      <h1>Enter Manga News</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={newsTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          placeholder="Enter content"
          value={newsContent}
          onChange={handleContentChange}
        />
      </div>
      <button onClick={handleEnter}>Submit News</button>
      <div>
        <h2>Recent News:</h2>
        <ul>
          {recentNews.map((news, index) => (
            <li key={index}>
              <strong>{news.title}</strong>: {news.content} - {news.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsInputPage;
