import React, { useState } from 'react'

// list with checkbox and delete button 
const arr = ['play cricket', 'play video game' , 'read book']

const CheckBox = () => {
    const [arrCopy , setArrycop] = useState(arr);
    function handleDelete(itemIndex){
        let newArr = arrCopy;
        let filteredArray = newArr.filter((el,i)=>{
            return  i!==itemIndex;
        })
         setArrycop(filteredArray)
    }
  return (
    <>
     <ul>
        {
            arrCopy.map((el,i)=>{
               return <li>{el}
               <button onClick={() =>handleDelete(i)}>Delete item</button>
               </li> 
            })
        }
     </ul>
    </>
  )
}

export default CheckBox
