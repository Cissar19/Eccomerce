import React, { useContext } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { getSingleItem }  from '../services/firebase'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainerCount from './ItemDetailContainerCount';
import { cartContext } from '../../storage/cartContext';


export default function ItemDetailContainer() {
  let {itemid} = useParams()
  let {cart, addItem} = useContext(cartContext)
  const [product, setProduct] = useState([]);


  const itemInCart = cart.find(item => item.id === product.id)
  let stockUpdated
  if(itemInCart)
   stockUpdated = product.stock - itemInCart.count
  else
  stockUpdated = product.stock 
      


  function handleAddTocart(count){
    alert(`Agregaste ${count} de ${product.title} al carrito`)
    product.count = count
    addItem(product, count)
  
  }

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
          <ItemDetailContainerCount stock= {stockUpdated}onAddToCart={handleAddTocart}/>
        </div>
      </div>


    </section>
  )
}
