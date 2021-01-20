import React from 'react'
import logo from '../../components/logo.png'
import './style.scss'

const Header = () => {
     return (
          <div className="header">
               <div className="header__logo">
                    <img className="logo" src={logo} alt="logo"/>
               
               </div>
               <div className="header__navbar">
                    <ul className="header__item">
                         <li className="header__list">
                              <a  href="https://github.com/munarrr" className="header__link" >Home</a>
                         </li>
                         <li className="header__list">
                              <a  href="https://github.com/munarrr" className="header__link" >Home</a>
                         </li>
                         <li className="header__list">
                              <a  href="https://github.com/munarrr" className="header__link" >Home</a>
                         </li>
                         <li className="header__list">
                              <a  href="https://github.com/munarrr" className="header__link" >Home</a>
                         </li>
                    </ul>
               </div>
               <div className="header__search">
                    <input className="header__input" type="text" placeholder="Search"></input>
                    <i className="header__fa fa fa-search" aria-hidden="true"></i>
               </div>
          </div>
     )
}

export default Header

