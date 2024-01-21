import Home from "./Pages/Home" 
import Customizer from "./Pages/Customizer"
import CanvasModel from "./canvas/CanvasModel"
import Auth from "./Components/Auth/Auth"
import {Routes,Route} from 'react-router-dom'
import Register from "./Components/Auth/Register"

function App() {
  return (
    <main className="app transition=a-all ease-in">
      <Home/>
      <CanvasModel/>
      <Customizer/>
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
