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
                         <li className="header__list"><a classsName="header__link" href="#" >Home</a></li>
                         <li className="header__list"><a classsName="header__link" href="#" >Home</a></li>
                         <li className="header__list"><a classsName="header__link" href="#" >Home</a></li>
                         <li className="header__list"><a classsName="header__link" href="#" >Home</a></li>
                    </ul>
               </div>
               <div className="header__search">
                    <input class="header__input" type="text" placeholder="Search"></input>
                    <i class="fa fa-search" aria-hidden="true"></i>
               </div>
          </div>
     )
}

export default Header

