import Page2 from "./pag2"
import Search from './Search'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search />}></Route>
        <Route path='/page2' element={< Page2 />}></Route>
      </Routes>
    </Router>


  )


}

export default App