<<<<<<< HEAD
import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'
import Comment from './Comment.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />
            <Comment />
              <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}

export default App;
=======
import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'
import Comment from './Comment.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />
            <Comment />
              <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}

export default App;
>>>>>>> 9d3c2971b63b57b8e21eb0578e7afd8070389bb0
