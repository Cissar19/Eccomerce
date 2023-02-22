import React from 'react'
import '../Item/Item.css'

export default function Item( {title, price, detail, imgurl}) {
  return (
    <div className='contenedor-card'>
        <h2 className='titulo-card'>{title}</h2>
        <img className='imagen-card' src= {imgurl} alt="Imagen"/>
        <p className='detalle-card'>{detail}</p>
        <h4>${price}</h4>
        <button className='btn'>Más detalles</button>
    </div>
  )
}
