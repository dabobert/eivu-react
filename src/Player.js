import React, { useContext, useState, useEffect, useRef } from 'react';
import { QueueContext } from './App'
import './Player.scss';
import PropTypes from "prop-types";


function Player(props) {
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

  // function currentTrackSource() {
  //   if(queue[queueIndex])
  //     return queue[queueIndex].url;
  //   else
  //     return "http://eivu.s3.amazonaws.com/welcome.mp3"
  // }

  return (
  // <div>
  //   <div className="container">

  //     <div className="row">
  //       <div className="col-xs-4"><i class="fas fa-step-backward"></i></div>
  //       <div className="col-xs-4"><i class="far fa-play-circle"></i>{ queue[queueIndex].name || queue[queueIndex].asset }</div>
  //       <div className="col-xs-4"><i class="fas fa-step-forward"></i></div>
  //     </div>
  //   </div>

  //   <audio id='player' ref={mediaNode} onEnded={handleEnd} controls preload="auto">
  //     <source src={queue[queueIndex].url} type="audio/mpeg" />
  //   </audio>
  // </div>
    <audio id='player' ref={mediaNode} onEnded={handleEnd} controls preload="auto">
      <source src={queue[queueIndex].url} type="audio/mpeg" />
    </audio>


  )
  
}



      // this.player.on('play', () => this.$store.commit("setPlayState", true));
      // this.player.on('pause', () => this.$store.commit("setPlayState", false));
      // this.player.on('ended', () => {
      //   var nextTrackObject = this.$store.getters.nextAutoTrackObject;
      //   // when currentTrackObject is the same as nextTrackObject clear it out
      //   if (!nextTrackObject)
      //     this.$store.commit("clearCurrentTrackObject");
      //   else // otherwise play the next found track
      //     nextTrackObject && this.$store.commit("playCloudFile", nextTrackObject)
      // })
      // this.$store.commit("setPlyr", this.$refs.plyr);


{/*

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  // source: PropTypes.func,
  // destroy: PropTypes.func
}
*/}
export default Player;