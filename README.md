[![Netlify Status](https://api.netlify.com/api/v1/badges/e4015997-e5a0-46dc-a633-595e36d6d62a/deploy-status)](https://app.netlify.com/sites/yycschools/deploys)

# YYC Schools Explorer

## Outline

This site is intended to help those in the Calgary area to explore various features of local schools.

## Development

### Getting the Project

In order to start development, you first need to clone the project:
`git clone git@github.com:EricRobertCampbell/yyc-schools-explorer.git`

This should create the folder `yyc-schools-explorer` in the current working directory. Within that should be the entire project. Note that you can rename the folder to whatever you want - it doesn't make a difference to the project inside.

### Making Changes

In order to add a feature or make a change, first make sure to checkout the most recent version of the `development` branch:

```
git checkout development
git pull
```

Then checkout a new branch based on that one and immediately link it to the branch on Github:

```
git checkout -b iss-7-complete-some-business
git push -u origin iss-7-complete-some-business
```

Now you can make whatever changes you need to. Once you're done, commit your changes and push them up:

```
git add .
git commit
git push
```

The `development` and `main` branches are protected - you can't push directly to them. Instead, you should open up a PR (pull request) from the branch you just created to `development`. To do so:

1. Navigate to the project's Github page
1. Go to the `Pull Requests` tab along the top
1. Click the `New pull request` button
1. Select the base branch (`development`) and the one to merge in (the one you're working on - in this case, `iss-7-complete-some-business`)
1. Click `Create pull request` and fill in some additional information about the PR
1. At this point it will need review before it can be merged - feel free to designate whoever you'd like!

## User Stories

This sections includes some ideas of who the user of the site might be and what they might hope to accomplish. They are in no particular order.

1. A new parent whose child is just about to reach school age. They are trying to decide which local school they should send their child to, and are interested in various facets (scholastic, extracurricular, &c.) when making their decision
2. A parent who is moving to Calgary in the near future is going to use school quality (whatever that means) to influence which neighbourhood they would like to move to. They would like a way to account for things like home price when looking at different schools.
3. Someone (perhaps a parent, teacher, or administrator) is looking to compare different metrics for two (or three, or...) different schools. They would like a way to choose the different things to compare and would like to examine each of those things side-by-side in an intelligible manner
