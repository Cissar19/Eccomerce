import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';



export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/detalle" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

