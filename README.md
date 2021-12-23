# Social Networking API

## Description
This is a back end API for a social networking platform. In this case, we are focused on Friends, "Thoughts", and "Reactions". With this API, you are able to set up new users, link users to each other as friends, and also add thoughts to users. Then, users can react to thoughts. The basic CRUD operations have been set up and implemented here in a NoSQL environment. This uses Express.js and Mongoose as npm packages in order to run this. It also requires a MongoDB connection.

There is no front-end website for this repository. This is strictly back-end. In order to manipulate the database, you'll need to use a program like Insomnia or Postman or you could use Node, or develop a front end to work with it.

For a video walkthrough of installing and using the API, please see this [YouTube video](https://youtu.be/zppbD8Y3bKI)

## Installation Instructions
1. Install a MongoDB instance on your computer or server.
2. Clone the repository into a folder location
3. In Git Bash, run `npm i`
4. Once the installation is complete, run `npm start`
5. From there the connection is up and running

## Endpoints and requirements
- Users
    - `<baseURL>:<port>/api/users`
        - `GET` request gets a list of all users in the database
            - No body needed
        - `POST` request will create a new user in the database
            - JSON object required with the keys: `username, email`
    - `<baseURL>:<ports>/api/users/<userId>`
        - `GET` request gets information on a specific user by ID
            - No body needed
        - `PUT` request updates a single user.
            - JSON object requred with the keys to update
        - `DELETE` request removes a single user from the database
            - No body needed
    - `<baseURL>:<ports>/api/users/<userId>/friends/<friendId>`
        - `PUT` request adds the user with the ID `<friendId>` to the user with ID `<userId>`'s friend list
            - No body needed
        - `DELETE` request removes the user with the ID `<friendId>` from the user with the ID `<userId>`'s friend list
            - No body needed
- Thoughts
    - `<baseURL>:<port>/api/thoughts`
        - `GET` request gets a list of all thoughts in the database
            - No body needed
        - `POST` request adds a new thought to the database
            - JSON object required with the keys: `thoughtText, username, userId`
    - `<baseURL>:<port>/api/thoughts/<thoughtId>`
        - `GET` request gets information on a specific user by ID
            - No body needed
        - `PUT` request updates a thought with new info
            - JSON object required with keys to update
        - `DELETE` request removes thought from database
            - No body needed
    - `<baseURL>:<port>/api/thoughts/<thoughtId>/reactions`
        - `PUT` request adds a reaction to a thought
            - JSON object with the keys: `reactionBody, username`
    - `<baseURL>:<port>/api/thoughts/<thoughtId>/reactions/<reactionId>`
        - `DELETE` request removes a reaction from a thought
            - No body needed

## Author
Elliott Kvamme, 2021
