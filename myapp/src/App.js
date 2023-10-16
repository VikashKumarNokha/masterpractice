import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import SignIn from './pages/Login';
import SignUp from './pages/Register';
import IsAuth from './components/IsAuth';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={ <IsAuth>  <Home/> </IsAuth>  } />
          <Route path="/about" element={ <IsAuth> <About/> </IsAuth>} />
          <Route path="/details" element={ <IsAuth> <Details/>  </IsAuth> } />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
       </Routes>
      </BrowserRouter>  

    </div>
  );
}

export default App;
