import React from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { getSingleItem }  from '../services/mockAsyncsService'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainerCount from './ItemDetailContainerCount';

export default function ItemDetailContainer() {
  let {itemid} = useParams()
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    getSingleItem(itemid).then((respuesta)=>{
      setProduct(respuesta)
    })
  },[itemid])


  return (
    <section className='contendor'>
      <div className='div1'>
        <div >
          <img className='div1-img' src={product.imgurl} alt="Imagen Detalle"/>
        </div>
      </div>

      <div className='div2'>
        <div>
          <h1>{product.title}</h1>
          <p>{product.detail}</p>
          <span>$ {product.price}</span>
          <ItemDetailContainerCount/>
        </div>
      </div>


    </section>
  )
}
