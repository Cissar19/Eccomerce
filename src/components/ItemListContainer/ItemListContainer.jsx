import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css'
import { getItemsByCategory } from '../services/firebase'
import { getItems } from '../services/firebase'

export default function ItemListContainer() {
    let {categoryid} = useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        if(categoryid){
            getItemsByCategory(categoryid).then((respuesta)=>{
                setProducts(respuesta)
            })
        }else{
            getItems().then((respuesta)=>{
                setProducts(respuesta)
            })
        }
    },[categoryid])

  return (
    <section className='section'>
        {products.map((item)=>(
            <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                detail={item.detail}
                imgurl={item.imgurl}
            />
        ))}
    </section>
    )
}
 
