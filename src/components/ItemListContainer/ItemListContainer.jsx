import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import getItems from '../services/mockAsyncsService'


export default function ItemListContainer() {

    const [products, setProducts] = useState([])


    useEffect(()=>{
        getItems().then((respuesta)=>{
            console.log(respuesta)
            setProducts(respuesta) 
        })
    },[])

  return (
    <section className='section'>
        {products.map((item)=>(
            <Item
                key={item.id}
                title={item.title}
                price={item.price}
                detail={item.detail}
                imgurl={item.imgurl}
            />
        ))}
    </section>
    )
}
 
