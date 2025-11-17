# Week 10 11/17/25

## Agenda

1. LAST Nginx Configuration
2. Project 4 Share
3. Upcoming assignments
4. Databases

## Nginx Config

1. ssh into your droplet

```sh
ssh root@your.ip.address
```

2. open the editor for the nginx configuration file, replace `yourdomain.com` with your domain name.

```sh
nano /etc/nginx/sites-enabled/yourdomain.com.conf
```

3. change the configuration file under the comment `# reverse proxy`. remember you cannot use your mouse, so you need to use arrow keys to move your cursor around.

```sh
    # reverse proxy
    location /project4/ {
        proxy_pass            http://127.0.0.1:5001/;
        proxy_set_header Host $host;
        include               nginxconfig.io/proxy.conf;
    }

    location /project3/ {
        proxy_pass            http://127.0.0.1:7002/;
        proxy_set_header Host $host;
        include               nginxconfig.io/proxy.conf;
    }

    location / {
        proxy_pass            http://127.0.0.1:3002/;
        proxy_set_header Host $host;
        include               nginxconfig.io/proxy.conf;
    }
```

The server block operates like an if-statement, so we want the most generic one on the bottom. We are also adding our project3 here, along with our project4. Make sure your port names are correct (they might be different from mine, so check each `server.js` file in `webserver`, `project3`, and `project4`).

### Restart nginx

Lastly, to check our config file is working, we need to run 

```sh
sudo nginx -t
```

And restart our nginx server

```sh
sudo systemctl reload nginx
```

If for whatever reason your nginx server says `inactive`, you can run
```sh
sudo systemctl start nginx
```

### Adding base url to vite config

In `vite.config.js` we need to update our base url for our build:

```json
base: "https://smarmy.space/project4/",
```

And re-build (`npm run build`) and re-upload `dist/` into our cyberduck.

## Project 4 Share

In the replies of the discussion post, please write feedback for each project in whatever format you find best!

Methods we have used so far in this class:
1. Praise/question/polish
2. Observe/analyze/interpret/suggest

## Upcoming Assignments

1. Readings #3
2. Project 5 Concept

### Talks n things

> An Evening with Talia Cotton  
Thursday, November 20th, 7:00 - 9:00pm  
[🎟️ RSVP via Eventbrite](https://www.eventbrite.com/e/1965420125503?aff=oddtdtcreator)

---

> WordHack feat. April Soetarman, Elliott Etzkorn and Alejandro Crawford  
Thursday, November 20, 2025 7:00 PM 10:00 PM   
[Tickets $15](https://www.wonderville.nyc/events/wordhack-11-20-2025)

---

> Laura U. Marks: Small Files for a Small World and Talismanic Media  
Friday Nov 21 2pm-3.30pm  
https://event.newschool.edu/lauraumarkssmallfilesforasmal

---

## Databases

Setup:

1. To start a new project, navigate to your class-demos folder and make a class 10 folder
2. Run `npm init -y`, or if that doesn't work just `npm init` and press enter and type yes.
3. Install dependencies `npm install express multer body-parser` and setup `server.js`
4. Install database library `npm install @seald-io/nedb`

