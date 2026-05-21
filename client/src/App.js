import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Decision from "./pages/Decision";
import DomainSelect from "./pages/DomainSelect";
import Engineering from "./pages/Engineering";
import Questionnaire from "./pages/Questionnaire";
import Result from "./pages/Result";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/domain" element={<DomainSelect />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/result" element={<Result />} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;