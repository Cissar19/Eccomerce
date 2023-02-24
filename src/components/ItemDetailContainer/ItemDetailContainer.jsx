import React from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'

export default function ItemDetailContainer() {
  return (
    <section className='contendor'>
      <div className='div1'>
        <div className='div1-img'>
          <img src="https://http2.mlstatic.com/D_NQ_NP_2X_994778-MLC44299215903_122020-F.webp" alt="Imagen Detalle"/>
        </div>
      </div>

      <div className='div2'>
        <div>
          <h1>Titulo de producto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, neque? Corporis repudiandae dolore cum neque aspernatur in molestias, excepturi quis quibusdam nam tempora veritatis laboriosam minus eos consequuntur esse dolorum.</p>
          <span>$ {123}</span>
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
