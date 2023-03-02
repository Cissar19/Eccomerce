const { createContext, useState } = require("react")

export const cartContext = createContext()

export function CartContextProvider(props){
    const [cart, setCart] = useState([])

    function addItem(item, count){
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, count:product.count + count}:product
            }))
        }else{
            setCart([...cart, {...item, count}])
        }
    }
    const totalPrice = () =>{
        return cart.reduce((prev,act)=>prev + act.count * act.price,0)
    }
    const totalProducts = () =>{
        return cart.reduce((ac,producto)=>ac + producto.count, 0)
    }

    const clearCart = ()=>{setCart([])}
    const isInCart = (id) => cart.find(product => product.id === id) ? true:false
    const removeProduct = (id) => setCart(cart.filter(product => product.id !==id))

    const value = {cart,addItem,clearCart, isInCart, removeProduct, totalPrice, totalProducts}
    return <cartContext.Provider value = {value}>
        {props.children}
    </cartContext.Provider>
}