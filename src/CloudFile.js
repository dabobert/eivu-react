import React, { useState, useEffect, useContext } from 'react';
import { QueueContext } from './App'
import './tree.css';

function CloudFile(props) {

const [queue, setQueue] = useContext(QueueContext);

  return(
    <div>CloudFile:
      <span>{props.node.name}</span>
      <span><a href={ props.node.url }>(visit)</a></span>
      <span>(edit)</span>
      <span>{queue}</span>
    </div>
  )
}


export default CloudFile;