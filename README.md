# Angular Heroku example

Example project that illustrates how to prepare a generated Angular app and deploy it to [Heroku](http://www.heroku.com).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

The example app is [available on Heroku](https://angular-gitlab-heroku.herokuapp.com/).

## Required

- [Nodejs](https://nodejs.org) installed
- [Angular CLI](https://github.com/angular/angular-cli) installed
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed

## Running in production mode on localhost

When you start your application during development using `ng serve`, your Angular app runs in development mode. Angular starts a small webserver, serves your app, and watches for code changes.

When you deploy your application to an online cloud provider, your app runs in production mode. You do not use `ng serve` then but you must provide your own webserver that hosts your application. In our case, this webserver is realized in the `\src\server.js` file. Angular provides the `ng build` command to build a production version of your app. The production release, an efficient and minimized version of your application, is placed in the `/dist` folder. When de user navigates to the URL that is linked to your online deployed webserver, the app is downloaded from the `/dist` folder to the user's browser and started.

To verify that everyting works in production mode, you can build and run your production-ready application on localhost using the following commands.

```
ng build --prod --aot
node src\server.js
```

## Creating an app on Heroku

- Go to [Heroku](http://www.heroku.com) and create a new app.
- On the Heroku dashboard, go to 'Deploy'.
- Follow the steps under 'Deploy using Heroku Git'.

If all is well, that means your tests succeed and your app has been built in production mode, your app is available on Heroku after a push to GitLab.

## More Actions

Some more options on this project:

### Run Prettier on all files

Prettyfies your code.

```
npm run pretty
```

### Run tslint

Validates the coding style of your files.

```
npm run lint
```

### Run Sonar scan

Scans your files and gathers Sonar metrics. See the results at [Avans SonarQube](https://sonarqube.avans-informatica-breda.nl/dashboard?id=angular-gitlab-heroku).
Check the [sonar-project.properties](https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/sonar-project.properties) file and provide the required environment variables `SONAR_LOGIN_KEY` and `SONAR_PROJECT_KEY`. You'll find these in your online SonarQube project configuration. You can add your own environment variables in the same way if needed.

```
npm test
npm run sonar
```

### Git push without validation

Should you want to skip the [Husky](https://www.npmjs.com/package/husky) Githooks:

```
git push origin master --no-verify
```

## Troubleshooting

To inspect the logging on Heroku, install the [Heroku Command Line Interface](https://devcenter.heroku.com/articles/heroku-cli), log in, and type

```
heroku logs --tail
```

Type `Ctrl+C` to stop.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
