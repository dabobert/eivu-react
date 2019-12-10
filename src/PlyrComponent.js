import React, { useEffect } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'

function PlyrComponent(props) {
  useEffect(() => {
    const player = new Plyr('.bar', props.options)
    player.source = props.source

  },[])
  // componentDidMount() {
  //   this.player = new Plyr('.js-plyr', this.props.options)
    
  // }


  return (
    <audio className='bar'>
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