import Home from "./Pages/Home" 
import Customizer from "./Pages/Customizer"
import CanvasModel from "./canvas/CanvasModel"
import Auth from "./Components/Auth/Auth"
import {Routes,Route} from 'react-router-dom'
import Register from "./Components/Auth/Register"
import Cart from "./Pages/Cart/Cart"
import { Toaster } from "react-hot-toast"
import { Address } from "./Pages/Address/Address"
import Payments  from "./Pages/Payments/Payments"

function App() {
  return (
    <main className="app transition=a-all ease-in">
      <Toaster/>
      <Home/>
      <CanvasModel/>
      <Customizer/>
      <Auth/>
      <Cart/>
      <Address/>
      <Payments/>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* <Route index element={<Home/>}/> */}
          <Route path="/login" element={<Auth/>}/>;
          <Route path="/signup" element={<Register/>}/>;
        </Routes>
      </div>
    </main>    
  )
}

export default App
