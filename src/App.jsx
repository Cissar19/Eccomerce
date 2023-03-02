import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { exportData} from './components/services/firebase';




export default function App() {
  return (
    <CartContextProvider>    
      <button onClick={exportData}>Seleccioname para obtener data</button>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/> }/>
              <Route path="/category/:categoryid" element={<ItemListContainer/> }/>
              <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
              <Route path="/carrito" element={<CartContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CartContextProvider>

  )
}

