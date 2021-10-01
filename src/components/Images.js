import React, { useState, useEffect } from 'react';
import image from '../assets/image.svg';

const Images = (props) => {
  return (
    <div>
      <img src={props.data.logo || image} className="App-logo" alt="img" />
    </div>
  );
};
export default Images;
