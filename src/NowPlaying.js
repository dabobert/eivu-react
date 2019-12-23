import React, { useContext, Fragment} from 'react'
import { QueueContext } from './App'

function NowPlaying() {
  const [queue, setQueue] = useContext(QueueContext);

  const props = queue[1]
  return(
    <dl class="dl-horizontal">
      {  
        Object.keys(props).map(key => 
          <Fragment>
          <dt>{key}</dt>
          <dd>{props[key]}</dd>
          </Fragment>
        ) }
    </dl>
  )

}
export default NowPlaying;