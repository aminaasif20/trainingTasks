import React from 'react';

interface Props{
  heading:string;
  items:string[];
  selectItem:(item:string)=>void
}
export const ListGroup = ({items,heading,selectItem}:Props) => {
  // Try changing this to [] to test the "No items found" logic
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
  // const handleEvent=(event:MouseEvent)=>{
  //   console.log(event);

  // }



  // 2. Logic: If the list is NOT empty, render the beautiful list
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">{heading}</h1>
      <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: '400px' }}>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li 
            key={index} 
            //  onClick={()=>console.log(item,index  )}
              // onClick={handleEvent}
              onClick={() =>{ setSelectedItem(index);
              selectItem(item);}
                
              }
              className={selectedItem === index ? "list-group-item bg-blue-500" : "list-group-item"}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
