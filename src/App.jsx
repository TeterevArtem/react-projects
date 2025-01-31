import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Counter from "./pages/Counter/Counter"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </div>
  );
}

export default App;
