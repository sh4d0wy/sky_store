import Home from "./Pages/Home" 
import Customizer from "./Pages/Customizer"
import CanvasModel from "./canvas/CanvasModel"
import Login from "./Components/Login/Login"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <main className="app transition=a-all ease-in">
      <Home/>
      <CanvasModel/>
      <Customizer/>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </main>    
  )
}

export default App
