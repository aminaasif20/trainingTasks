import React from 'react';
import { MouseEvent } from 'react';

export const ListGroup = () => {
  // Try changing this to [] to test the "No items found" logic
  let items = ["An item", "A second item", "A third item"];
  let [selectedItem, setSelectedItem] = React.useState(-1);
  // items=[];
  // 1. Logic: If the list is empty, return the message and STOP
  if (items.length === 0) {
    return (
      <div className="p-4">
        <p className="alert alert-light border text-muted">No items found</p>
      </div>
    );
  }
  const handleEvent=()=>{

  }

  // 2. Logic: If the list is NOT empty, render the beautiful list
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">List Group</h1>
      <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: '400px' }}>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li 
            key={index} 
            //  onClick={()=>console.log(item,index  )}
              onClick={()=>handleEvent()}
              className={selctedItem===index?"list-group-item hover:bg-amber-500":"list-group-item"}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
