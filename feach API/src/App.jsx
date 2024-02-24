import Register from "./Components/From";
import { Routes, Route } from "react-router-dom";
import OpenPage from "./Components/Open";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<OpenPage />}></Route>
      <Route exact path="/form" element={<Register />}></Route>
    </Routes>
  );
}
export default App;
