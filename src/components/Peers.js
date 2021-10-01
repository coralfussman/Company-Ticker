import React from 'react';

const Peers = (props) => {
  const size = 5;
  // const item = props.peer.slice(0, size)
  const firstNElements = props.peer.slice(0, size).map((text, i) => {
    return <h4 key={i}>{text}</h4>;
  });

  // const stocks = (props) => {
  //   props.peer.slice(0, 5).forEach((i, itm) => {
  //     return <p key={i}>{itm.peer}</p>;
  //   });
  //   return;
  // };
  return (
    <>
      <h3 id="peer-title">PEERS</h3>
      <div className="peers-card">{firstNElements}</div>
    </>
  );
};
export default Peers;
