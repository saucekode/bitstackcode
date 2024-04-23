---
title: Build a Custom WC Tool
description: Recently, I have been looking for personal projects to work on that
  don't follow the backend norm...
author: Chiamaka Mbah
date: 2024-04-20T14:28:00.000Z
tags:
  - post
---
Recently, I have been looking for personal projects to work on that don't follow the backend norm -- CRUD. Fortunately, I stumbled on [this guy](https://x.com/@johncrickett) on X, his name is John Crickett. He posts coding challenges every weekend and they look like a challenge.

For my first article, I will be attempting the [wc tool challenge](https://codingchallenges.fyi/challenges/challenge-wc/) and sharing my thought process.

Let's go!

## A very short intro to wc tool

WC short for word count is a terminal utility tool used for counting words, characters, bytes, and lines in a file or standard input. 

Yeah. That's it. If you're interested in an in-depth explanation of the workings of the wc util, you can check its manual in your terminal using this command:

`man wc`

Now you understand what we're trying to build, let's begin.

## Requirements

Every application should follow a set of instructions or guidelines to determine the finished product. For our wc tool, let's outline its capabilities.

#### What should our tool be able to do?

- Display the number of bytes in a file or from standard input using a specific option.
- Display the number of lines in a file or from standard input using a specific option.
- Display the number of words in a file or from standard input using a specific option.
- Display the number of characters in a file or from standard input using a specific option.
- Display all of the above statistics without requiring a specific option.

Once we can achieve all five requirements, then our tool is ready for **Go-Live**. For this app, we will be running unit tests.

### Coding time
Set the standard input. I will be using BufferedReader, it's more efficient and performs well with larger files.

`BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
`
