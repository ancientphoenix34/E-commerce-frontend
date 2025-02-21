import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Items from '../Items/Items'

const NewCollections = () => {

  const [new_collection,setNew_collection]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])



  return (
    <div className='new-collections'>
      <h2>New Collections</h2>
      <hr/>
      <div className="collections">
{new_collection.map((item,i)=>{
   return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
      </div>
    </div>
  )
}

export default NewCollections
