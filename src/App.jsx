import "./css/basic-setup.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import Found from "./pages/Found";
import Lyric from "./pages/Lyric";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/notfound" Component={NotFound} />
          <Route path="/history" Component={History} />
          <Route path="/found" Component={Found} />
          <Route path="/lyric" Component={Lyric} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
