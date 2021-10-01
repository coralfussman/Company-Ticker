import React, { useState } from 'react';

import Peers from '../components/Peers';
import Images from '../components/Images';

const Companies = (props) => {
  const {
    ticker,
    weburl,
    name,
    marketCapitalization,
    phone,
    shareOutstanding,
    finnhubIndustry,
  } = props.data;
  return (
    <div id="main-left">
      <h3>Company</h3>
      <div className="comp-split-row">
        <Images data={props.data} />
        <p>{name || '---'}</p>
        <h2>{ticker}</h2>
      </div>
      <div className="comp-left-row">
        <div className="comp-col">
          <p>{weburl || '---'}</p>
          <p>{phone || '---'}</p>
        </div>
      </div>
      <div className="comp-split-row">
        <div className="comp-col">
          <p>MarketCap</p>
          <p>Share Outstanding</p>
          <p>Industry</p>
        </div>
        <div className="comp-col">
          <p>{marketCapitalization || '---'}</p>
          <p>{shareOutstanding || '---'}</p>
          <p>{finnhubIndustry || '---'}</p>
        </div>
      </div>
      <Peers peer={props.peer} />
    </div>
  );
};
export default Companies;
