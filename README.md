# NU Technology Frontend Coding Challenge

Welcome to the NU Technology frontend coding challenge! Please read the following instructions carefully.

**Your goal is to set up an React application which enables the user to sumbit create account form.**

# Contents

-   [Business need](#business-need)
-   [Use cases](#use-cases)
-   [Demo Page](#demo-page)
-   [Evaluation criteria](#evaluation-criteria)
    -   [Technology requirements](#technology-requirements)
    -   [Code requirements](Criteria.md#must-have)
-   [How to submit](#how-to-submit)
-   [Time limit](#time-limit)

# Business need

The main goal is for the user to submit the create account form.


# Use cases

- The user shall be able to:
  - Fill the create account form and upon submitting run through the validation and show the result.
  - Add empty validations for all the fields
  - Add a validation to make sure password and confirm password are matching
  - Clicking on the show password check box should display the password in readable format and vice versa (see demo images below)
  - Upon successful display a success message along with the submitted data on top of the form
  - Display the validation errors at the top
  - Successful submit should clear the form

Note:- The interactions should not refresh the page.

# Demo Page

## Create Account Form
![Alt text](./assets/demo.png?raw=true "Title")

## Create Account Form with show password clicked
![Alt text](./assets/demo_with_show_password.png?raw=true "Title")

## Create Account Form without show password clicked
![Alt text](./assets/demo_without_show_password.png?raw=true "Title")

# Evaluation criteria

## Technology requirements

**React** and **JavaScript** are mandatory requirements. Apart from this, you can use any libraries, task runners and build processors. ES6 and TypeScript are highly encouraged.

## Code requirements

The full criteria for evaluating the coding challenge can be found [here](./Criteria.md).

# How to submit

- If you decided to use codesandbox.io
  - Go to https://codesandbox.io/s/react-create-account-1c5dc
  - Complete your project as described in codesandbox.io
  - Ensure everything you want is compledted before submitting the project.
  - To submit the project go to the menu section -> File -> Export to ZIP
  - Email the zipped file to your point of contact.

- If you are developing on your machine
  - Clone this repository.
  - Complete your project as described above within your local repository.
  - Ensure everything you want to commit is committed before you bundle.
  - Create a git bundle: `git bundle create your_name.bundle --all`
  - Email the bundle file to your point of contact.

**In order to be fair to all candidates, please refrain from sharing your solution on public repository hosting services such as GitHub and Bitbucket.**

# Time limit

There is no hard time limit for this coding challenge. However, we believe that 1-2hours is sufficient for the must-have parts of the application. While we appreciate all the effort put into the challenge, we also do not want to take up too much of your time. Our advice is to focus on making sure [that the application works properly and has some tests](Criteria.md#must-have) before moving on to secondary objectives.

Good luck,
The NU Technology Team
