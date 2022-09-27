import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import Profile from './pages/Profile';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/login' element={<Login/>} /> 
          <Route exact path='/profile' element = {<Profile/>}/>
          <Route exact path='/' element = {<Home />}/>
          
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
