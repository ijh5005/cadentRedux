import React from 'react';

export const ListTable = (props) => (
  <div className="listTable">
    
    <p>Name: {props.grocery.name}</p>
    <p>Category: {props.grocery.category}</p>
    <p>Delivery Method: {props.grocery.deliveryMethod}</p>
    <button onClick={() => props.remove(props.grocery.id)}>remove</button>
    {
      !props.isSelected ?
      <button onClick={() => props.select(props.grocery)}>select</button> :
      <button onClick={() => props.deselect(props.grocery.id)}>deselect</button>
    }
  </div>
);

export default ListTable
