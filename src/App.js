import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./components/calculator";
import NHS from "./components/nhs";
import Coming from "./components/coming";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/nhs" element={<NHS />} />
        <Route path="/coming" element={<Coming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
