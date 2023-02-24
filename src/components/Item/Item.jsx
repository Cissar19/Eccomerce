import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'
export default function Item( {title, price, detail, imgurl, id}) {
  const urlDetail = `/item/${id}`

  return (
    <div className='contenedor-card'>
        <h2 className='titulo-card'>{title}</h2>
        <img className='imagen-card' src= {imgurl} alt="Imagen"/>
        <p className='detalle-card'>{detail}</p>
        <h4>${price}</h4>
        <Link to={urlDetail}>
          <button className='btn'>Más detalles</button>
        </Link>
        
    </div>
  )
}
