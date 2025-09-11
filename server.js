const express = require('express');
const helmet = require('helmet');
const http = require('http');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/hello',(req, res, next) => {  // middleware 1
  console.log('Middleware for /hello route');
  next();
});
app.use('/about',(req, res, next) => {  // middleware 1
  console.log('Middleware for /about route');
  next();
});
app.use('/', (req, res, next) => {  // middleware 2
  console.log('Middleware for main route');
  next();
});

app.use((req, res, next) => {  // middleware 3
  console.log('Middleware for all routes');
  next();
});


app.get('/', (req, res) => {  // route handler
  res.send('Welcome to the main route!');
});
app.get('/hello', (req, res) => {  // route handler
  res.send('Hello World!');
});
app.get('/about', (req, res) => {  // route handler
  res.send('About Us');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
