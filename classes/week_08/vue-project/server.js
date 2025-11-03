// we are using the modules to import instead of require()
import express from 'express'

const app = express()

// instead of exposing the public folder, we are exposing the ./dist/ folder
app.use(express.static('dist'))

app.listen(5001, ()=>{
    console.log('app is running at http://127.0.0.1:5001')
})