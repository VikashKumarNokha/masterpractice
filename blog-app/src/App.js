import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/details' element={<Details/>} />
         <Route path='/login' element={<Login/>} />
      </Routes>  
    </div>
  );
}

export default App;
