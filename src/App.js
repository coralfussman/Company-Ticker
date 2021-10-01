import logo from './logo.svg';
import './styles.scss';
import Search from './containers/Search.js';
import Companies from './containers/Companies.js';
import News from './containers/News.js';
import React, { useState, useEffect } from 'react';

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.REACT_APP_API_KEY; // Replace this
const finnhubClient = new finnhub.DefaultApi();

const App = () => {
  const [inputs, setInputs] = useState('');
  const [ticker, setTicker] = useState({});
  const [peer, setPeer] = useState([]);
  const [news, setNews] = useState([]);
  const [quote, setQuote] = useState({});
  const searchTerm = inputs.toUpperCase();

  const dateObj = new Date().toISOString().split('T')[0];
  const dateF = (date) => {
    if (ticker !== {}) {
      return date;
    } else {
      return [];
    }
  };
  //search bar
  const handleChange = (e) => {
    console.log('console e', e.target.value);

    setInputs(e.target.value);
    console.log('state', inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs('');

    console.log('state after', inputs);

    console.log('searchTerm', searchTerm);
    //let optsLimit = { limit: 10 };

    finnhubClient.companyProfile2(
      { symbol: searchTerm },
      (error, data, response) => {
        setTicker(data);
      }
    );
    finnhubClient.companyPeers(searchTerm, (error, data, response) => {
      setPeer(data);
    });

    finnhubClient.companyNews(
      searchTerm,

      dateF(dateObj),
      dateF(dateObj),
      (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log('news', data);
          setNews(data);
        }
      }
    );

    finnhubClient.quote(searchTerm, (error, data, response) => {
      console.log(data);
      setQuote(data);
    });
  };

  return (
    <>
      <nav className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <header>
        <Search
          quote={quote}
          inputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setInputs={setInputs}
        />
      </header>
      <div className="App">
        {inputs === '' ? (
          <div className="main-container">
            <Companies data={ticker} peer={peer} />
            <News news={news} dateObj={dateObj} />
          </div>
        ) : (
          <h2>no ticker found</h2>
        )}
        <h6>made by Coral ⭐</h6>
      </div>
    </>
  );
};

export default App;

// {inputs ? (
//   <div className="main-container">
//     <Companies data={data} peer={peer} />
//     <News news={news} />
//   </div>
// ) : (
//   <h2>no ticker found</h2>
// )}
