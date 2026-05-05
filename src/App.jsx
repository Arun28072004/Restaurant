import{BrowserRouter,Routes,Route}from"react-router-dom"
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Chefs from "./components/Chefs";
import Navbar from "./Components/Navbar";
import Login from "./components/Login";
import Gallery from "./components/Gallery";




function App(){
  return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
     <Route path="/chefs" element={<Chefs/>}/>
     <Route path="/Gallery" element={<Gallery/>}/>
     <Route path="/Login" element={<Login/>}/>

       
     
  </Routes>

  </BrowserRouter>
  )
}
export default App