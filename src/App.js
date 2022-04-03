import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Restaurant from './components/restaurant/Restaurant'
function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/restaurant' element={<Restaurant />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
