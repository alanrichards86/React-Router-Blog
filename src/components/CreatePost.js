import React, { Component } from 'react';
import '../styles/CreatePost.css';

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    // I will use the index of to sort through the state. Thats what im going to try
    this.state={
      nameValue:'',
      nameValuePerm:[],
      titleValue:'',
      blogValue: ''
    }
    this.handleName = this.handleName.bind(this);
  }


  handleName(event){
    this.setState({nameValue: event.target.value})
    console.log(this.state.nameValue);
  }
  // handleSubmit =(event) => {
  //   this.setState=({nameValuePerm: event.target.value})
  //   console.log(this.state.nameValuePerm);
  // }

   blogIt = (e) => {
     e.preventDefault();
     let blogTime = JSON.stringify(this.state);

     fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
       method: 'POST',
       body: blogTime,
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({nameValue: ''})
   }


  render() {
    return(
      <div className='mainDiv'>

        <p className='p1'>CreatePost</p>

        <form className='mainForm'>
          <label>Who is Posting </label>
          <input type='text' className='input1' onChange={this.handleName} value={this.state.nameValue} placeholder='...'/>
          <br/>
          <label>Title Of Post</label>
          <input type='text' className='input2' placeholder='...'/>
          <br/>
          <label>What would you like to say ???</label>
          <textarea className='textArea' rows="5" cols="40"/>
          <br/>
          <button type='submit' onClick={this.blogIt} className='btn1'>Post It !</button>
        </form>

      </div>
    )
  }
}
