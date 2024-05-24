import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import { observer } from 'mobx-react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.scss'
import Home from "./pages/Home";
import ObserverWithRouterRegistration from "./components/Registration";
import Profile from "./components/Profile";
import Dictionaries from "./pages/Dictionaries";
import Userdata from "./store/Userdata";

function App() {
  useEffect(() => {
    axios.get('http://localhost:3001/profile/', { withCredentials: true})
    .then(res => {
        Userdata.fetchUserdata(res.data);
        console.log(Userdata.username);
    })
    .catch((error) => { 
        console.log(error)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<ObserverWithRouterRegistration/>}/>
        <Route path="/profile" element={<Profile store={Userdata}/>}/>
        <Route path="/dictionaries" element={<Dictionaries store={Userdata}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
