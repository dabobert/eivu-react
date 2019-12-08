import React, { useState, useEffect, useContext } from 'react';
import { QueueContext } from './App'
import './tree.css';

function CloudFile(props) {

const [queue, setQueue] = useContext(QueueContext);
  const file = props.node
  return(
    <div>
      <div>queue: {queue}</div>
      <div className="row">
        <div className="col-xs-1">{ file.release_pos && file.release_pos.toString().padStart(2,0) }</div>
        <div className="col-xs-4">{ file.name }</div>
        <div className="col-xs-7">
          <a href="javascript:void(0)">
            <i className="fas fa-play"></i>
          </a>
{/*          <span v-if="isPlaying">
            <a href="javascript:void(0)">
              <i className="fas fa-pause" @click="play"></i>
            </a>
          </span>
          <span v-else>
            <a href="javascript:void(0)">
              <i className="fas fa-play" @click="play"></i>
            </a>
          </span>
          <i className="fas fa-plus"></i>
          <a v-bind:href="file.url" target="_blank">
            <i className="fas fa-external-link-alt"></i>
          </a>*/}
        </div>
      </div>
    </div>
  )
}


export default CloudFile;