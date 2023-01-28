import React from "react";
import Error from "./components/Error.jsx";
import UserRespo from "./components/UserRespo.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Home from "./page/Home.jsx";
import NavBar from "./components/NavBar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:username' element={<UserDetails />} />
        <Route path='/repo/:username' element={<UserRespo />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}
export default App
