import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import CloseIcon from '../../public/assets/icons/Close_LG.png';
import HamburgerIconBlack from '../../public/assets/icons/Hamburger_LG_black.png';
import HamburgerIconwhite from '../../public/assets/icons/Hamburger_LG.png';
import userICon from '../../public/assets/icons/User_01.png';
import userIconWhite from '../../public/assets/icons/whiteUser.png';

const Header = () => {

  const [menuVisible, setMenuVisible] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const location = useLocation()
  const currentPath = location.pathname

  const session = localStorage.getItem('session')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // when scrolling down, header hides
      if (currentScrollPos > scrollTop) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setScrollTop(currentScrollPos);

      // when scrolling down, menu closes
      if (visibility) {
        setMenuVisible(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });


  const colorChange = scrollTop > 60 || currentPath !== '/' ? 'bg-secondary text-text' : 'bg-transparent text-white'
  const visibility = visible ? 'top-0' : '-top-64'

  // hamburger icon changes when scrolling down or it isn't home page
  const changerHamburgerIcon = () => {
    if (scrollTop > 60 || currentPath !== '/') {
      return HamburgerIconBlack
    } else {
      return HamburgerIconwhite
    }
  }
  // user icon changes when scrolling down or it isn't home page
  const changerUserIcon = () => {
    if (scrollTop > 60 || currentPath !== '/') {
      return userIconWhite
    } else {
      return userICon
    }
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    // color: "#161616"
  }// active style

  const Signout = () => {
    localStorage.removeItem('session')
    // window.location.reload()
    setMenuVisible(false)
  }

  return (
    <header className={` h-14 lg:py-4 w-full px-10 lg:px-[90px] flex justify-between 
    items-center fixed z-50 ${colorChange} ${visibility} duration-300`}>
      <Link
        to='/'
        onClick={() => setMenuVisible(false)}
      >
        <h1 className={`text-xl md:text-2xl lg:text-3xl font-kalnia ${colorChange}`}>ExploreEra</h1>
      </Link>

      {/* NAVIGATION ON SMALL DEVICE */}
      <nav
        className={`flex rounded-lg relative lg:hidden`}
      >
        {menuVisible &&
          <>
            <ul
              className='flex flex-col gap-3 px-7 py-5 text-text 
          absolute right-0 -left-32 bg-white rounded-lg'
            >
              <li className={` ${session ? 'hidden' : ''}`}>
                <NavLink
                  to='/signin'
                  onClick={() => setMenuVisible(false)}
                  className='hover:underline'
                >
                  <h4>Sign In</h4>
                </NavLink>
              </li>
              <li className={` ${session ? 'hidden' : ''}`}>
                <NavLink
                  to='/signup'
                  onClick={() => setMenuVisible(false)}
                  className='hover:underline'
                >
                  <h4>Sign Up</h4>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  onClick={Signout}
                  className={`hover:underline ${!session ? 'hidden' : ''}`}
                >
                  <h4>Sign Out</h4>
                </NavLink>
              </li>
              <span className='w-2/3 h-[1px] bg-text'></span>
              <li>
                <NavLink
                  to='/'
                  onClick={() => setMenuVisible(false)}
                  className='hover:underline'
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  <h4>Home</h4>
                </NavLink>
              </li>
              <li><h4>About Us</h4></li>
              <li><h4>Blogs</h4></li>
              <li>
                <NavLink
                  to='/our-services'
                  onClick={() => setMenuVisible(false)}
                  className='hover:underline'
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  <h4>Our Services</h4>
                </NavLink>
              </li>
              <li><h4>Our Offers</h4></li>
            </ul>
            <div
              className={'pt-4 pr-4 cursor-pointer z-20'}
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <img src={CloseIcon} alt="close-menu" />
            </div>
          </>
        }
        <div
          className={`${menuVisible ? 'hidden' : ''} cursor-pointer`}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <img src={changerHamburgerIcon()} alt="hamburger-menu" />
        </div>
      </nav>

      {/* NAV ON LG DEVICE */}
      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-6 text-xl font-normal'>
          <li>
            <NavLink
              to='/'
              onClick={() => setMenuVisible(false)}
              className='hover:underline'
              style={({ isActive }) => isActive ? activeStyles : null}
            >
              <h4>Home</h4>
            </NavLink>
          </li>
          <li><h4>About Us</h4></li>
          <li><h4>Blogs</h4></li>
          <li>
            <NavLink
              to='/our-services'
              onClick={() => setMenuVisible(false)}
              className='hover:underline'
              style={({ isActive }) => isActive ? activeStyles : null}
            >
              <h4>Our Services</h4>
            </NavLink>
          </li>
          <li><h4>Our Offers</h4></li>
          <li
            onClick={() => setMenuVisible(!menuVisible)}
            className='cursor-pointer'
          >
            <img src={changerUserIcon()} alt="usserIcon" width={32} height={32} />
          </li>
          <ul className={`w-40 bg-white text-text py-3 px-5 rounded-lg 
          absolute right-[90px] top-14 ${!menuVisible ? 'hidden' : 'lg:block'} hidden`}>
            <li>
              <NavLink
                to='/signin'
                onClick={() => setMenuVisible(false)}
                className={`hover:underline ${session ? 'hidden' : ''}`}
                style={({ isActive }) => isActive ? activeStyles : null}
              >
                <h4>Sign In</h4>
              </NavLink>
            </li>
            <hr className={`border-primary my-1 ${session ? 'hidden' : ''}`} />
            <li>
              <NavLink
                to='/signup'
                onClick={() => setMenuVisible(false)}
                className={`hover:underline ${session ? 'hidden' : ''}`}
                style={({ isActive }) => isActive ? activeStyles : null}
              >
                <h4>Sign Up</h4>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/'
                onClick={Signout}
                className={`hover:underline ${!session ? 'hidden' : ''}`}
              >
                <h4>Sign Out</h4>
              </NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}

export default Header