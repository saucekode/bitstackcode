---
art_title: 'Project Bash: Task One - Writing Your First "Hello, World!" Script'
description: In the past few months, I have been learning about bash scripting,
  and with every new knowledge comes practice in order...
date: 2024-11-19T09:56:00.000Z
tags:
  - post
  - devops
layout: article.njk
---
In the past few months, I have been learning about bash scripting, and with every new knowledge, practice is important, so the knowledge sticks.

Today, I'll be starting the **Project Bash** note series where I will be working on tasks on Bash programming from beginner to advanced and documenting my approach, errors, and the fixes. Every script can be found on this repository.

For task one, I'll be working on something simple. It's a bash script that prints “Hello, World!” to the console.

**Task Approach**

* **Step one**: created the file using a text editor (e.g, vim, nano, emacs) by running the command: `nano [name-of-file].sh`.
* **Step two**: printed the word "Hello, World!" using the `echo` command. This is the full script:
  	`#! bin/bash
  	echo "Hello, World!"`
  	
* **Step three**: ran the script by specifying its path. `./[name-of-file].sh` and clicking enter. The file was created in my working directory, hence the use of a relative path.

**Errors encountered and fixes**

* **Permission denied**: this error was surprising, given the simplicity of the task. On further investigation, I realized my user didn't have executable rights to that script.
     	    - **The fix**: using the `chmod` command, which means **change modification**, I was able to assign executable rights to my user.
     	  Here's the full command:  `chmod u+x [name-of-file].sh`. This fixed the problem. 
     	  **u** stands for **user,** which is a type of user on Linux. 
     	  **+** is the operator used to add permissions in the symbolic approach to assigning permissions on Linux.
     	  **x** stands for **execute**.

   	Together, this means, assign an execute permission to the current user.

* **File not found**: this was the second error I encountered. It took me a while to understand this error because the file was clearly in my current directory. After some research, I discovered the issue was the path to the Bash interpreter. 

  The interpreter is the shebang line declared in step 2 of my task approach. This is what I declared: `#! bin/bash`, this is a relative path, relative means the bash file is in my working path, which wasn't the case, hence the file wasn't found error.  

  The shebang line specifies the path to the interpreter, which must be absolute, this means the interpreter would be a file located on the system's directory. 
  Why is the interpreter referred to as a file? Well, everything on Linux is a file, that includes the Bash interpreter.
     		
     		- **The fix**: using the right absolute path - `#!/bin/bash`. This would go straight to the system's bin directory.

**Lessons learned**: I would have done step 1 of my task approach differently. 		   

* **Here's what I discovered**: I would be working on a lot of scripts going forward, and this would require creating files. If I go with the nano approach, that means at every point, I would need to exit the editor and assign execute rights before running the script.
* **Here's what I would do instead**: I would use the `touch` command to create my file and assign the execute permissions simultaneously. The command would be: `touch [name-of-file].sh && chmod u+x [name-of-file].sh`. This is short and saves me time.

**Conclusion**: Writing and executing a simple "Hello, World" script was a great start. It introduced me to key concepts in Bash scripting, such as file permissions and the importance of the right interpreter path. Troubleshooting these issues have deepened my understanding, and I was able to find a more efficient way of handling file creation with the `touch` command.

Till my next note, ***ciao***.
