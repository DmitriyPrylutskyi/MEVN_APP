const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/posts')

router.post('/posts', Controllers.saveNewPost)

router.get('/posts', Controllers.getAllPosts)

router.get('/posts/:id', Controllers.getPost)

router.put('/posts/:id', Controllers.updatePost)

router.delete('/posts/:id', Controllers.deletePost)

module.exports = router