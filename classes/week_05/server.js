// import express library
// 1. we always import libraries first
const express = require('express')

// 2. initialize the libraries
const app = express()

// 3. middleware
// stuff that happens between initialization and app listen
app.use(express.static('assets'))

// 3a. global variables for server storage
let allNotes = []
let postNum = 0

// 4. routing
// this determines what responses the server gives based on what requests come in
app.get('/', (request, response)=>{
    response.send('server is working')
})

// allows us to mask html files with a route instead
app.get('/guestbook', (req, res)=>{
    res.sendFile('assets/guestbook.html', {root: __dirname })
})

app.get('/submit', (req, res)=>{
    console.log(req.query)

    // local variables
    let user = req.query.guest  // grabs the guest from the form data name="guest"
    let message = req.query.note    // grabs the note from the form data name="note"
    let time = Date(Date.now()).toLocaleString()    // creates a new date string at the now time

    console.log(time)   // prints time to make sure date was made correctly

    // creates a new object, storing all of the new variable data inside of properties
    const messageData = {
        username: user,
        message: message,
        date: time,
        postNumber: postNum
    }

    allNotes.push(messageData)
    postNum++

    // res.send('thank you for submitting, ' + user)
    res.redirect('/')
})

app.get('/all-messages', (req, res)=>{
    let messageString = '' // creates local variable string to use to send to client

    // use a loop to go through the entire notes array
    // shorthand for a regular for loop
    // useful for arrays of objects
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for(let n of allNotes){
        messageString += '<h3>' + n.username + '</h3>' + ' says ' + n.message + '<br />'
    }

    // res.send(messageString)
    // we are no longer sending a string, we are now sending a json object
    // it is cumbersome to have to write html as a string
    res.json({notes: allNotes})
})

app.delete('/delete/:id', (req, res)=>{
      // splice
    data.forEach((d) => {
      console.log(d.postNumber);
      console.log(req.params.id);
      if (d.postNumber == req.params.id) {
        data.splice(req.params.id, 1);
      }
    });

  res.redirect("/all-messages");
})

// 5. set the app to listen to requests
// ALWAYS GOES LAST
app.listen(3001, ()=>{
    console.log('server running on http://127.0.0.1:3001/')
})