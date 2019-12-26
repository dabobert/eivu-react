import React, { useContext } from 'react';
import { ActiveTabContext } from './App';

function Sidebar(props) {
  const [ activeTab, setActiveTab ] = useContext(ActiveTabContext);
  const itemComponents = props.items.map(label => <li key={label}><a href={void(0)} onClick={handleAnchorClick} data-label={label} className={props.itemAnchorClassName}>{label}</a></li>)

  function handleAnchorClick(event) {
    event.preventDefault();
    setActiveTab(event.target.dataset.label);
  }

  return(
    <div id="sidebar">
      <ul className="nav list-group">
        {itemComponents}
      </ul>
    </div>
  )
}

export default Sidebar;