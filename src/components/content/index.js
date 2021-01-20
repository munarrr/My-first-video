import React from 'react'
import bg from '../../components/bg.jpg'
import './style.scss'

const Content = () => {
     return (
          <div className="content">
               <img src={bg} className="content__img" alt="bacgraund__photo" />
               <div className="content__info">
                    <img className="content__name" src="https://logodix.com/logo/1352830.png" alt="Mulan"/>
                    <span className="content__year">2020</span>
                    <span className="content__year">1 h 20 min</span>
                    <span className="content__year">12 +</span>
                    <span className="content__year">Action</span>
                    <p className="content__text">lorem fvmknb[eoknb[eonbibnmekbnoeonbjgwedm'gpm]]</p>
               </div>
          </div>
     )
}

export default Content

