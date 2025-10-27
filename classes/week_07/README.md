# Week 07 10/27/25

## Agenda

1. Project #3 Critique
2. Media Queries & Responsiveness
3. Partner Media Query Exercise

## Project #3 Critique

Using this [cryptpad](https://cryptpad.fr/pad/#/2/pad/edit/4pPNmdcgvyWGUmYBt4EWBEWd/) we will be doing critiques.

## Media Queries

[Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are ways we can add specific styles to different screen sizes. 

Media queries require one line of html, but after that everything is inside your css files. 

The html that allows us to determine the [viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport#viewport_width_and_screen_width) size based off the screen.
```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

In our css files, we can determine a lot of other styles based on the media itself. Each `@media` is a specific rule that contains nested selectors. There are lots of [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) you can modify, but for now we will focus on the common ones: media types, orientation, and screen width.

1. Determining the [type of media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)
```css
/* this determines styles when the page is printed */
@media print {
    body{
        font-size: 12px;
    }
}
/* this determines styles when the page is a screen */
@media screen{
    body{
        font-size: 16px;
    }
}
```

2. Styling for a specific orientation
```css
@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

3. Lastly, we want to style for specific screen sizes, usually based off the [width property](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width). Typically, I use `min-width`, but you can use whatever works for you.
```css
/* Exact width */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Minimum width */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Maximum width */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Breakpoints
When determining different screen sizes, you can use "breakpoints". This is determining any specific styling for specific screen sizes. 

MDN has a nice [explanation of breakpoints](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries#how_to_choose_breakpoints), specifically using the responsive design mode. 

You can customize your breakpoints in any way, but a common breakdown is:
| From [Bootstrap 5](https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints)| |
|---|---|
X-Small | <576px |
Small | ≥576px | 
Medium |  ≥768px |
Large| ≥992px |
Extra large |  ≥1200px |
Extra extra large |  ≥1400px |

## Partner Media Query Exercise

We are going to practice responsiveness, along with practicing how to make a pull request to make changes in somebody elses github. 

1. First, we are going to add our partner as a collaborator on our repository. We can do this by going to our repo settings and press the Collaborators tab. 
![add collaborators](https://github.com/samheckle/web-projects-fa-25/blob/main/images/add-people.png)

You want to add the person's username of your partner.

2. Next, you are going to clone that repository to your computer. We need to grab the url we are going to `clone`
![clone-url](https://github.com/samheckle/web-projects-fa-25/blob/main/images/clone-url.png)

Make sure you are grabbing the `ssh` url, and it is your ***partner's repo***.

3. Usually I put new repositories into my `dev/` folder, but you can put it wherever you want on your computer. We can do this inside of our dev folder and then use `git clone {web url} {folder name}` to clone the repo. After the web url we are creating a custom name for the folder to go in.

Open your terminal and run the commands to get into your dev folder and clone the repo.
```sh
cd dev
git clone git@github.com:samheckle/web-projects-fa-25.git judy-web-project
```

4. Complete your assignment to make a responsive website.

5. You can check what branch you are on by using `git status`.
```sh
sam web-projects 🐸 git status
On branch responsive-dev
Your branch is up to date with 'origin/responsive-dev'.

nothing to commit, working tree clean
```
This tells me I am working on my branch that I made. 
  a. If you don't have a branch (or it says you are on `origin/main`), you need to make one using `git checkout -b responsive-assignment`. We already ran this command in class, so you shouldn't have to do this if you were following along.
  b. If you are having an issue with `upstream`, make sure to copy the command that the console shows you (it should be something like `git push --set-upstream origin responsive-dev`)

6. Go back to your partners repository, and go to the pull request menu and make a pull request (PR).
![clone-url](https://github.com/samheckle/web-projects-fa-25/blob/main/images/make-pr.png)

7. You need to change the base repository to be the repository of your partner's branch.
![change-base-repo](https://github.com/samheckle/web-projects-fa-25/blob/main/images/change-base-repo.png)

8. Then you need to change the `compare: main` to `compare: {your branch name}`. This might take a second to load, and it might refresh the page to only show the branches you are comparing. Don't rush!
![change-base-repo](https://github.com/samheckle/web-projects-fa-25/blob/main/images/compare.png)

After you create the repo, you want to copy the pull request URL to the related discussion board. The PR URL should look something like: `https://github.com/shasunal/web-projects/pull/1`

9. Your partner should "review" your code and if they are ok with it. You will do the same with the code they wrote for you. You can test their code using [this github tutorial](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) of making a new branch from their PR. 

10. Once you are satisfied with the code, you can merge their pull request.

11. Once merged, you need to pull the new code by running `git pull`.