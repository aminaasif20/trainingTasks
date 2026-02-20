import React from "react";

let counter=0;
function Counter() {
  
  console.log("working");
  
  const add=()=>{
    counter++;
    document.getElementById("counter").innerHTML=`Count: ${counter}`;
    console.log(counter);
  }
  const sub=()=>{
    counter--;
    document.getElementById("counter").innerHTML=`Count: ${counter}`;
    console.log(counter);
  }
  

  return (
    <div>
      <h2 id="counter">Count: {counter}</h2>
      <button className="bg-green-500 p-2 m-4"  onClick={()=>add()}>increment</button>
      <button className="bg-red-500 p-2 m-4" onClick={()=>sub()}>decrement</button>
    </div>
  );
}

export default Counter;
