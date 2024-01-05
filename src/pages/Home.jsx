import React from "react";
import { Chrono } from "react-chrono";
const Home = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          },
        }
    }];
  return (
    <>
        <div className="container">
        <div style={{ width: "100%", height: "600px" }}>
        <Chrono items={items} />
      </div>
        </div>
    </>
  );
};

export default Home;
