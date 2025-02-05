import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './asset/views');

// Morgan - Tool logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World2!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
