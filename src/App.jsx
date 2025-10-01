import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from './pages/ProjectDetails'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/modarchnew" element={<Home />} />
        <Route path="/modarchnew/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
