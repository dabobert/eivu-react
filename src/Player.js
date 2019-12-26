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


  function handleEnd(event) { increment() }

  function increment() {
    //update numPlays for track
    setQueueIndex((prevQueueIndex) => {
      if(prevQueueIndex + 1 == queue.length) {
        return 0
      }
      else
        return prevQueueIndex + 1
    })
  }

  function decrement() {
    //update numPlays for track
    setQueueIndex((prevQueueIndex) => {
      if(prevQueueIndex - 1 < 0) {
        return 0
      }
      else
        return prevQueueIndex - 1
    })
  }

  return (
    <div>
      <div className="container controls">
        <div className="row">
          <div className="col-xs-1">
            <a href={void(0)} onClick={decrement}>
              <i className="fas fa-step-backward" />
            </a>
          </div>
          <div className="col-xs-10">
{/*            <span id="playButton">
              <i className="fas fa-play-circle"></i>
            </span>*/}
            <span>
              { queue[queueIndex].asset || queue[queueIndex].name }
            </span>
          </div>
          <div className="col-xs-1">
            <a href={void(0)} onClick={increment}>
              <i className="fas fa-step-forward" />
            </a>
          </div>
        </div>
      </div>

{/*     <audio id='player' ref={mediaNode} onEnded={handleEnd} controls preload="auto">
       <source src={queue[queueIndex].url} type="audio/mpeg" />
     </audio>*/}

      <video id='player' ref={mediaNode} onEnded={handleEnd} controls preload="auto">
        <source src={queue[queueIndex].url} type={queue[queueIndex].contentType}/>
      </video>
    </div>
  )
}

export default Player;