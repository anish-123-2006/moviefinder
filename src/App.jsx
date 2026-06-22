import "./css/App.css";

import Home from "./home";
import Fav from "./Fav";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import { MovieProvider } from "./Moviecontext";
function App() {

  return (
    <MovieProvider>
  <div>
    <NavBar/>
 <main className="main-content">
  <Routes> 
    <Route path="/" element= {<Home/>}/>
    <Route path="/fav" element={<Fav/>}/>
  </Routes>
 </main>
 </div>
 </MovieProvider>
  );
}
export default App;