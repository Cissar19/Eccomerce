import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { createBuyOrder } from "../services/firebase";
import "./CartContainer.css";

function CartContainer() {
  const { cart, clearCart, removeProduct, totalPrice} = useContext(cartContext);

  async function handleCheckout(evt){
  const items = cart.map(product => ({id: product.id, title:product.title, price:product.price, count:product.count}))
  const order ={
    buyer:{
      name:"Cesar",
      email:"cesar@gmail.com",
      phone:"1234"
    },
    items: items,
    date: new Date(),
    total:12
  }
  let id = await createBuyOrder(order)
  alert(id)
  clearCart()
}

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.imgurl} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
               <button onClick={()=>removeProduct(item.id)}>X</button>
              </td>
              <th>$ {item.count * item.price}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
       <button onClick={clearCart}>Vaciar mi carrito</button>
       <button onClick={handleCheckout}>Finalizar Compra</button>
      </div>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ {totalPrice}</h4>
      </div>
    </>
  );
}

export default CartContainer;