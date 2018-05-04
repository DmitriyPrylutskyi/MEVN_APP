const express = require('express')
const config = require('./config/config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes/posts')
const app = express()

mongoose.Promise = global.Promise

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
	.once('open', () => {
		console.log(`Mongoose - successful connection ...`)
		app.listen(process.env.PORT || config.port,
			() => console.log(`Server start on port ${config.port} ...`))
	})
	.on('error', error => console.warn(error))

app.get('/posts', (req, res) => {
	res.send(
		[{
			title: "Hello World!",
			description: "Hi there! How are you?"
		}]
	)
})