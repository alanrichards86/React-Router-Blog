import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import PostList from './PostList';

export default class ShowPost extends Component {
  constructor(props){
    super(props);

    this.state={
      blogData:[]
    }
  }

  render() {
    let theState = this.state.blogData;
    console.log('SHOWPOST WORKS');
    console.log(this.props);

    return(
      <div>
        <p>ShowPost</p>

      </div>
    )
  }

  ComponentDidMount() {
    let {id} = this.props.match.params;
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
    .then( results => {
    return results.json()
  }).then(data => {
    console.log('DATA HERE', data);
    this.setState({blogData: data})
    console.log(this.state.blogData);
  })

  }
}
