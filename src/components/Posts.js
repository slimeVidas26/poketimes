import React, { Component } from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import pokeball from "../pokeball.png"
import {connect} from 'react-redux'

 class Posts extends Component {
  //  state = {
  //      posts:[ ]
  //  }
 
   //componentDidMount(){
    //    axios.get('https://jsonplaceholder.typicode.com/posts')
    //    .then(res => {
    //        this.setState({
    //            posts:res.data.slice(0,10)
    //        })
    //    }).catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })

  //  axios.get('https://jsonplaceholder.typicode.com/posts')
  // .then((res)=> {
  //   // handle success
  //   this.setState({posts:res.data.slice(0,10)})
  //   console.log(res);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // });

    //}

  render() {
    console.log(this.props)
      const { posts} = this.props;
      console.log(posts)
      const postsList = !posts.lenght ? (
          posts.map(post=>{
           return(
               <div className = "post card" key={post.id}>
                   <div className="card-content">
                       <img src={pokeball} alt=""/>
                   <Link to = {'/posts/'+post.id}>
                    <span className="card-title red-text">
                         {post.title}
                           </span></Link>
                        <p>{post.body}</p>
                       
                   </div>
               </div>
           )
       })
       ):(
       <div className = "center">No posts here !</div>
       )
      return (
      <div className = "container ">
          <h4 className="center">Posts</h4>
        {postsList}
      </div>
    )
  }
}

const  mapStateToProps = (state)=>{
   return {
     posts:state.posts
   }

}

// function connect(mapStateToProps, mapDispatchToProps, mergeProps, options)

export default connect(mapStateToProps)(Posts);
