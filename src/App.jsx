import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './storage/cartContext';



export default function App() {
  return (
    <CartContextProvider>    
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/> }/>
              <Route path="/category/:categoryid" element={<ItemListContainer/> }/>
              <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CartContextProvider>

  )
}

