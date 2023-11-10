import React, { useState } from 'react'
import './sidebar.css'
import logo from '../../assests/logomeo1.png'
const Sidebar = () => {
  const[menu,showMenu] = useState(false);
  return (
    <>
      <aside className={menu ? 'aside show-menu' : 'aside'}>
        <a href='#home' className='nav_logo'>
          <img src={logo} alt=''/>
        </a>
      
      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href='#home' className='nav_link'>
                <i className='icon-home'></i>
              </a>
            </li>
            
            <li className='nav_item'>
              <a href='#about' className='nav_link'>
                <i className='icon-user-following'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#services' className='nav_link'>
                <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#resume' className='nav_link'>
                <i className='icon-graduation'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#portfolio' className='nav_link'>
                <i className='icon-layers'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#blog' className='nav_link'>
                <i className='icon-note'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2023</span>
      </div>
      </aside>

      <div className={menu ? 'nav_toggle nav_toggle-open' : 'nav_toggle'}>
        <i className="icon-menu" onClick={()=>showMenu (!menu)}></i>
      </div>
    </>
  )
}

export default Sidebar
