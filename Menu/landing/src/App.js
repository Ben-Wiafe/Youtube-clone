import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
    
        <Navbar/>
        <Main/>
        <footer>
        <Footer/>
        </footer>
        
    </div>
  );
}

export default App;
