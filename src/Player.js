import React, { useEffect, useContext,useState } from 'react';
// import Plyr from 'plyr'; 
import { QueueContext } from './App'
// import 'plyr/dist/plyr.css';
import './Player.scss';
import PropTypes from "prop-types"

function Player(props) {
  const [ queueIndex, setQueueIndex ] = useState(0)
  const [ queue, setQueue ] = useContext(QueueContext);

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

    if(queueIndex > 0)
      event.target.play()
  }

  function currentTrackSource() {
    if(queue[queueIndex])
      return queue[queueIndex]['src'];
    else
      return "http://eivu.s3.amazonaws.com/welcome.mp3"
  }

  return (
    <audio id='player' onEnded={handleEnd} controls>
      <source src={'http://eivu.s3.amazonaws.com/welcome.mp3'} type="audio/mpeg" />
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
PlyrComponent.defaultProps = {
  options: {
    autoplay: true,
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
  },
  source: {
    type: 'audio',
    title: 'Example title',
    sources: [
      {
        src: 'http://eivu.s3.amazonaws.com/welcome.mp3',
        type: 'audio/mp3',
        // size: 720,
      },
      {
        src: 'http://eivutest.s3.amazonaws.com/audio/FD/DA/6E/1C/40/50/19/D7/69/1F/94/92/4D/E0/E2/12/01_-_Born_To_Die.mp3',
        type: 'audio/mp3',
        // size: 1080,
      },
    ]
  }


}



PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  // source: PropTypes.func,
  // destroy: PropTypes.func
}
*/}
export default Player;