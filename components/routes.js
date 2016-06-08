import React from 'react'
import { Route } from 'react-router'
import App from './App'
import Post from './Post'

module.exports = (
  <Route path="/" component={App}>
    <Route path="/:postId/:postName" component={Post} />
  </Route>
)
