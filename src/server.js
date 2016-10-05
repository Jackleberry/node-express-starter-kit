import express from 'express';

const port = 3002;
const app = express();

app.get('*', (req, res) => {
  res.send("Hello World");
});

app.listen(port, (error) => {
  if (error) {
      console.log(error);
  } else {
    console.log(`Running api on http://localhost:${port}`);
  }
});
