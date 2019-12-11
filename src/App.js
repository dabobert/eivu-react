import React, { createContext, useState, useEffect} from 'react';
import logo from './logo.svg';
import TreeRoot from './TreeRoot';
import './App.scss';
import API from './API';
import PlyrComponent from './PlyrComponent'

const QueueContext = createContext()

function App() {
  const [ queue, setQueue ] = useState(['ballrom'])

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



  // mounted() {
  //   this.player = this.$refs.plyr.player;
  //   window.player = this.player;
  //   this.player.on('play', () => this.$store.commit("setPlayState", true));
  //   this.player.on('pause', () => this.$store.commit("setPlayState", false));
  //   this.player.on('ended', () => {
  //     var nextTrackObject = this.$store.getters.nextAutoTrackObject;
  //     // when currentTrackObject is the same as nextTrackObject clear it out
  //     if (!nextTrackObject)
  //       this.$store.commit("clearCurrentTrackObject");
  //     else // otherwise play the next found track
  //       nextTrackObject && this.$store.commit("playCloudFile", nextTrackObject)
  //   })
  //   this.$store.commit("setPlyr", this.$refs.plyr);
  // }

export default App;
export { QueueContext };
