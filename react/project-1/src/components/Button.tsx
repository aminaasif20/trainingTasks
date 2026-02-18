import {useState} from 'react'
import Alert from "./Alert"
interface Props{
    Children:string;
    onClick:()=>void;


}
const Button = ({Children}:Props) => {
    const [isAlertVisible, setIsAlertVisible] =useState(false);
  return (
    <>
    {isAlertVisible &&<Alert Children='Alert ' onclose={()=> setIsAlertVisible(false)} />}
    <button 
    onClick={()=>setIsAlertVisible(true)}
    className='bg-blue-300 p-2 rounded-md'> {Children}</button>
    </>
  )
}

export default Button
