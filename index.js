
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index')) 
  .get('/scores.json', (req,res) => res.send('[]'))
  .post('/submit', (req,res) => {
	res.header("Acess-Control-Allow-Origin", "*");
	res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With,  Content, Accept");
	next();
	res.send('[]');
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
