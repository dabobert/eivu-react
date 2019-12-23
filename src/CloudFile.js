import React, { useState, useEffect, useContext } from 'react';
import { QueueContext } from './App'
import './tree.css';

function CloudFile(props) {

  const [queue, setQueue] = useContext(QueueContext);
  const file = props.node


  function currentFile() {
    return props.node
  }

  function handleClickPlay(event) {
    setQueue([
      currentFile()
    ]);
    event.preventDefault();
  }

  function handleClickAdd(event) {
    setQueue((prevQueue) =>
      [
        ...prevQueue,
        currentFile()
      ]
    );
    event.preventDefault();
  }

  return(
    <div className="cloud_file">
      <div className="row">
        <div className="col-xs-1">{ file.releasePos && file.releasePos.toString().padStart(2,0) }</div>
        <div className="col-xs-4">{ file.name }</div>
        <div className="col-xs-7 controls">
          <a onClick={handleClickPlay}>
            <i className="fas fa-play"></i>
          </a>
{/*          <span v-if="isPlaying">
            <a>
              <i className="fas fa-pause" @click="play"></i>
            </a>
          </span>
          <span v-else>
            <a>
              <i className="fas fa-play" @click="play"></i>
            </a>
          </span>*/}
          <a onClick={handleClickAdd}>
            <i className="fas fa-plus"></i>
          </a>
          <a href={file.url} target="_blank">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  )
}


export default CloudFile;