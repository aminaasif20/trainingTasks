import React from 'react'
interface Props{
    Children:string;
    onclose:()=>void;
}
const Alert = ({Children,onclose}: Props) => {
  return (
    <div>
      <div className='bg-amber-200 p-4'>
        {Children}
        <button onClick={onclose} className="ml-2 bg-red-500 text-white p-1 rounded">Close</button>
      </div>
    </div>
  )
}

export default Alert
