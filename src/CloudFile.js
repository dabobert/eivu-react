import React, { useState, useEffect } from 'react';


function CloudFile(props) {


  return(
    <div>CloudFile:
      <span>{props.node.name}</span>
      <span><a href={ props.node.url }>(visit)</a></span>
      <span>(edit)</span>
    </div>
  )
}


export default CloudFile;