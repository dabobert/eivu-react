import React, { createContext, useState, useEffect} from 'react';
import logo from './logo.svg';
import TreeRoot from './TreeRoot';
import './App.scss';
import Plyr from 'plyr';
import API from './API';
import PlyrComponent from './PlyrComponent'

const QueueContext = createContext()

function App() {
  const [ queue, setQueue ] = useState(['ballrom'])
  // state.plyr.player.source = {
  //   type: 'audio',
  //   title: state.current_track.name,
  //   sources: [
  //     {
  //       src: state.current_track.url,
  //       type: 'audio/mp3',
  //     },
  //   ],
  // };  

  // useEffect(() => {
  //   debugger
  //   const player = new Plyr('#plyr_wrapper');
  // },[])




  const source = {
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


  return (
    <QueueContext.Provider value={[queue, setQueue]}>
      <ul>
        <TreeRoot />
      </ul>
      <div id="plyr_wrapper" className="audio"> 
        <div id="plyr_buffer"></div>
        <div id="plyr_container">
          <PlyrComponent />
        </div>
      </div>
    </QueueContext.Provider>
  );
}


export default App;
export { QueueContext };
