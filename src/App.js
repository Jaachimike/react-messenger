import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
