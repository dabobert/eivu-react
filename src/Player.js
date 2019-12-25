import React, { useContext, useState, useEffect, useRef } from 'react';
import { QueueContext } from './App'
import './Player.scss';


function Player() {
  const [ queue, setQueue, queueIndex, setQueueIndex ] = useContext(QueueContext);
  const mediaNode = useRef(null);

  useEffect(() => {
    mediaNode.current.load();

    if(queueIndex > 0)
      mediaNode.current.play();
  },[queueIndex])


  function handleEnd(event) {
    //update numPlays for track
    setQueueIndex((prevQueueIndex) => {
      if(prevQueueIndex + 1 == queue.length) {
        return 0
      }
      else
        return prevQueueIndex + 1
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-1"><i class="fas fa-step-backward" /></div>
          <div className="col-xs-10">{ queue[queueIndex].asset || queue[queueIndex].name }</div>
          <div className="col-xs-1"><i class="fas fa-step-forward" /></div>
        </div>
      </div>

{/*     <audio id='player' ref={mediaNode} onEnded={handleEnd} controls preload="auto">
       <source src={queue[queueIndex].url} type="audio/mpeg" />
     </audio>*/}

      <video id='player' ref={mediaNode} controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>

  )
}

export default Player;