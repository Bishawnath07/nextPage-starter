import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className="min-h-[calc(100vh - 136px)]">
      <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
