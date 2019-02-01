import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Posts from './components/Posts'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import {BrowserRouter , Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar />
       <Route exact path = "/" component = {Home}/>
       <Route path = "/about" component = {About}/>
       <Route exact path = "/posts/:post_id" component = {Post}/>
       <Route exact path = "/posts" component = {Posts}/>
       <Route path = "/contact" component = {Contact}/>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
