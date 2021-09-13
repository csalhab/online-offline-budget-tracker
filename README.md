# Unit 19 PWA Homework: Online/Offline Budget Trackers

## Description

This app is a Budget Tracker that works while online as well as should the user go offline.

This app is released and available publically via a deployment to Heroku.

[You may find the Online/Offline Budget Tracker app here:](https://ccs-on-offline-budget-tracker.herokuapp.com/)

This app's front-end is engineered using ExpressJS and it is also powered by Mongoose & MongoDB (and this NoSQL DB is hosted on MongoDB Atlas).

The app's backend is a RESTful service supporting its needed CR operations.

IndexedDB is what allows this app to work offline.

Test out the app by loading the url and then:

1. going offline, using Chrome's Developer Toolbar's (you may access this in by going in Chrome's 3 dots submenu item which is found all the way towards the right edge) Network tab where you change from "No throttling" to "Offline"

2. then go to its Application tab and under Storage, you should be able to now twirl open (that is, click the arrow and it'll switch to a dropdown arrow), and then twirl open the "BudgetDB - https://ccs-on-offline-budget-tracker.herokuapp.com/" that appears and then select the "BudgetStore" item that appears there.

3. on its panel that opens to the right, it is currently empty but once you now interact with the app by either entering a name of a transaction in its input field and a transaction amount and then clicking either "+Add Funds" or "-Subtrack Funds".

4. at this point a "Data may be stale" notification will appear in the panel. Just click the circular refresh icon in the panel and you will see data on the transaction you entered stored.

5. you may enter more transactions and just repeat step 5 to see the new transactions you entered.

6. once you are ready (pretending to be back offline), return to the Network tab and change "Offline" selection back to "No throttling" and return to the Application tab and make sure you have the twirled BudgetDB database and its BudgetStore object selected.

7. now, just click the circular refresh icon in the panel and you will see that transaction data that was stored is now no longer in this IndexedDB. The data has been uploaded to and now stored in the remote MongoDB.

## Table of Contents

- [Description](#description)
- [Online Offline Budget Tracker](#online-offline-budget-tracker)
- [User Story](#user-story)
- [Business Context](#business-context)
- [Acceptance Criteria](#acceptance-criteria)
- [Commit Early and Often](#commit-early-and-often)
- [Submission on BCS](#submission-on-bcs)
- [Hint](#hint)

## Online Offline Budget Tracker

Add functionality to our existing Budget Tracker application to allow for offline access and functionality.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

- Enter deposits offline

- Enter expenses offline

When brought back online:

- Offline entries should be added to tracker.

## User Story

AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

---

## Commit Early and Often

- One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

- Follow these guidelines for committing:

  - Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

  - Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

  - Don't commit half done work, for the sake of your collaborators (and your future self!)

  - Test your application before you commit to ensure functionality at every step in the development process

- We would like you to have well over 200 commits by graduation, so commit early and often!

- Deploy your application with [Heroku and MongoDB Atlas.](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

- You are required to submit the following:

  - the URL to the deployed application

  - the URL to the Github repository

---

## Hint

- In order to cache dynamic content, i.e. users' inputs for withdrawals or deposits, incorporate `indexedDB` from the previous module.

- Use [Google](https://www.google.com) or another search engine to research this topic.
