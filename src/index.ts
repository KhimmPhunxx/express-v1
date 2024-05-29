import express from 'express';
const app = express();

const myLogger = function (req, res, next) {
  console.log('METHOD:', req.method)
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'product 1'
    },
    {
      id: 2,
      name: 'product 2'

    }
  ]
  res.json(products)
})

app.post('/api/products', (req, res) => {
  res.send("POST Request to Server")
})

app.listen(3000, () => {
  console.log(` Server is running at http://localhost:3000`)
})