import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MathFunction from "./components/MathFunction";
import Object from "./components/Object";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="object" element={<Object />} />
          <Route path="math" index element={<MathFunction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
