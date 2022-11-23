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

## Setup

These are the crucial steps to configuring and running the project.

### Installing dependencies

```bash
# To download all the necessarily Python packages needed for the project
$ pip install -r requirements.txt
```

### Run the project

```python
python .\get_CSAT_score.py

python .\get_resolved_tickets.py
```