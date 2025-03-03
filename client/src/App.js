import React from 'react';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Rooms from './screens/Rooms';
import Register from './screens/Register';
import Login from './screens/Login';
import Account from './screens/Account';
import BookRoom from './screens/BookRoom'; 
import Experiences from './screens/Experiences';
import Contact from './screens/Contact';
import AdminPanel from './screens/AdminPanel';


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path='/' element={<HomeScreen />} />
        <Route path='/rooms' element={<Rooms />} /> 
        <Route path='/rooms/payment/:id' element={<BookRoom />} /> 
        <Route path='/register' element={<Register />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/account/:id' element={<Account />} /> 
        <Route path='/experiences' element={<Experiences />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/admin' element={<AdminPanel />} /> 
        {/* <Route path='/rooms/:id' element={<RoomDetails/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
