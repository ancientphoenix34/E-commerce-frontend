import React, { useEffect, useState } from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

const Popular = () => {

  const [popularProducts,setPopularProducts]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/popularinwomen")
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  },[])
  return (
    <div className='popular'>
      <h2>Popular among ladies</h2>
      <hr/>
      <div className="popular-items">
        {popularProducts.map((item,i)=>{
return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
