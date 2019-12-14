import React from 'react';

function Header() {
  return(
    <div id="header" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <i className="icon-reorder"></i>
        </button>
        <a className="navbar-brand" href="/">EIVU</a>
      </div>
      <nav className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="/music">Music</a>
          </li>
          <li className="dropdown">
            <a href="/nav" className="dropdown-toggle" data-toggle="dropdown">Navbar Item 2<b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="/nav">Navbar Item2 - Sub Item 1</a></li>
            </ul>
          </li>
          <li>
            <a href="/nav">Navbar Item 3</a>
          </li>
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li><a href="/users/sign_up">Sign Up</a></li>
          <li><a href="/users/sign_in">Log In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;