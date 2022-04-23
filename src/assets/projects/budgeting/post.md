---
title: Budgeting App
subtitle: A student focused budgeting app
tags: ["ts", "uni", "nestjs", "flutter", "app", "gql", "mdb"]
date: 2021-01-01
---

I built this app for my 3rd year project. It featured a robust transaction processing and categorisation system 
and budgeting system

This was my second attempt at building a budgeting app, after [Lucrum](https://jamescwaters.com/projects/lucrum) - 
although this one was far more tailored towards non-technical 'end-users' who wanted to spend as little
time setting up the app as possible.

The backend uses NetJS, and features a robust pipeline for automatically ingesting, processing and
categorising transactions, and generates insights based off of them, such as daily/weekly/monthly spending,
estimating recurring transactions like subscriptions and rent, identifying transactions to
other accounts and to friends, and estimating future spending.

The budgeting feature is based off 'You Need A Budget's 'envelope' system, where you assign
different amounts of money to different categories like 'rent', 'food', 'travel' etc. I extended the system
and tailored it to university students to take into account student loans and summer income, and to rebalance everything
based on weekly and monthly spending so that students don't run out of money before the end of the year.

The frontend is built using Flutter, with communication handled with GraphQL.
