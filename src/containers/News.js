import React from 'react';
import image from '../assets/image.svg';

const News = (props) => {
  const size = 3;
  const firstNElements = props.news.slice(0, size).map((text, i) => {
    return (
      <div key={i}>
        <div id="main-outer">
          <div className="news-col-l">
            <img
              className="news-pic"
              key={i}
              src={text.image || image}
              alt="news-pics"
            />
          </div>
          <div className="news-col-r">
            <div className="news-row">
              <h3>
                {text.source || '---'} {props.dateObj || '---'}
              </h3>
            </div>
            <div className="news-row">
              <h4>{text.url || '---'}</h4>
            </div>
            <div className="news-row">
              <h5>{text.headline || '---'}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="main-right">
      {props.news !== [] ? <h3>News</h3> : <h3>No News Found</h3>}

      {firstNElements}
    </div>
  );
};
export default News;

// {text ?  <img src={text.image} className="App-logo" alt="image" /> : <img src={image} className="App-logo" alt="img" />
//       }
