import "./App.css";
import { Input } from "./components/input";
import { Route, Routes } from "react-router-dom";
import { Output } from "./components/output";
import { Context } from "./context/context";

function App() {
  return (
    <div className="App">
      <Context>
        <Routes>
          <Route path="/" element={<Input />}></Route>
          <Route path="/output" element={<Output />}></Route>
        </Routes>
      </Context>
    </div>
  );
}

export default App;
