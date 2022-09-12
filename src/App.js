import Main from "./Sections/Main"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Sidebar} from "./components/Sidebar"
import "./App.css"

function App() {
  return (
    <div className="App">     
      <div className="navbar-css">
        <Navbar />
      </div>
      <div className="sidebar-css">
        <Sidebar/> 
      </div>
      <div className="main-css">
        <Main/>
      </div>
      
      <Footer/>  
    </div>
  );
}

export default App;
;