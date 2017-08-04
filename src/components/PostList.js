import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ShowPost from './ShowPost';


export default class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }
  componentWillMount(){
    // const { id } = this.props.match.params;
    // console.log(id);
    // const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    // console.log('Fetch Working');
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({data: data});
      });
  }
  render() {

    let data = this.state.data.map((item) => {
      console.log(item);
      return (
        <div>
          <Link to={`/showPost/${item._id}`}>{item.name}</Link>

          <br/>
        </div>
      );
    });

    return(
      <div>
        <p>PostList</p>


        {data}
      </div>
    )
  }
}
