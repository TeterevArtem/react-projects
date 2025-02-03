import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Counter from "./pages/Counter/Counter"
import ModalPage from "./pages/Modal/Modal"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/modal" element={<ModalPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
