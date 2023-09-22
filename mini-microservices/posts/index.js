const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(express.json())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.get('/posts/:id', (req, res) => {
  const post = posts[req.params.id]

  if (!post) {
    res.status(404).send('Not found')
  }

  res.send(post)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title
  }

  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log('Listening on 4000')
})
