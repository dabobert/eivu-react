import React from 'react';

function Sidebar(props) {
  const itemComponents = props.items.map(label => <li><a className={props.itemAnchorClassName}>{label}</a></li>)
  return(
    <div id="sidebar">
      <ul class="nav list-group">
        {itemComponents}
      </ul>
    </div>
  )
}

export default Sidebar;