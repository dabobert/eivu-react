import React, { useContext, useEffect } from 'react';
import { QueueContext } from './App'

function Queue(props) {
  const [queue, setQueue] = useContext(QueueContext);

  function displayRow(row, index) {
    return(
      <div key={`queueItem-${index}-${row.id}`}>
        <div className="row">
          <div className="col-xs-1">{ index + 1}</div>
          <div className="col-xs-3">{ row['name'] || row.asset }</div>
          <div className="col-xs-3"> artist</div>
          <div className="col-xs-3">{ row.release && row.release.name }</div>
          {/*<div className="col-xs-2">{ row.year }</div>*/}
        </div>
      </div>
    )
  }



  // useEffect(() => {

  // },[q])
  // const childComponents = data.getFolderFromId.map( node => <TreeNode key={node.domUuid} node={node} />);
  // const items = queue.map((item, index) => <QueueItem index={index} props={props} />)
  return(

queue.map((item, index) => displayRow(item, index))

  )
}

export default Queue;