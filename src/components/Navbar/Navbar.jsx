import React, { useState } from 'react'
import {RxHamburgerMenu } from 'react-icons/rx';
import { Link , useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [navHeight,setNavHeight]=useState(false);
    const Navigate=useNavigate();
    const goToHome=()=>
    {
        Navigate("/");
    }
  return (
    <div>
      <>
        <nav className={navHeight ? "show nav":"nav"} >
               <div className='logo' onClick={()=> goToHome()}>Luxury Rental</div>
               <ul>
                <li>
                    <Link to="/aboutUs">AboutUS</Link>
                </li>
                <li>
                <Link to="/Villas">Villas</Link>

                </li>
                <li>
                <Link to="/Contact">Contact</Link>

                </li>

               </ul>
               <RxHamburgerMenu className='hamburger' onClick={()=>setNavHeight(!navHeight)}/>
        </nav>

      </>
    </div>
  )
}

export default Navbar
