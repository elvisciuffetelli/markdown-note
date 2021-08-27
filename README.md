# Markdown-note
## A react / Node.js app deployed to Heroku with login which takes markdown notes and save them to a mongodb cluster

### Link to the app (please give it some time for the initial loading since it's a free Heroku dyno and goes in sleep mode in case of inactivity): <https://markdown-notes-react-node-app.herokuapp.com/>

### Pushing updates to your production application

As you continue to develop your app, you will want a way to deploy new code to production easily. Heroku makes this very straightforward.

Once you add new code to your app, simply run `npm run client:build` from the root before you push the new code to Github (note that this is not necessary for server-side code).
Heroku will automatically rebuild your application once new code is committed to the master branch on GitHub.

Let’s see this in action.
In client>src>App.js, change the hardcoded string “Hello from the frontend!” to “Here is our new feature!”.
Save the file and run the following command in your terminal window:

`npm run client:build`

This will create a new production build of your application containing the new string. Once the build as completed, stage your changes by running:

`git add -A`

Next, commit your changes by running:

`git commit -m 'A new feature'`

Finally, push your changes to GitHub by running:

`git push`
