# Simultaneous Timers Assignment

### Submission by Samuel Jo

- How long you spent on the assignment.
  Spent 1.5 hrs building the timer logic, and managing data flow. 
  Spent 2 hrs laying out the skeleton & designing UI/UX; Includes language, color schemes, and spacings for a rich experience & responsive design.
  Total time = ~ 3.5 hrs.

- What you like about your implementation.
  I like that despite the many moving components, there are only two main parts. A button, and a collection of components.
  On initial load, the way the app begins with rendering a full screen button feels oddly satisfying to me.
  The first part is a button which updates the state array by pushing a new obj to the array.
  Second part is a collection of 'TimerCards'.
  By rendering a collection, I like how the app utilizes the virtual dom to render/update reusable components dynamically.

- What you would change if you were going to do it again.
  I would consider implementing redux to manage data.
  Depending on the average number of timers, I would redesign the squared card design into smaller rectangular boxes reminiscent of cassette tapes.

- How you made your design decisions. For example, if you looked at other timer apps/webapps for inspiration, please note that.
  At first, I drew 3 different wireframes to envision various button/text placements.
  After, I looked at other apps(app store) for color schemes & potential features.
  I redrew 3 wireframes with basic features, and took a poll within my household(4 members). I implemented the design with the most votes. 

- How you would test this if you had more time.
  Test if array initializes empty on initial load, 
  Test if array contains +1/-1 object when adding/removing an object.
  Test if I can break data flow in any way.
  Test how many timers I can have before having any performance issues.


-Features added
  - Allowing users to name timers ✅
  - Allowing a user to pause/resume/reset any existing timer ✅
  - Allows users to clear inputs before submitting ✅


---

### Context

When following a new recipe, you're often trying to keep track of timers at once.
For example, your dough might need to bake in the oven for 15 minutes while your
stew needs to simmer for 40 minutes. As you're working through the recipe, you
often realize that one timer is not enough for a given moment, so let's fix that!

## High Level Problem Statement

Create a simple webapp that allows the chef in you to easily keep track of multiple
timers. The user should be able to have any number of simultaneously running timers.
Aside from being able to create timers, and timers should disappear once they are done.

### Details

Avoid using libraries that solve too much of the problem. General purpose libraries
like React or Redux are fine, but a library that renders timers is not.

After you have a basic solution, here are some potential improvements to attempt:

- Allowing users to name timers
- Automatic reordering of timers based on which timers will run out first
- Allowing a user to pause/resume/reset any existing timer
- Allowing custom ordering of timers via drag and drop
- Any other polish or useful enhancements you can think of

### Submission Details

Include a README that covers:

- How long you spent on the assignment.
- What you like about your implementation.
- What you would change if you were going to do it again.
- How you made your design decisions. For example, if you looked at other timer apps/webapps for inspiration, please note that.
- How you would test this if you had more time.

If you did not use the starter code, please also include instructions on how to build and run your project so we can see and interact with the timer webapp you built.

### What we're looking for

1. Clean, readable, maintainable code
2. A sensible user experience and design for the final product

## Starter Code

This repository was initialized with `npx create-react-app client --template typescript`, and the autogenerated README is preserved below. To use the starter code:

1. Navigate to project directory
2. Run `npm install` to install project dependencies
3. Run `npm start`

Please feel free to use as much or as little of the starter code as you'd like

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).