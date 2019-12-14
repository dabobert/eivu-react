import React, { useEffect, useContext,useState } from 'react';
// import Plyr from 'plyr'; 
import { QueueContext } from './App'
// import 'plyr/dist/plyr.css';
import './Player.scss';
import PropTypes from "prop-types";


function Player(props) {
  const [ queueIndex, setQueueIndex ] = useState(0)
  const [ queue, setQueue ] = useContext(QueueContext);
  const [ trackSource, setTrackSource ] = useState(queue[queueIndex].src)

  // useEffect(() => {
  //   alert(currentTrackSource())
  // },[])

  function handleEnd(event) {
    setQueueIndex((prevQueueIndex) => {
      if(prevQueueIndex == queue.length - 1)
        return 0
      else
        return prevQueueIndex + 1
    })




    setTrackSource(queue[queueIndex].src);
    event.target.load();

    if(queueIndex > 0)
      event.target.play();


console.log("index: " + queueIndex)
console.log("queue: " + queue)
console.log("trackSource: " + trackSource)

  }

  function currentTrackSource() {
    if(queue[queueIndex])
      return queue[queueIndex].src;
    else
      return "http://eivu.s3.amazonaws.com/welcome.mp3"
  }

  return (
    <audio id='player' onEnded={handleEnd} controls preload="auto">
      <source src={trackSource} type="audio/mpeg" />
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