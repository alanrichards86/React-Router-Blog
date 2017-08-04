import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/BaseLayout.css';

export default class BaseLayout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className='mainDiv'>

        <div className='navDiv navbar navbar-light bg-faded'>

          <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>

            <ul className="nav justify-content-center">

              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" exact to='/'>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" to='/create'>Create Post</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeStyle={{color: 'purple'}} className="nav-link active" to='/showPost'>PostList</NavLink>
              </li>

            </ul>

          </nav>

        </div>

        {this.props.children}

      </div>
    )
  }
}
