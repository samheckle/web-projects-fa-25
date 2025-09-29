# Week 03 9/29/25

## Agenda

1. Digital Ocean Check-In
2. Reading Discussion
3. Project #2 Concept Share
4. Events and Time
5. p5.js into websites

## Digital Ocean Check-In
1. By this point, you should have a digital ocean account set up. Navigate to https://digitalocean.com/ and log in using your preferred method. 
2. Go to https://cloud.digitalocean.com/. We need to create a project under the "Projects" tab in the sidebar. Make a project called `web-projects`. 
3. Try to make a droplet and see if it prompts for any extra information.

## Reading Discussion

### Vernacular Web

> The relationship between ordinary users and the Web of the 90s is a very interesting subject to study, because it’s a relationship filled with love, hate, all kinds of drama – in other words, it’s a full-blown relationship between a new medium and its first users, a relationship that’s exalted, complex, sometimes silly – whatever it is, all that matters is that it existed.
> <strong> Today, that relationship is gone. </strong> 
> -Lialina, <em>Vernacular Web II (2010)</em>

#### [The web is a place](https://www--arc.com/)

### [Like This or Die](https://harpers.org/archive/2019/04/like-this-or-die/)
* search engines (+social media) make money through advertising
* designed keep you on their pages for as long as possible
* intended to drive traffic to different websites, but with the rise of AI summaries, are you still visiting those websites? 
    * think about looking up a word: are you going to merriam-webster or using AI summary?
    * are you consuming the advertisements (thus supporting), from the sources of the data?

> The <strong> original web was inherently about redistribution of power from a small number of gatekeepers to a large number of individuals</strong> , even if it never quite lived up to that promise. But the next iteration of the web was about concentrating power in a small set of gatekeepers whose near-unlimited growth potential tended towards monopoly. There were always movements that bucked this trend — blogging and the indie web never really went away — but they were no longer the mainstream force on the internet. And over time, the centralized platforms disempowered their users by monopolizing more and more slices of everyday life that used to be free. The open, unlimited nature of the web that was originally used to distribute equity was now being used to suck it up and concentrate it in a handful of increasingly-wealthy people. 
> -Werdmuller, [The web was always about redistribution of power. Let's bring that back.](https://werd.io/the-web-was-always-about-redistribution-of-power-lets-bring/) (2025)

> Your engagement and your work, not unlike your vote, is a form of power, something you can choose to grant to others. Those others, particularly organizations and companies, accrue that power to use as they see fit.
> -Bump, [The Power We Use and the Power We Give](https://www.pbump.net/o/the-power-we-use-and-the-power-we-give/) (2025)

#### Who is platformed? Who earns money, social capital, influence, from these corporations?

* [Substack Has a Nazi Problem](https://www.theatlantic.com/ideas/archive/2023/11/substack-extremism-nazi-white-supremacy-newsletters/676156/) (2023)
* [Verified pro-Nazi X accounts flourish under Elon Musk](https://www.nbcnews.com/tech/social-media/x-twitter-elon-musk-nazi-extremist-white-nationalist-accounts-rcna145020) (2024)

### Discussion Questions:

In groups of 2, answer the following discussion questions in [this document](https://cryptpad.fr/pad/#/3/pad/edit/79de9ccbdf5159938c949d3cfe8b4e16/). 

## Project #2 Concepts

In groups of 2, follow the observe-analyze-interpret-evaluate system. it is similar to praise-question-polish method, but getting more specific than "i like this": 
1. 5 minutes: *without* talking to the other person, read their project idea and write down notes and feedback.   
2. 2-3 min: explain to your partner your observations and analysis (of their project), does that match theirs?
    * ***observe***: what do you perceive? what is your understanding of what is happening in the browser?
    * ***analyze***: how do those elements work together (for you)?
3. 5 min: ***interpret*** their project in the context of the readings: how does this fall in line with Lialina and Watz's theses?
    * what do the elements in your observation/analysis come together to mean (to you)?
    * what effect does it have (on you)?
4. 2-3 min: ***evaluate***: what suggestions do you have?
    * do your observations/analysis/interpretations match the creators? 
5. 5 min: does your partner have any questions? what projects or other feedback can you give?
5. switch partners. 

We should be spending ~20 min per person. If you aren't getting to 20 minutes, get wild with your feedback:

* think about aesthetic decisions being made: how were these decided? can you imagine a world where these choices might be different?
    * ex. what if time used 100 seconds instead of 60 seconds to determine a minute? would the project be different?
* play with form, scale, tone (funny? sad? serious?), purpose, metaphor, theme

## Lecture: Events

### javascript `addEventListener` method

The `addEventListener` method attaches one or more event handlers for the selected elements and child elements. Event handlers attached using the `addEventListener` method will work for both current and FUTURE elements (like a new element created by a script).

The general syntax for attaching an event listener to an object using the `addEventListener` method is like this:

`*elementSelector*.addEventListener(*eventName, callbackFunction)*`

- The `elementSelector` works as discussed in a previous tutorial (by tag name, by id, by class, etc.)
- The `eventName` needs to take specific values, which are defined by HTML & Javascript. Examples include `click`, `keypress`, `hover`, and more. _You can find a full list of DOM events [here](https://developer.mozilla.org/en-US/docs/Web/Events).
- The `callbackFunction` is a function that we define, similarly to timers. This is where we define what we want to happen as a result of the interaction (click, key press, etc.) and gets called when Javascript detects that user interaction on the given selected elements. Usually we will be using anonymous functions `() => {}`, but you can also create an external function.

### Further resources

[This](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) is the official MDN `addEventListener` docs.

Here is a [link](https://javascript.info/mouse-events-basics) to the full list of mouse events; also a [link](https://www.w3schools.com/jsref/dom_obj_event.asp) to all events that the DOM offers.

There are some interesting events, such as `online` and `offline`, which tell you when the browser connects or disconnects from the internet; `pagehide` and `pageshow`, or `wheel` (wheel is for when the mouse is scrolled). Go explore!

## Lecture: Time

### Setting a repeating timer (`setInterval`)

`setTimeout` works as a one-time timer. While it’s possible to use recursion in order to “chain” multiple `setTimeout` calls together (how would you do that?), Javascript has another function for setting up a repeating timer. It’s called `setInterval`, and everything about using it is identical to using `setTimeout`, except for that the callback function gets called **every X seconds** instead of just once after X seconds.

```jsx
setInterval(intervalFunction, 5000)

function intervalFunction() {
	console.log("Yet another 5 seconds have passed... on and on... forever...")
}
```

Of course, this goes on forever unless you cancel the timer, using the `clearInterval` function. In the example below, I'm using a `setTimeout` to cancel the interval after 12 seconds.

```jsx
let intervalId = setInterval(intervalFunction, 5000)

function intervalFunction() {
	console.log("Yet another 5 seconds have passed... on and on... forever...")
}

// Passing the intervalId as an argument to the callback function
setTimeout(cancelTheInterval, 12000, intervalId)

function cancelTheInterval(intervalId) {
	clearInterval(intervalId)
}
```

### Working with the date & time (Javascript’s `Date` class)

While `setTimeout` and `setInterval` allow us to control time that is *relative to our code*, in some circumstances you will want access to the actual real-world time. Javascript exposes that using the powerful `Date` class.

Let’s say you wanted to print the current date and time to the console. You can do that using the `toString()` method on the date object:

```jsx
// First, you need to create a new Date object
let date = new Date()
console.log(date.toString())

// This will print the date as a string, formatted like this:
// Sun Feb 6 2021 23:15:30 GMT+0200 (CEST)
```

You can access the individual components of the date (e.g. hour of the day, day of the week) using other methods on the `Date` object: 

- `date.getDate()` returns the day of the month as a number (e.g. `6` for the example above)
- `date.getDay()` returns the day of the week as a number (Sunday is `0`, Monday is `1`, Tuesday is `2`, ... and Saturday is `6`)
- `date.getHours()` returns the current hour as a number (e.g. `23` in the example above)
- and so on, for all components of a time.

### Epoch time

One functionality of the `Date` class that you might use quite often is the `date.getTime()` method. This returns the current *epoch time* in milliseconds. [Epoch time](https://en.wikipedia.org/wiki/Unix_time) measures the amount of time that has passed since a specific date in the past, which on most systems is set as `00:00:00 on January 1, 1970`. 

This is useful if you need to keep track of time in your code for any reason. For example, if you wanted to calculate how much time passed between two user clicks on your page, you could get the epoch time at the first click using `date.getTime()`, get it again at the second click, and subtract the two numbers. You will then have a number in milliseconds which is exactly the elapsed time between the two events.

**You can find the full reference for the `Date` class [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).**

*One important thing to note about `Date` is the fact that it accesses the time of the user’s computer, not the server time. So, if two users access your website from different timezones and you don’t do any time zone conversion, this will return different times. Similarly, if someone’s computer year is for some reason set to 1980, the `Date` object will follow that.*

