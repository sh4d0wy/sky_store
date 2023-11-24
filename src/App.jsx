import Home from "./Pages/Home" 
import Customizer from "./Pages/Customizer"
import CanvasModel from "./canvas/CanvasModel"
import Auth from "./Components/CustomButton/Auth/Auth"
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
          <Route path="/login" element={<Auth/>}/>;
        </Routes>
      </div>
    </main>    
  )
}

export default App
