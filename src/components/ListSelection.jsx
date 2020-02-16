import React from 'react';

const ListSelection = (props) => (
  <div className="listSelection">
    {
      props.selectedItem.name.length ? 
      <div>
        <p>Name: {props.selectedItem.name}</p>
        <p>Category: {props.selectedItem.category}</p>
        <p>Delivery Method: {props.selectedItem.deliveryMethod}</p>
      </div> :
      <div>
        nothing selected
      </div>
    }
  </div>
);

export default ListSelection;
