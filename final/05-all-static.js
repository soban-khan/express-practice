const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('./public'))


// this can be done by adding to static asset
// second way can be server side rendering tempelate
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).res.send('<h1>Resource not found</h1>')
})


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})