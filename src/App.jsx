import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header.jsx";
import Landing from "./Components/Landing.jsx"
import Result from "./Components/Result.jsx"
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  )
}

export default App
