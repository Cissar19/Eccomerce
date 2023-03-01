const { createContext, useState } = require("react")

export const cartContext = createContext()

export function CartContextProvider(props){
    const [cart,setCart] = useState([])

    function addItem(item, count){
        let newCart = [...cart]
        newCart.push(item)
        setCart(newCart)
        console.log(count)
    }


    const value = {cart,addItem}
    return <cartContext.Provider value = {value}>
        {props.children}
    </cartContext.Provider>
}