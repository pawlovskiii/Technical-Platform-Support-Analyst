# Recruitment Assignment - Technical Platform Support Analyst

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
  - [Installing dependencies](#installing-dependencies)
  - [Run the project](#run-the-project)

## General info

Your manager asked you to analyze some reporting data coming from Freshdesk ticketing system.
Please use Freshdesk’s API documentation to build API calls to extract the following information:

- CSAT score for today
- All tickets resolved today

Additionally, in the interview, I was supposed to solve an algorithm problem with a provided list of dictionaries (Python) or objects (JavaScript). I decided to extend the current repository to involve solutions both in Python and JS. I placed it in the **interview_algo_solved** folder. In the [Run the project](#run-the-project) I explained how to run these files with solutions. 

## Setup

These are the crucial steps to configuring and running the project. I provided solutions within Python and JavaScript.
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/pawlovskiii/Technical-Platform-Support-Analyst

# Go into the repository
$ cd Technical-Platform-Support-Analyst
```

### Installing dependencies

```bash
# To download all the necessary Python packages needed for the project
$ pip install -r requirements.txt

# Install dependencies for the JavaScript version
$ npm install
```

### Run the project

To run the Python version type the below commands in order:

```bash
$ cd py_version

$ python main.py
```

To run the JavaScript version type the below commands in order:

```bash
$ cd js_version

$ node main.js
```

To run the Python version of the algorithm task provided in the interview type the below commands in order:

```bash
$ cd interview_algo_solved

$ python pyVersion.py
```

To run the JavaScript version of the algorithm task provided in the interview type the below commands in order:

```bash
$ cd interview_algo_solved

$ node jsVersion.js
```
