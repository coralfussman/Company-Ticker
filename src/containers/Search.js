import React from 'react';

const Search = (props) => {
  const { h, l, c } = props.quote;

  return (
    <>
      <div className="searchContainter">
        <div className="searchBar">
          <form onSubmit={props.handleSubmit}>
            <div id="searchLeft">
              <input
                placeholder="SEARCH COMPANY"
                type="text"
                name="search"
                value={props.inputs || ''}
                onChange={props.handleChange}
              ></input>
              <input className="submitButton" type="submit" />
            </div>
          </form>
        </div>

        <div className="stockStats">
          <div className="stat">
            <h4> Price </h4>
            <h4>{c || '---'}</h4>
            <h4> High </h4>
            <h4 id="green">{h || '---'}</h4>
            <h4> Low </h4>
            <h4 id="red">{l || '---'}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
