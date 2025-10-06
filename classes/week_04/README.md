# Week 04 10/6/25

## Agenda

1. No class Monday 10/13, meet on Tuesday 10/14 instead
2. Project #2 Share & Feedback
3. Introduce Project 3
4. Setting up digital ocean

## Project #2 Share

Follow the observe-analyze-interpret-evaluate system. it is similar to praise-question-polish method, but getting more specific than "i like this": 

* ***observe***: what do you perceive? what is your understanding of what is happening in the browser?
* ***analyze***: how do those elements work together (for you)?
* ***interpret*** their project in the context of the readings: how does this fall in line with Lialina and Watz's theses?
    * what do the elements in your observation/analysis come together to mean (to you)?
    * what effect does it have (on you)?
* ***evaluate***: what suggestions do you have?
    * do your observations/analysis/interpretations match the creators? 

## Introduce Project 3

## Virtual Machines and Digital Ocean

|Web Infrastructure| Google Drive | Hunter SFTP | Digital Ocean | 
|---|---|---|---|
| The Cloud |  Your entire account in google drive | Hunter (`hunter.cuny.edu`) | Digital Ocean |
| Virtual Machine | A folder in google drive | Specific Hunter server we used (`fm1.hunter.cuny.edu`) | Droplet | 
| FTP |Uploading files to google drive | Cyberduck/FileZilla| Cyberduck/FileZilla

### Making a Droplet on Digital Ocean
1. By this point, you should have a digital ocean account set up. Navigate to https://digitalocean.com/ and log in using your preferred method. 
2. Go to https://cloud.digitalocean.com/. We need to create a project under the "Projects" tab in the sidebar. Make a project called `web-projects`. 
3. In the sidebar, click on "Droplets". We will be making a droplet as our rented computer that will serve our files for this class. This is my droplet configuration:
    1. region: I default to New York since it is the closest one to us.
    2. datacenter: if you are not given the option to create the $4 droplet on step 6, you might need to change the datacenter here. likely it will need to be `New York * Datacenter 1 * NYC1`
    3. image: `Ubuntu` option is chosen in the first row. Ubuntu is the Linux distribution we’ll be using for this class.
    4. image version: `24.04 (LTS) x64`
    5. size + droplet type: `Basic`
    6. CPU options: select the `Regular` option, with the $4/mo pricing package (you may also need to press the arrow to scroll to the left if you only see $6). This is the cheapest option available to us, and the computing power will be sufficient for our needs. If the $4 option is greyed out, you need to change your datacenter on step 2.
    7. authentication: make sure the `Password` option is selected (as opposed to `SSH keys`), and don’t forget to enter a password for your account on this server. **Make sure to remember this password, you’ll need it to access your droplet.**
    8. You can give your droplet a name, at the bottom under `Choose a hostname`. I named mine `sam-web-projects`.
    9. press "create droplet"

### Creating Our First Server (localhost)

Unlike the Hunter server, we need to manage our own servers using `Node.js` and `Express.js`. These are my preferred tools, but you can also run python servers, we just won't be doing that in this class. 

First, we need to reconfigure our `web-project` folder:

    |-- class-demos
    |-- project3/
    |-- project4/
    |-- project5/
    |-- webserver/
        |-- public/
            |-- project1/
            |-- project2/
    |-- README.md
    |-- .gitignore <- we will add this next

We need to create a `.gitignore` file, at the same level as our `README`.
```
.DS_Store
node_modules/
```

Inside of our `webserver/` folder, we will need to initialize a node project. Navigate to your `webserver/` folder using the CLI.

---

<details>
<summary> 

#### Command line (CLI) basics 
</summary>

Since we don’t get a graphical user interface for interacting with our server, you will need to become familiar with the command line. Fortunately, 5-6 commands can get you pretty far. The most important ones we will use are:

- `pwd` → displays the path of the directory the command line is currently in. Think of the command line as a Finder window – it can only be in one folder at a time, and it can be used to open, create, modify or remove files in that folder.
- `ls` → shows the files that exist in the current directory
- `mkdir` → creates a new folder at the current path, and takes one parameter (the name of the folder.) Example usage: `mkdir MyNewFolder`
- `cd` → changes directory, it’s what we use to navigate the filesystem. It takes one parameter, see below:
    - `cd MyNewFolder` will move us inside the newly created `MyNewFolder`. This is a *local path*, meaning that `MyNewFolder` needs to exist in the current directory in order for this command to work.
    - `cd /root/MyNewFolder` will move us to the given *global path.* It’s a global path because it starts with a `/`.
    - `cd ..` will move us in the parent of the directory we’re currently in.
    - `cd ~` will move us to the home folder of the current user.
    - `cd /` will go to the very root of the file system.
- `touch` → creates a new empty file
- `cat` → displays the contents of a file, and takes one parameter – the path of the file. For example, running `cat /root/.bash_history` will show the contents of the `.bash_history` file located in the `root` folder, which happens to be the list of all commands you’ve already run in the terminal.
- `rm` → removes a file; `rm -r`, to remove a directory; USE WITH CAUTION.

**Note #1:** You can find a pretty comprehensive command line cheat sheet [here](https://www.git-tower.com/blog/command-line-cheat-sheet/). Don’t worry if it feels intimidating for now – you’ll soon get used to it.

**Note #2:** If you’re using a Mac, all these commands work on your computer as well (through the Terminal app.)
</details>

---

In VS Code, we can open the CLI at our current folder location. From there, we can use `pwd` which will give us our path of our folder on our whole computer. It should spit something out like: 
```bash
sam web-projects-starter 🐸 pwd
/Users/samheckle/dev/web-projects-starter
```
To see all the folders we can navigate to, we use `ls`:
```bash
sam web-projects-starter 🐸 ls
class-demos	webserver	project4	README.md
project3	project5
```
To navigate into the folder, we want to use `cd webserver`
```bash
sam web-projects-starter 🐸 cd webserver
sam webserver 🐸
```
If we double check our file location:
```bash
sam webserver 🐸 pwd
/Users/samheckle/dev/web-projects-starter/webserver
```

---

Once we are in the correct folder, we need to initialize a node project. 
```bash
npm init
```

Press `enter` for all the questions (you can fill them in but the defaults work fine). This initializes our `node` project.

Once the project is initialized, we need to install an external library called Express JS. [Express](http://expressjs.com/) is a small, easy to use framework which allows us to create web servers in node without having to write too much code. It’s the library that does all the heavy lifting in allowing us to create a web server.

Run the following command in order to add `express` as a dependency to the current project:

```bash
npm install express
```


At this point, if you run `ls`, you should see the following files in your folder:

- `node_modules` → this is the folder where all our project dependencies get saved. If you run `ls node_modules`, you will see a handful of results. `express` will be one of them, the other ones are dependencies of `express`.
- `package.json` → this is our node project configuration file. It specifies some metadata about our node project, as well as our dependencies. If you run `cat package.json`, you’ll be able to see that `express` appears under the `dependencies` section of the file.
- `package-lock.json` → we don’t care about this file, it’s used by node internally to keep track of exact library versions for the entire dependency tree.

This is the default barebones structure of a node project, so you should get used to seeing `node_modules` and `package.json` around. The only thing that’s missing is some actual code to define and run our web server.

    |-- webserver/
        |-- public/
            |-- project1/
            |-- project2/
        |-- node_modules/
        |-- package.json
        |-- package-lock.json
        |-- server.js <- we will add this next

Lastly, inside our `webserver/`, we need to make our `server.js` file. 

```jsx
// Importing the express library we've installed; This library allows us to create a simple web server.
let express = require('express');

// Create the web server.
let app = express();

// Tell the web server to use the "public" folder for serving static files (html, css, javascript, media.)
app.use(express.static('public'));

// Create a test endpoint; This is not required, but it allows us to verify whether the server is working.
app.get('/test', function (req, res) {
  res.send('Hello World!')
});

// And finally start the server. We start the server on port 80, which is the default port for http.
// If you want to learn more about ports, read this: https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/
app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
```

#### Running Our Server (localhost)

Start your web server by running the following command:

```bash
node server.js
```

This runs our server ***locally***, meaning on our own personal computer. This is useful for testing, to ensure our server is working as expected on our machine.

Once we know our server is running, we have to manually cancel it, otherwise it will run until we close the terminal.
    * MacOS: `⌘ + C`
    * Windows: `Ctrl + C`

### Uploading Files to our Droplet

In CyberDuck or FileZilla, make a new connection / bookmark. 

In the dropdown at the top, pick the `SFTP (SSH File Transfer Protocol)` option, and give your connection a `nickname` in the field underneath. In the `server` field, enter the public IP address (something like `206.189.195.111`) of your droplet. Write `root` in the `username` field (remember from a previous section of this tutorial, our current user is called `root`), and type in your `password` in the next field. Once you’ve filled all these fields out, close the window.

Back in the main Cyberduck window, double-click on the newly added item, and a new Finder-like window will open, with the contents of your droplet in it. 

Navigate to your local folder on your computer, and drag all of the contents inside your `web-projects` folder from your Finder window into the correct folder in the SFTP window. This will copy the files to the droplet.

### Setting up our Server on our Droplet

#### Connecting to our Droplet

In order to connect to it, we will use `ssh`. `ssh` stands for “Secure Shell”, and it’s a simple (and secure) protocol for connecting to a computer remotely. Through `ssh` we get access to the remote computer’s command line.

Open up your **Terminal** (or GitBash if you are on Windows,) and type the following command (replace `YOUR_IP` with the IP address your droplet shows in the Digital Ocean interface):

```bash
ssh root@YOUR_IP
```

You will be prompted for a password – that is the root password you set when creating the Droplet in the Digital Ocean interface.

In the command above, `root` is the user we are connecting as – it’s what the Digital Ocean droplet sets up for us as a default. There’s [more to say about what the root user is on Linux](https://en.wikipedia.org/wiki/Superuser), but we won’t go into details here.

#### Installing Node on Our Droplet

In order to start using node, we first need to install it on the droplet. You only need to do this step once – after it’s installed, `node` will keep living on your droplet until you manually remove it. Run the following two commands:

```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

Notice in the second command that we are installing a second package called `npm` in addition to node. `npm` stands for Node Package Manager, and it’s a small piece of software which makes it *extremely easy* to use external libraries in node projects. You can learn more about `npm` [here](https://www.npmjs.com/).

In order to check whether `node` and `npm` were properly installed, run the following two commands (`-v` is a pretty standard command line argument for checking the version of a software):

`node -v` → this should output something like `v10.19.0`. Don’t worry if you have a different version.

`npm -v` → this should output something like `6.14.4`. Again, all good if your exact version is different.

#### Running Our Server (droplet)

##### Testing the server is working

Just like we did on our local machine, we can temporarily run the server using: 
```bash
node server.js
```
This will keep the server running until we close the connection (or the ssh connection crashes). 
If we go to our IP address in the browser (make sure you are using `http://[your-ip]`, as we have not secured it). Because we created a `/test` endpoint, we can go to that location in the browser. 

We also should be able to view our project1 and project2 at this point, since they live in the `public` folder which we exposed. If you go to `http://[your-ip]/project1` or `http://[your-ip]/project2`, they should also be working at this time. 

HOWEVER, if we close our CLI or the connection stops, the node command shuts down. So we need a way to make it persist without our computer driving it. 

#### Persistent Server using `pm2`

In order to avoid that, we need an external utility which keeps our web server running even after we disconnect. There are a handful of options, but the one we will work with is called `pm2`. It also exists in the `npm` ecosystem, so you can install it like this:

`sudo npm install --global pm2`

The `--global` flag tells `npm` to install this library for the entire filesystem, as opposed to locally for a project. `pm2` is a command-line utility, so it needs to be installed globally. We’ll get more into this later in the semester.

Navigate to the folder where your web server lives, and, instead of starting your web server with the `node server.js` command, run the following:

```bash
pm2 start server.js
```

By doing this, `pm2` becomes the manager of our node web server, and, through black magic, it makes sure the server stays on even after you disconnect from `ssh`. Give it a try!

For the first few weeks, we won’t be making any changes to the server itself, so once you have this running, there’s no need to stop or restart the server. Files uploaded in the `public` folder will automatically get picked up and updated in the browser.

Once we start making changes to the server itself, we’ll learn some more about `pm2` and best development practices & workflows.

You might also need to check the status of your server:

```bash
pm2 ls
```

You can stop your server if there are any issues :)

```bash
pm2 stop all
pm2 restart server
```

You can also kill the server if for some reason stopping and restarting doesn't work

```bash
pm2 kill
```