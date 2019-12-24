import React, { useContext, Fragment} from 'react'
import { QueueContext } from './App'

function NowPlaying() {
  const [ queue, setQueue, queueIndex, setQueueIndex ] = useContext(QueueContext);
  const currentTrack = queue[queueIndex];

  function renderPair(key, value) {
    return(
      <Fragment key={key}>
        <dt>{key}</dt>
        <dd>{value}</dd>
      </Fragment>
    )
  }

  return(
    <dl className="dl-horizontal">
      {  
        Object.keys(currentTrack).map(key => {
          const value = currentTrack[key];
          if (value === null)
            return <Fragment key={key}/>

          switch(Object.getPrototypeOf(value).constructor.name) {
            case "Object":
              // return renderPair(key, value.name);
              return renderPair(key, "Object");
            case "Array":
              // return renderPair(key, value.map(item => item.name));
              return renderPair(key, "Array");
            default:
              return renderPair(key, value);
          }
          // <Fragment key={key}>
          //   <dt>{key}</dt>
          //   <dd>{Array.isArray(currentTrack[key]) ? currentTrack[key].map(hash => hash.name) : currentTrack[key]}</dd>
          // </Fragment>
        }) }
    </dl>
  )

}
export default NowPlaying;