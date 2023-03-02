import React from 'react'
import { useState } from 'react'
export default function ItemDetailContainerCount({onAddToCart, stock}) {

    const [count, setCount] = useState(0)

    const disminuir = ()=>{
        setCount(count - 1)
    }
    const aumentar = ()=>{
        if(count < stock)
        setCount(count + 1)
    }

  return (
    <>
        <div className='div-flex'>
            <button disabled={count <= 1} onClick={disminuir}>-</button>
            <p>{count}</p>
            <button onClick={aumentar}>+</button>
        </div>

        <div className='div-comprar'>
            <button onClick={()=>onAddToCart(count)}>Comprar Ahora</button>
        </div>

    </>
    
  )
}
