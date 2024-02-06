# wk18-MySocialBackEndAPI-NoSQL

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.
## Challenge
Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site. packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.
Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data 
```
### Acceptance Criteria 
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock-Up
```
The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

Demo of GET routes to return all users and all thoughts being tested in Insomnia.

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.
```

# Getting Started
```
Clone the repo in your desired destination,
run the terminal and run:
- npm i, then
- npm run watch
You're set!
```

# API Routes
```
 /api/users 
```

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:
```
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

PUT to update a user by its _id

DELETE to remove user by its _id

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

/api/thoughts

GET to get all thoughts

GET to get a single thought by its _id

POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
PUT to update a thought by its _id

DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field

DELETE to pull and remove a reaction by the reaction's reactionId value

A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

# credits
Repo: https://github.com/SevenImm/wk18-MySocialBackEndAPI-NoSQL
creator: https://github.com/SevenImm
walk vid: https://drive.google.com/file/d/1YpsN05gueFHuLaPyZmzzK8M5DekUDylw/view


