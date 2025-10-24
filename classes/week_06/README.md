# Week 06 10/24/25

## Agenda

1. Project #3 AMA
2. Tutorial: Adding image upload
2. Tutorial: URL Params and Deleting Posts
3. Project #3 WIP Feedback

## Project #3 AMA

Any technical questions about project 3 right now?

Another fun reference: https://stopclimbing.org/

## Adding image upload

We need to add an action to our form requests in our html files, with a new method
```html
<form action="http://www.example.com" method="POST">
</form>
```

## URL Params and Deleting Posts

In order to track individual posts, we need to add an id to each one. We can do this inside our object that holds all of our data for each post. The id, for now, can be a number that is increased every time we access the information. 

In our `server.js`:
1. At the top of our `server.js` file, we need to create our number.
```js
let postNum = 0
```

2. We need to add that data into our object. 

```js
    const messageData = {
        username: user,
        message: message,
        date: time,
        postNumber: postNum
    }
```

3. In the same function, We need to increment that number
```js
postNum++
```

On our client, we need to go where we are displaying that data. This is inside the `script.js`.

1. We need to add a button and [an attribute id](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
```js
let button = document.createElement('button')
button.setAttribute("id", 'postNum-' + n.postNumber)
newElement.appendChild(button)
```
2. We need to retrieve that button and add an event listener

```js
document.getElementById('postNum-' + n.postNumber).addEventListener('click', ()=>{
            
})
```

3. Make a fetch request with data. 

Then we need to go back to our `server.js` and add the delete request, using route parameters.

```js
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
```




