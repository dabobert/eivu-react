import React, { useContext, Fragment} from 'react'
import { QueueContext } from './App'

function NowPlaying() {
  const [ queue, setQueue, queueIndex, setQueueIndex ] = useContext(QueueContext);
  const currentTrack = queue[queueIndex];
  return(
    <dl className="dl-horizontal">
      {  
        Object.keys(currentTrack).map(key => 
          <Fragment>
            <dt>{key}</dt>
            <dd>{currentTrack[key]}</dd>
          </Fragment>
        ) }
    </dl>
  )

}
export default NowPlaying;