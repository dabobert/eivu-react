import React, { useContext, useEffect } from 'react';
import { QueueContext } from './App'

function Queue(props) {
  const [queue, setQueue] = useContext(QueueContext);

  function displayRow(row, index) {
    return(
      <tr key={`queueItem-${index}-${row.id}`}>
        <td>{ index + 1}</td>
        <td>{ row['name'] || row.asset }</td>
        <td>{ row.artists && row.artists.map((artist, index) => artist.name).join(" & ") }</td>
        <td>{ row.release && row.release.name }</td>
        <td>{ row.year }</td>
      </tr>
    )
  }



  // useEffect(() => {

  // },[q])
  // const childComponents = data.getFolderFromId.map( node => <TreeNode key={node.domUuid} node={node} />);
  // const items = queue.map((item, index) => <QueueItem index={index} props={props} />)
  return(
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Artist(s)</th>
          <th>Release</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
        { queue.map((item, index) => displayRow(item, index)) }
      </tbody>
    </table>
  )
}

export default Queue;