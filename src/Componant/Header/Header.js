import React,{useState,useEffect} from 'react'
import"./Header.css"
import newLogo from"./baoiamOrangeLogo.jpg"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

// import search from "./SearchIcon.png"
// import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
   
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
    
  return <section className='sectionHeader'>
 <div id="navbar" className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={newLogo} />
        </div>
        <div className="navbar-links_container">
            <p><a href="#e">Solutions</a></p>
            <p><a href="#">For Administrators</a></p>
            <p><a href="#">For Teachers</a></p>
            <p><a href="#">For Families</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p><a href="">Sign in</a> </p>
        <p><a className='requestDemo' href="">Request a Demo</a></p>
        <p><a className='serachIcon' href=""><FaSearch size={20}/></a></p>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#">Solutions</a></p>
            <p><a href="#">For Administrators</a></p>
            <p><a href="#">For Teachers</a></p>
            <p><a href="#">For Families</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <p className='menuSignIn'><a href="">Sign In</a></p>
            <p className='menuRequestDemo'><a href="">Request a Demo</a></p> 
            <p className='menuSearchIcon'><input type="text" name="" placeholder='search' id="" /></p>
            
          </div>
        </div>
        )}
      </div>
    </div>
  </section>
}
