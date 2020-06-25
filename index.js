const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose=require('mongoose');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));



mongoose.connect(
  'mongodb+srv://zajelsecurity:777151565@realmcluster-taahg.mongodb.net/test?retryWrites=true&w=majority'
,{
  dbName:'zajeldb',
  user:'zajelsecurity',
  pass:'777151565',
  useNewUrlParser:true,
  useUnifiedTopology:true}
)
.then(()=>{
  console.log('connected ....')
});
