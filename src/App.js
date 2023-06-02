import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './kode/Register';
import Login from './kode/Login';
import Jamur from './jamur/Jamur';

function App() {
  return (
      <Routes>
         <Route path='/' element={<Login></Login>}></Route>
        <Route path='/jamur' element={<Jamur></Jamur>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/login' element={<Login></Login>}></Route> */}
      </Routes>
  );
}

export default App;
