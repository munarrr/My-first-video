import React from "react";
import VideoPlayer from 'react-video-js-player';
import bg from "../../components/bg.jpg";
import video from '../../video.mp4'
import "./style.scss";

const Content = () => {
 const videoSrc = video;
 const poster = bg;
  
  return (
    <div className="content">
      <img src={bg} className="content__img" alt="bacgraund__photo" />
      <div className="content__info">
        <img
          className="content__name"
          src="https://logodix.com/logo/1352830.png"
          alt="Mulan"
        />
        <div className="content__flag">
          <span className="content__year">2020</span>
          <span className="content__year">1 h 20 min</span>
          <span className="content__year">12 +</span>
          <span className="content__year">Action</span>
          <p className="content__text">
            Это история о бесстрашной молодой девушке, которая выдаёт себя за
            мужчину, чтобы вступить в ряды армии, противостоящей Северным
            захватчикам, надвигающимся на Китай. Старшая дочь храброго воина
            Хуа, Мулан – энергичная и решительная девушка. Когда Император
            издаёт указ о том, что один мужчина из каждой семьи должен вступить
            в ряды Имперской армии, Мулан занимает место своего больного отца,
            еще не зная о том, что ей предстоит прославиться как один из самых
            величайших воинов в истории Китая.
          </p>
        </div>
      </div>
      <div className="content__btn">
      <button className="content__play">
      <i className="content__fa fa fa-play" aria-hidden="true"></i>Play</button>
      <button className="content__plylist">           
      <i className="fa fa-plus" aria-hidden="true"></i>
      My playlist</button>
      </div>
      <div className="content__kino">
      <a onClick={e => alert(e.target)} href="#" className="content__treiler">
      <i className="fa fa-play-circle" aria-hidden="true"></i>
      WATCH TREILER
      </a>
      </div>
      <div  className="video" >
      console.log(onClick)
      <Player>
      <source src={video} href="#" />
    </Player>
    </div>
    </div>
  );
}

export default Content;
