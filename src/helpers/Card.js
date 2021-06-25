import React from 'react';

const Card = ({ data }) => {

  const listItems = () => {
    return Object.keys(data.items).map((key, i) => (
      <li className='list-item' key={i}>
        <div className='list-item-description'>
          <img alt={key} className='list-image' src={data.items[key]}></img>
          <span>{key}</span>
        </div>
      </li>
    ))
  };


  return (
    <div className='card'>
      <div className='card-title'>
        <h3>{data.title}</h3>
      </div>
      <ul className='card-list'>
        {listItems()}
      </ul>
    </div>
  )
}

export default Card