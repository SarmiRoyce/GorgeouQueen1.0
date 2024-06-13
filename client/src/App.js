import './App.css';
import { Route,Routes } from 'react-router-dom';


import Landing from './Components/Landing'
import Login from './Components/Login'
// import Payment from './Pages/Payment'
import Services from './Pages/Packages'
import Contact from './Pages/Contact Us'
import BR from './Components/Beauty Register'
import UR from './Components/User Register'
import Pro from './Pages/Beauticians'
import Who from './Components/Who'
import Pretty from './Pages/Beautypro'
import OS from './Pages/Ourservices'
import Book from './Pages/Book'
import Admin from './Pages/Admin'
import Profilebeauty from './Pages/Profile'
import Adprofile from './Components/addProfile'
import Showprofile from './Pages/showprofile'
import Bookindetails from './Pages/adminBooking'
import Beauticianbooking from './Pages/beauticianbookin'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/login' element ={<Login/>}/>
        {/* <Route path='/Payment' element ={<Payment/>}/> */}
        <Route path='/packages' element ={<Services/>}/>
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path='/Register' element ={<BR/>}/>
        <Route path='/URegister' element ={<UR/>}/>
        <Route path='/profile' element ={<Pro/>}/>
        <Route path='/role' element ={<Who/>}/>
        <Route path='/Beauty' element ={<Pretty/>}/>
        <Route path='/Services' element ={<OS/>}/>
        <Route path='/Book/:id' element ={<Book/>}/>
        <Route path='/Admin' element ={<Admin/>}/>
        <Route path='/Profilebeauty' element ={<Profilebeauty/>}/>
        <Route path='/Addprofile' element ={<Adprofile/>}/>
        <Route path='/showprofile/:id' element ={<Showprofile/>}/>
        <Route path='/admin/booking' element ={<Bookindetails/>}/>
        <Route path='/Beauticians/bookings' element ={<Beauticianbooking/>}/>


      </Routes> 
      
    </div>
  );
}

export default App;
