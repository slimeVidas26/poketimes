import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Posts extends Component {
   state = {
       posts:[ ]
   }
 
   componentDidMount(){
    //    axios.get('https://jsonplaceholder.typicode.com/posts')
    //    .then(res => {
    //        this.setState({
    //            posts:res.data.slice(0,10)
    //        })
    //    }).catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })

   axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((res)=> {
    // handle success
    this.setState({posts:res.data.slice(0,10)})
    console.log(res);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

    }

  render() {
      const { posts} = this.state;
      console.log(posts)
      const postsList = !posts.lenght ? (
          posts.map(post=>{
           return(
               <div className = "post card" key={post.id}>
                   <div className="card-content">
                   <Link to = {'/posts/'+post.id}>
                    <span className="card-title">
                         {post.title}
                           </span></Link>
                       {/* <p>{post.body}</p> */}
                       
                   </div>
               </div>
           )
       })
       ):(
       <div className = "center">No posts here !</div>
       )
      return (
      <div className = "container">
          <h4 className="center">Posts</h4>
        {postsList}
      </div>
    )
  }
}
