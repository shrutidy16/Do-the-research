import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
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
            <Route path='/signup' element={<Signup />} />
          </Routes>
    </Router>
  );
}

export default App;
