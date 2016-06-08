const express = require('express')
const path = require('path');
const posts = require('./posts');

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

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express running at localhost: ' + PORT)
})
