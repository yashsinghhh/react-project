import React,{useState} from 'react'
import './navbar.css';

import logo from '../../assets/logo.svg'


const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false); 
  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='gpt3__navbar-links_container'>
        <p><a href='#Home'>Home</a></p>
        <p><a href='#wgpt'>What is GPT?</a></p>
        <p><a href='#possibility'>OpenAI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </div>
    </div>
    <div className='gpt3__navbar-sign'>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
    </div>
    <div className='gpt3__navbar-menu'>
      {toggleMenu
      // ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
      
    }
    </div>
    </div>
    
  )
}

export default Navbar