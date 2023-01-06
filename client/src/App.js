import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"
function App() {
  return (
    <Router>
          <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
    </Router>
  );
}

export default App;
