import Cart from "./Components/Cart";

import "./styles.css";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from "./Components/RootLayout";
import Product from "./Components/Product";



export default function App() {

  const router =  createBrowserRouter(createRoutesFromElements(
    <Route path='/' element= {<RootLayout/>}>
        <Route index element ={<Product/>}></Route>
        <Route path="/cart" element ={<Cart/>}></Route>
      </Route>
  
  ))

  return (
    <div className="App">
      <RouterProvider router={router}  />
    </div>
  );
}
