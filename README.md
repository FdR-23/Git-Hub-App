# Git-Hub-App
Challenge
(Full-stack || Back-end || Front-end)

Challenge instructions
You must provide a link for your live app.

You have to create a private repository for your code, you can use Bitbucket it allows you to create private repositories for free, but feel free to use any git repository that you prefer, the only requirement is that it must be private.

When you finish the challenge, please share the app repository with willian.melo@shawandpartners.com and paste the repository URL on test description field at app.shawandpartners.com, so we will be able to check your code.

This test is applied for Full Stack, Back-End and Front-End developers, but some steps are exclusive for some roles. To set what steps must be implemented by each role, we use the following tags:

[FULL-STACK]	[BACK-END]	[FRONT-END]
If you applied for the full-stack role, you must implement this step

If you applied for the back-end role, you must implement this step

If you applied for the front-end role, you must implement this step

Rules
You can use any back-end language/framework, but NodeJS is very appreciated. For the front-end, you must use a framework (React, Angular, Vue, Preact, etc…) but React is very appreciated as well. However, if you are testing for the Ruby on Rails Engineer position, please use that language when writing your test.

Pay attention to your configurations and dependencies, projects that do not compile or does not boot up will be ignored.

If your project demands any custom configuration, you have to provide a README.md file with the instructions to execute your application.

For deploying, we recommend using a free service like Render.

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