import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import About  from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/CheckOut/CheckOut/Checkout';
function App() {
  return (
    <div className='App'>
      <Header></Header>
  
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>

      <Route path='/checkout' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }></Route>
      
      </Routes>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
