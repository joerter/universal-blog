const express = require('express')
const path = require('path')
const posts = require('./posts')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './components/routes'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/post/:id?', (req, res) => {
  const id = req.params.id
  if (!id) {
    res.json(posts)
  } else {
    const post = posts.find(p => p.id == id);
    if (post)
      res.json(post)
    else
      res.status(404).send('Not Found')
  }
})

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Universal Blog</title>
  </head>
  <body>
    <div id="app">${appHtml}</div> 
    <script src="/bundle.js"></script>
  </body>
  </html>
  `
}

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express running at localhost: ' + PORT)
})
