---
art_title: Linux system file structure
description: SCA X TDD program came to an end less than a month ago and yes, I
  have been on fire until workload came and tried to pour ice water on my red
  ginger...
date: 2024-08-30T20:14:00.000Z
tags:
  - post
  - devops
layout: article.njk
---
**SCA X TDD** program came to an end less than a month ago and yes, I have been on fire until workload came and tried to pour ice water on my red ginger but anyway, that’s behind us.

For the next two weeks, I’ll be focusing on Bash.

> Guys! Did you know Bash means **Bourne again shell**? I beht you didn’t!
> 

Enough bragging now.

On my bash study, I’m starting with **Linux**. I already know a few Linux commands but haven’t really gone in-depth and that is when I came across this book — “*Linux basics for hackers*” from Gwyneth of [Learntocloud.guide](http://Learntocloud.guide) and guys! I can’t believe I finished chapter one in one sitting and didn’t even blink. Likewise, I must say, the book is interesting and easy to follow.

If you’re looking to learn Linux in an engaging and interactive way, I believe you should consider taking a look. But quick disclaimer, it’s originally written for hackers, and you might see stuff like “Kali”, and dem hacker terms, plus, commands which I guess are unique to hacking. But as long as you have a Unix-based terminal, you can follow along.

In today’s note, I’ll be talking about the **Linux system file structure**. 

One of the question that constantly popped in my mind was: *why Linux for DevOps? Windows? macOS? What about them?*

Well, Linux has built-in support for containerization and virtualization, which are core DevOps practices. It provides features like **cgroups** and **namespaces** which are essential and fundamental to these practices. 

**Namespaces** provide isolation. This is the underlying functionality of Docker. Containers live in this bubble where they have their own processes, network interfaces, and file systems. 

Containers think they are the system, when in reality, they are just another process running in your local machine that has been allocated resources by cgroups or control groups. 

Namespaces offer the process abstraction relative to both your machine and between containers, cgroups allocate resources and manage how these resources are distributed.

*Whoosh!* There is a lot to unpack here, but we will stay on course. 

Now, to the note of the day —- Linux system file structure.

Linux is highly customizable and uses text-based configuration, basically, everything on there can be edited easily. Here is a breakdown of the Linux file structure:

**root:** The home directory for the root user, requiring root permissions.

**sbin (system binaries):** Contains essential system binaries accessible only by the admin for system repairs and updates, typically in single-user mode.

**boot:** Holds all files necessary for booting, including the bootloader. Handle with care.

**dev:** Directory for device files; in Unix, every device is treated as a file, such as `/dev/sda` for disks.

**etc:** Houses system-wide configuration files, not user-specific configs.

**lib:** Contains essential libraries needed by binaries in `/bin` and `/sbin`.

**mnt, media:** Directories for mounting devices like USB sticks or external drives; `/mnt` is for manual mounts, while `/media` is managed by the OS.

**opt:** Stores optional software, especially manually installed or vendor-supplied applications.

**proc:** Contains pseudo-files that provide information on system processes and resources.

**run:** A temporary file system in RAM for storing runtime information; contents are cleared on shutdown.

**srv:** Used for service data, such as files for a web or FTP server.

**sys:** Interfaces with the kernel, functioning similarly to `/run`.

**tmp:** Temporary files directory, cleared on shutdown.

**usr (Unix System Resources):** Houses user applications and related files.

**var:** Stores variable data expected to grow, such as logs and databases.

**home:** User-specific directories; each user has access only to their own home directory, with hidden files typically stored here.

Finally, we’ve come to the end of this note on Linux system file structure.
