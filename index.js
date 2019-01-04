const app = require('express')();
const movieRouter = require('./routes/movies');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/movies', movieRouter);

app.listen(3000, 'localhost', () => {
  console.log('Listen on 3000 port');
});