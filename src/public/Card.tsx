import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import pic1 from './pic1.jpg'

function Card() {
  return (

       <div className="game">
           <div className="rank">3</div>
           <div className="front">
              <img className="thumbnail" src={pic1} alt="gamecover"/>
              <h3 className="name">
                  Game name
              </h3>
              <div className="stats">
                  <p className="viewers">864.9k</p>
                 <div className="streamers">
                     <img src={logo} alt=""/>
                     <img src={logo} alt=""/>
                     <img src={logo} alt=""/>
                 </div>
              </div>
           </div>
           <div className="back">
                <div className="streaming-info">
                    <p className="game-stat">55k<span>watching</span></p>
                    <p className="game-stat">55k<span>Streams</span></p>
                </div>
   
           <button className="btn">See more streams</button>
           <div className="streamers">
               <div className="streamer">
                   <div className="icon"><img src={logo} alt=""/></div>
                   <p className="name">Gamer1</p>
                   <p className="number">35k</p>
               </div>
               <div className="streamer">
                   <div className="icon"><img src={logo} alt=""/></div>
                   <p className="name">Gamer2</p>
                   <p className="number">39k</p>
               </div>
               <div className="streamer">
                   <div className="icon"><img src={logo} alt=""/></div>
                   <p className="name">Gamer3</p>
                   <p className="number">34k</p>
               </div>
           </div>
           </div>
           <div className="background">

           </div>
       </div>

  );
}

export default Card;
