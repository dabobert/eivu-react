import React, { useEffect } from 'react';
import Plyr from 'plyr';
// import 'plyr/dist/plyr.css'

function PlyrComponent(props) {

  useEffect(() => {
    const player = new Plyr('.js-plyr', props.options)
    player.source = {
    type: 'audio',
    title: 'Example title',
    sources: [
      {
        src: 'http://eivutest.s3.amazonaws.com/audio/1B/3E/DA/C0/02/10/42/FE/9F/C2/90/58/D6/D9/7C/BB/14_-_Something_About_Us__Love_Theme_From_Interstella_5555_.mp3',
        type: 'audio/mp3',
        size: 720,
      },
      {
        src: 'http://eivutest.s3.amazonaws.com/audio/FD/DA/6E/1C/40/50/19/D7/69/1F/94/92/4D/E0/E2/12/01_-_Born_To_Die.mp3',
        type: 'audio/mp3',
        size: 1080,
      },
    ]
  }


  },[])
  // componentDidMount() {
  //   this.player = new Plyr('.js-plyr', this.props.options)
    
  // }


  return (
    <audio className='js-plyr plyr'>
    </audio>
  )
  
}

// PlyrComponent.defaultProps = {
//   options: {
//     controls: [
//       'rewind',
//       'play',
//       'fast-forward',
//       'progress',
//       'current-time',
//       'duration',
//       'mute',
//       'volume',
//       'settings',
//       'fullscreen',
//     ],
//     i18n: {
//       restart: 'Restart',
//       rewind: 'Rewind {seektime}s',
//       play: 'Play',
//       pause: 'Pause',
//       fastForward: 'Forward {seektime}s',
//       seek: 'Seek',
//       seekLabel: '{currentTime} of {duration}',
//       played: 'Played',
//       buffered: 'Buffered',
//       currentTime: 'Current time',
//       duration: 'Duration',
//       volume: 'Volume',
//       mute: 'Mute',
//       unmute: 'Unmute',
//       enableCaptions: 'Enable captions',
//       disableCaptions: 'Disable captions',
//       download: 'Download',
//       enterFullscreen: 'Enter fullscreen',
//       exitFullscreen: 'Exit fullscreen',
//       frameTitle: 'Player for {title}',
//       captions: 'Captions',
//       settings: 'Settings',
//       menuBack: 'Go back to previous menu',
//       speed: 'Speed',
//       normal: 'Normal',
//       quality: 'Quality',
//       loop: 'Loop',
//     },
//   },
//   sources: {
//     type: 'video',
//     sources: [
//       {
//         src: '/path/to/movie.mp4',
//         type: 'video/mp4',
//         size: 720,
//       },
//       {
//         src: '/path/to/movie.webm',
//         type: 'video/webm',
//         size: 1080,
//       },
//     ],
//   }
// }

// PlyrComponent.propTypes = {
//   options: PropTypes.object,
//   sources: PropTypes.object,
//   source: PropTypes.func,
//   destroy: PropTypes.func
// }

export default PlyrComponent