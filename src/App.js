import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Router/Home';
import Detail from './Router/Detail';
import style from "./css/style.css";

// movie app
function App() {
  return <Router>
    <Routes>
      <Route path="/Movie-app" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </Router>
}

export default App;
