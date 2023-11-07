import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
