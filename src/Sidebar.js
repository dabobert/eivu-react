import React, { useContext } from 'react';
import { ActiveTabContext } from './App';

function Sidebar(props) {
  const [ activeTab, setActiveTab ] = useContext(ActiveTabContext);
  const itemComponents = props.items.map(label => <li><a onClick={handleAnchorClick} data-label={label} className={props.itemAnchorClassName}>{label}</a></li>)

  function handleAnchorClick(event) {
    event.preventDefault();
    setActiveTab(event.target.dataset.label)
  }

  return(
    <div id="sidebar">
      <ul class="nav list-group">
        {itemComponents}
      </ul>
    </div>
  )
}

export default Sidebar;