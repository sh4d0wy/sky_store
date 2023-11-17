import Home from "./Pages/Home" 
import Customizer from "./Pages/Customizer"
import CanvasModel from "./canvas/CanvasModel"
function App() {
  return (
    <main className="app transition=a-all ease-in">
      <Home/>
      <CanvasModel/>
      <Customizer/>
    </main>    
  )
}

export default App
