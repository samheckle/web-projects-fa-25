# Week 05 10/14/25

## Agenda

1. No class Monday 10/20, meet on Friday 10/24 instead
2. Project #3 Concept & Feedback
3. Introduction to Servers
4. Setting up our API requests

## Project #3 Concept & Feedback

5 min without talking to the other person, sketch out their idea:  

* how are you interpreting what they are conceptualizing?
* what is working for you? what isn’t?
* what would you change?

5 min each to share between partners:

* present how are you interpreting this project
* what is confusing? what do you have questions about?
* what ideas do you have to improve this project? 
* what references do you think would be useful for them?

In the replies of the discussion post: upload a photo of your sketch + write your feedback

## Introduction to Servers
### Node.js, npm, and Express

| Module | Library | Framework | Runtime Environment
|---|---|---|---|
| fingers | hands | body | environment |
| part of the program | interact with other programs | complete system | how the program is run |
| `server.js` | `Express.js`, `p5.js` | `React.js`, `Ember.js`, `Vue.js`, `Angular.js` | `Node.js` |

from [modules, libraries, and frameworks](https://stackoverflow.com/questions/4099975/difference-between-a-module-library-and-a-framework)

#### Node.js

A runtime environment (or engine) to run JavaScript as a standalone application using frameworks and modules.

From [Node.js docs](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser):

> Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.

#### npm

**N**ode **P**ackage **M**anager, which gives us *access* to frameworks and modules, kept track in `package.json`

#### Express.js

A Node framework to create web applications. 

#### Some other definitions

<table>
<tbody>
<tr>
<td>api</td><td>

`application programming interface` which allows two or more computers to interact

</td>
</tr>
<tr>
<td>REST</td><td>

**RE**presentational **S**tate **T**ransfer, which is a software architectural style</td>
</tr>
<tr>
<td>RESTful API</td><td> system in which two computers interact with one another using the REST style</td>
</tr>
</tbody>
</table>

![rest api](https://kagi.com/proxy/OIP.5b9URi8HKSr9A9f-jvmxCQHaFM?c=3SgynE8ofVcfX71I7M3hSy7-8GsGNVaWMLYt1IFzJZWe-Af51hnWao5boloRrMRQVDkMHxQZ2u0jaqogF6zEV30zsBFskfNTYTiBX-SYInKjfcn0DTT4A8V7se6DUrMH)

![http request anatomy](https://wizardzines.com/images/uploads/anatomy-http-request.png)

![request methods 1](https://wizardzines.com/images/uploads/request-methods-1.png)

![request methods 2](https://wizardzines.com/images/uploads/request-methods-2.png)

> from [wizardzines.com](https://wizardzines.com/comics/)

---

#### Breaking down the `server.js`

Below is the order that the `server.js` code will exist. 

1. Import libraries into a global variable  
`require` is syntax to import a library into our file. In our case, we are importing the Express library.
```js
const express = require('express')
```

---

2. Use libraries to create another global variable  
Creates an Express application, which uses the library (via the `express` variable) we just imported. 
```js
const app = express()
```
This is kind of similar to using `new` to create an instance of a new [Class in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

---

3. Middleware

```js
app.use(express.static('public'))
```
Adds the `public/` folder to serve static files. This will include any `.css`, `.html`, and `.js` that is used in the front-end. This again uses the `express` variable to go to the path in which the static files exist. See [`express.static()`](https://expressjs.com/en/5x/api.html#express.static). This is a "middleware" function.
Middleware needs to be added with [`app.use()`](https://expressjs.com/en/5x/api.html#app.use)

---

4. Set up our routing.   
We set up our `GET` request in this first example. 
```js
app.get('/', (request, response)=>{
    response.send('server is working')
})
```

##### first parameter: path
From [Express docs](https://expressjs.com/en/guide/routing.html):

> Routing refers to how an application’s endpoints (URIs) respond to client requests.

The `/` is the location that this function is called when that specific url is hit in the browser. `/` is the default url eg. `http://159.89.85.172/`. Everything that comes after the last digit is a part of the route.

Every url we want to customize now needs to have a specific `app.get` for it. 

##### second parameter: callback

This is an anonymous function that takes two parameters `(request, response) => {}`

* `request` is data coming FROM the user
* `response` is data SENT TO the user

These are automatically populated by Express for us to use. 
We can send a response using [`response.send()`](https://expressjs.com/en/5x/api.html#res.send). This allows us to send html inside of strings to format our code. 

---

5. Listen for requests  
Tells the node app to listen to requests on the particular port. This is the absolute last thing you want to do on your server.
```js
app.listen(5001, ()=>{
    console.log('server is running')
})
```
It is somewhat of an arbitrary number where your server lives at on your droplet. You can customize this number, except for ports that are already in use on your computer and [default ports](https://en.wikipedia.org/wiki/Port_%28computer_networking%29)


---

## Setting up our API requests

### `asynchronous` & Promises

> a technique that enables your program to start a potentially long-running task and still be response to other events while that task runs

from [introducing asynchronous javascript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)

Promises are a way to make requests asynchronous, using the keywords `await` and `async`. 
* `async` goes in the function declaration
* `await` is used to wait for the function to complete before the next action continues

In order for us to use APIs, we need to use these two keywords in conjunction so that we have our request data ready when we need it. 

The [`fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) allows us to make requests to servers using a specific path. 

```js
fetch(resource)
fetch(resource, options)
```

* `resource` is the URL location we wish to retrieve
* `options` allows us to specify other [request options](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

### GET and `query`

We can construct a `query` using [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). The query is everything that comes after a `?` in a url, and we can retrieve that information on the server-side using `request.query`.

| Client-side | Server-side |
|---|---|
| `<form action="/submit" method="GET">` | `app.get('/submit', (req, res))` |
| `<input type="text" name="customName">` | `req.query.customName` |

### POST and `body`

We can construct a `body` using the options inside of a fetch request. The body is an object that comes through in the data of the request, so we can only see it by viewing the networking tab in our browser. We can retrieve that information on the server-side using `request.body`.

| Client-side | Server-side |
|---|---|
| `<form  action="/upload" method="POST">` | `app.post('/upload', (req, res))` |
| `<input type="text" name="customName">` | `req.body.customName` |

### Sending the data back to the client

Once we have processed what we want to do on the server-side, we need to send the data back to the client. This can be done with [`res.json({})`](https://expressjs.com/en/5x/api.html#res.json).

On the client-side, we finish our fetch request with the Promise. 

```js
async function getMessages(){
    let response = await fetch('/get-messages')
    let json = await response.json().then(success, error)
}

function success(res){
    let notes = res.messages
    for(let n of notes){
        let newElement = document.createElement('div')
        newElement.textContent += n.text

        document.appendChild(newElement)
    }
}
```