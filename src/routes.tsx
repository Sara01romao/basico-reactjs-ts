

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carts from './pages/Carts';
import Catalog from './pages/Catalog';

  

  
  export default function AppRoutes() {
    return (
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Catalog/>}/>
                <Route path='/cart' element={<Carts/>}/>
            </Routes>
       </BrowserRouter>
    )
  }
  