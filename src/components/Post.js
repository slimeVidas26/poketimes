import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        id:null,
        path:null,
        url:null
    }

    componentDidMount(){
        console.log(this.props);
        const id = this.props.match.params.post_id;
        const path = this.props.match.path;
        const url = this.props.match.url;


        this.setState({
            id , path , url
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.id}</h3>
        <h3>{this.state.path}</h3>
        <h3>{this.state.url}</h3>
      </div>
    )
  }
}
