import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import './NAV.css';

const Nav =()=>{
    return(
        <div className='navbar'>
            <div className='container'>
                <div className='navlogo'>
                    <div className='rlogo'>
                         <a href='#' className='logo'>LOGO</a>
                    </div>
                </div>
                <div className='navlink'>
                    <ul>
                        <NavLink to="/HOME" className='navlist'>HOME</NavLink>
                        <NavLink to="/CRUD" className='navlist'>CRUD</NavLink>
                        <NavLink to="/TODOLIST" className='navlist'>TODOLIST</NavLink>
                        <NavLink to="/WEATHER" className='navlist'>WEATHER</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav;