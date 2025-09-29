1. By this point, you should have a digital ocean account set up. Navigate to https://digitalocean.com/ and log in using your preferred method. 
2. Go to https://cloud.digitalocean.com/. We need to create a project under the "Projects" tab in the sidebar. Make a project called `web-projects`. 
3. In the sidebar, click on "Droplets". We will be making a droplet as our rented computer that will serve our files for this class. This is my droplet configuration:
    1. region: I default to New York since it is the closest one to us.
    2. datacenter: if you are not given the option to create the $4 droplet on step 6, you might need to change the datacenter here. likely it will need to be `New York * Datacenter 1 * NYC1`
    3. image: `Ubuntu` option is chosen in the first row. Ubuntu is the Linux distribution we’ll be using for this class.
    4. image version: `25.04 x64`
    5. size + droplet type: `Basic`
    6. CPU options: select the `Regular` option, with the $4/mo pricing package (you may also need to press the arrow to scroll to the left if you only see $6). This is the cheapest option available to us, and the computing power will be sufficient for our needs. If the $4 option is greyed out, you need to change your datacenter on step 2.
    7. authentication: make sure the `Password` option is selected (as opposed to `SSH keys`), and don’t forget to enter a password for your account on this server. **Make sure to remember this password, you’ll need it to access your droplet.**
    8. You can give your droplet a name, at the bottom under `Choose a hostname`. I named mine `sam-web-projects`.
    9. press "create droplet"