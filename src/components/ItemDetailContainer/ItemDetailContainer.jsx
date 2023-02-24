import React from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { getSingleItem }  from '../services/mockAsyncsService'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  let {itemid} = useParams()
  console.log(useParams())
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    getSingleItem(itemid).then((respuesta)=>{
      setProduct(respuesta)
    })
  },[])


  return (
    <section className='contendor'>
      <div className='div1'>
        <div className='div1-img'>
          <img src={product.imgurl} alt="Imagen Detalle"/>
        </div>
      </div>

      <div className='div2'>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>$ {product.price}</span>
          <div className='div-flex'>
            <button>-</button>
            <p>Stock:1</p>
            <button>+</button>
          </div>
          <div className='div-flex'>
            <button>Comprar Ahora</button>
          </div>


        </div>
      </div>


    </section>
  )
}
