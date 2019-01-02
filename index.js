const express = require('express')
const app = express()
app.get('/', (req, res) => {
	console.log('get');
  res.send('HEY3!')
})
app.listen(3000, () => console.log('Server running on port 3000'))
