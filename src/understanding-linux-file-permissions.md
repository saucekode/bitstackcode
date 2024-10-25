---
art_title: Understanding Linux File Permissions
description: In my previous article, I went down the Linux file structure rabbit
  hole, and we discovered some pretty interesting stuff -- in Linux everything
  is a file and can be easily manipulated...
date: 2024-10-25T01:25:00.000Z
tags:
  - devops
layout: article.njk
---
In my previous article, I went down the Linux file structure rabbit hole, and we discovered some pretty interesting stuff -- in Linux everything is a file and can be easily manipulated.

But then, you can't manipulate stuff you don't have the right to, hence why we would be delving into the world of permissions today.

Before we begin, let's talk about **users**. 

**Linux users** are generally grouped into three types: **user**, **group**, and **other**.

* **User** is a system user, meaning this type of user was created by the system and belongs to the system.

* **Group** is an entity where users can belong. It can be created on its own or once you create a user, it gets created automatically by the system with its identifier being the name of the user. 

  Quick example: if you create a user called John, if John isn't explicitly added to a group by you, the system creates a group called John and makes John, the user, a member of that group.

* **Other** is any other user that doesn't belong to a group or isn't created by the system.

