import { BrowserRouter, Route, Router, Routes } from "react-router";
import LoginForm from "./components/shared/LoginForm";
import Home from "./Pages";
import Books from "./Pages/books";
import Kontak from "./Pages/Kontak";
import Tim from "./Pages/Tim";

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="books" element={<Books/>} />
          <Route path="kontak" element={<Kontak/>}/>
          <Route path="tim" element={<Tim/>}/>
          <Route path="login" element={<LoginForm/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
