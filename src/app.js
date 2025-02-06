import express from 'express'; // (express is a library.)
import morgan from 'morgan'; // tool logger is a library.
import { engine } from 'express-handlebars'; // template engine for writing HTML easily. ( express-handlebars is a library.)

// define __dirname ( current URL )
import path from 'path'; // from nodejs ( not a library )
import { fileURLToPath } from 'url'; // from nodejs ( not a library )
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// define express app
const app = express();
const port = 3000;

// Use template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'assets/views'));

// Use Morgan - Tool logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
