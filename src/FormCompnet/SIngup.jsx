import React, { useEffect, useRef, useState } from 'react';
import './Singup.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import{
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const SIngup = () => {
    
const name=useRef();
const email=useRef();
const password=useRef();

const [showHome,setShowHome]=useState(false)
const [show,setShow]=useState(false)

const localSingup = localStorage.getItem('singup')
const localPassword = localStorage.getItem('password')
const localEmail = localStorage.getItem('email')




useEffect(() => {
    if(localSingup){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
})


const handleClick = () => {
    if(name.current.value&&email.current.value&&password.current.value){
        localStorage.setItem('name', name.current.value);
        localStorage.setItem('email', email.current.value);
        localStorage.setItem('password', password.current.value);
        localStorage.setItem('singup', email.current.value);

        alert('Creat Account Scuccessfully')
        window.location.reload();
    }
}

 const handleClick1 = () => {
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem('singup', email.current.value)

        window.location.reload();
    }else{
        alert('rong email')
    }
 }

  return (
    <div>
    {
        showHome? 
        
        <div>
        <Router>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
          </Router>    
          </div>
        :
        (show?
            <div className="container">
            
            <div className="input_space">
                <input placeholder="Email" type='text' ref={email}  />
            </div>
            <div className="input_space">
                <input placeholder="Password" type='password' ref={password}/>
            </div>
            <button onClick={handleClick1}>Sign IN</button>
            
            </div>:
        
    <div className="container">
    <div className="input_space">
        <input placeholder="Name" type='text' ref={name} />
    </div>
    <div className="input_space">
        <input placeholder="Email" type='text' ref={email}  />
    </div>
    <div className="input_space">
        <input placeholder="Password" type='password' ref={password}/>
    </div>
    <button onClick={handleClick}>Sign Up</button>
    
    </div>)
}

<div>  
</div>
    </div>
  )
}

export default SIngup