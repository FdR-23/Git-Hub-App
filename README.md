# Git-Hub-App
Challenge
(Full-stack || Back-end || Front-end)



On this test
You will have to consume the GitHub APIs, more precisely the users and repositories endpoints, and create an application.

The endpoints' documentation that you will use for this test are available at:

https://developer.github.com/v3/
https://developer.github.com/v3/users/
https://developer.github.com/v3/repos/
STEPS
[full-stack] [back-end]
Create an API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints must be provided:

GET - /api/users?since={number}
This endpoint must return a list of GitHub users and the link for the next page.

GET - /api/users/:username/details
This endpoint must return the details of a GitHub user

GET - /api/users/:username/repos
This endpoint must return a list with all user repositories

[full-stack (optional)] [back-end]
Create tests for your application covering all endpoints.

[full-stack] [front-end]
Create a screen that will list all users from GitHub and will display their ID and Login. Remember, you can’t list all users at once, you will have to use pagination.

(if you are doing this test for the front-end role, you have to consume the GitHub endpoints directly)

(if you are doing this test for the full stack role, you must consume the endpoints that you created at step 1)

[full-stack] [front-end]
Using the screen created in step 3, create a new screen that will display the details of a user (ID, Login, Profile URL and the date of the login creation).

[full-stack] [front-end]
On the details screen (created on step 4) add a table that will display the public repositories of the user, this table must contain the ID, name, and URL to the repository.

Have fun!! 🙂