# mvc-tech-blog

## Description

This is a tech blog that uses a Model-View-Controller (MVC) architecture that allows users to sign up and login to the site, create posts, and comment on other users' posts. 

The site is deploed on Heroku at https://ajs-mvc-techblog-6080199c6f0f.herokuapp.com



The application uses the following technologies:
-  Node.js
-  Express.js
-  MySQ
-  Sequelize
-  Handlebars
-  dotenv

## Table of Contents

- [mvc-tech-blog](#mvc-tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Issues](#issues)


```md



```md 
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts or comments
```
---

## Installation
- Clone the repository
- Install dependencies with `npm i`
- Run `npm start` to start the server
- Run seed file with `npm run seed` to seed the database
- Navigate to http://localhost:3001 in your browser

## Usage
- NOTE: The signup and login features are not currently working on the deployed site (_for new users only_). They work locally, but not on Heroku. I am working on fixing this issue.

- For Heroku, please use one of the following test users to login:
  - username: testUser1, password: 1234
  - username: testUser2, password: 4567
  - username: testUser3, password: 8910 

```json
    {
        "username": "testUser1",
        "password": "1234"
    },
    {
        "username": "testUser2",
        "password": "4567"
    },
    {
        "username": "testUser3",
        "password": "8910"
    }
````

- Once logged in, the user can create posts and comment on other users' posts. The user can also edit and delete their own posts and comments.
  
![Screenshot of the homepage](./assets/screenshot-1.png)

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


---
## Issues

- Signup feature is not working on Heroku. It works locally, but not on Heroku. I am working on fixing this issue.

