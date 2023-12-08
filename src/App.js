import { Route, Routes, } from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import './style.css';
import Play from "./pages/Play/Play";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Play' element={<Play/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
