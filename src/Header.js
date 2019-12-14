import React from 'react';

function Header() {
  return(
    <div id="header" class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <i class="icon-reorder"></i>
        </button>
        <a class="navbar-brand" href="/">EIVU</a>
      </div>
      <nav class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a href="javascript:void(0)">Music</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Navbar Item 2<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#">Navbar Item2 - Sub Item 1</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Navbar Item 3</a>
          </li>
        </ul>
        <ul class="nav navbar-nav pull-right">
          <li><a href="/users/sign_up">Sign Up</a></li>
          <li><a href="/users/sign_in">Log In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;