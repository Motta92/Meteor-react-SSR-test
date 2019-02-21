import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withTracker } from 'meteor/react-meteor-data';

import { Blogs } from '../api/blogs/blogs.js';
import Blog from './Blog.js';

// export default () => <h1>Its working!</h1>;

// App component - represents the whole app
class App extends Component {
  renderBlogs() {
    return this.props.blogs.map((blog) => (
      <Blog key={blog._id} blog={blog} />
    ));
  }

  // {this.renderBlogs()}
  render() {
    return (
      <div className="container">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Helmet blog list title</title>
            <link rel="canonical" href="http://google.com" />
        </Helmet>
        <header>
          <h1>Blog List</h1>
        </header>

        <ul>
          <li>test</li>
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    blogs: Blogs.find({}).fetch(),
  };
})(App);