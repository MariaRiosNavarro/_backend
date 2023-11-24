// https://www.freecodecamp.org/news/get-started-with-nodejs/

// my tests

// Types Of Modules in Node
// There are 2 types of modules in NodeJS:

// Built In Modules: These are modules included in Node by default, so you can use them without installation. You just need to import them and get started.
// External Modules: These are modules created by other developers which are not included by default. So you need to install them first before using them.
// Here is an image of popular built-in modules in NodeJS and what can you do using them:

// Built In Modules:
// OS,Provides inpormation about the operating system
// PATH, Provides utility functions for working with file paths
// FS, File System Operations like Reading & Writing Files
// HTTP. Create HTTP Servers

// !OS,Provides inpormation about the operating system

import os from "os";

// os.uptime()
const systemUptime = os.uptime();

// os.userInfo()
const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
const otherInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// !os.type() - Tells the name of the Operating System
// !os.release() - Tells the release version of the Operating System
// !os.totalMem() - Tells the total amount of memory available in bytes
// !os.freeMem() - Tells the total amount of free memory available in bytes

// Let's Check The Results:
console.log("systemUptime", systemUptime);
console.log("userInfo", userInfo);
console.log("otherInfo", otherInfo);

// systemUptime 13667
// userInfo {
//   uid: 501,
//   gid: 20,
//   username: 'supercoder',
//   homedir: '/Users/supercoder',
//   shell: '/bin/zsh'
// }
// otherInfo {
//   name: 'Darwin',
//   release: '22.2.0',
//   totalMem: 17179869184,
//   freeMem: 907608064
// }

// os.uptime() tells the system uptime in seconds. This function returns the number of seconds the system has been running since it was last rebooted. If you check the first line of the output: 13667 is the number of seconds, my system has been running since it was last rebooted. Of course, it will be different for you.
// os.userInfo() gives the information about the current user. This function returns an object with information about the current user including the user ID, group ID, username, home directory, and default shell. Below is the breakdown of the output in my case:

// !The PATH Module

//The PATH module comes in handy while working with file and directory paths. It provides you with various methods with which you can:

// Join path segments together
// Tell if a path is absolute or not
// Get the last portion/segment of a path
// Get the file extension from a path, and much more!
// You an see the PATH Module in action in the code below.

import path from "path";

const myPath =
  "/Users/supercoder/Documents/supercode/repos/_BACKEND/_u_24_11/theory.js";

const myPathB = "./theory.js";

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
  test: "test",
};

const pathInfoB = {
  fileName: path.basename(myPathB),
  folderName: path.dirname(myPathB),
  fileExtension: path.extname(myPathB),
  absoluteOrNot: path.isAbsolute(myPathB),
  detailInfo: path.parse(myPathB),
  test: "testB",
};

//
// !path.basename(myPath): The basename() function accepts a path and returns the last part of that path. In our case, the last part of myPath is: theory.js.
// !path.dirname(myPath): The dirname() function selects the last part of the path provided to it and returns the path to it's parent's directory. In our case, since the last part of myPath is theory.js. The dirname() function returns the path to the parent directory of theory.js (the folder inside which theory.js file lies), i.e, /Users/supercoder/Documents/supercode/repos/_BACKEND/_u_24_11/. It can be also thought as: the dirname() function simply excludes the last part of the path provided to it and returns the leftover path.
// !path.extname(myPath): This function checks for any extension on the last part of the provided path and it returns the file extension (if it exists), otherwise it returns an empty string: ''. In our case, since the last part is theory.js and a file extension exists, we get '.js' as the output.
// !path.isAbsolute(myPath): This tells whether the provided path is absolute or not. On Unix-based systems (such as macOS and Linux), an absolute path always starts with the forward slash (/). On Windows systems, an absolute path can start with a drive letter (such as C:) followed by a colon (:), or with two backslashes (\\). Since the value stored in myPath variable starts with /, therefore isAbsolute() returns true.

// However, if you just change the myPath variable to this: /Users/supercoder/Documents/supercode/repos/_BACKEND/_u_24_11/theory.js (converting it to a relative path), isAbsolute() returns false.
// path.parse(myPath): This function accepts a path and returns an object which contains a detailed breakdown of the path provided to it. Here is what it returns when we provide the myPath variable

// Let's See The Results:
console.log("PATHINFO", pathInfo);
console.log("PATHINFOB", pathInfoB);

//!2 differences are to be noted here:

//Difference in path separators: In Windows, file paths use the backslash (\) as the separator between directories, while in macOS/Linux (which is a Unix-based system), file paths use the forward slash (/) as the separator.
//Difference in root directory of the users files: On Windows, the root directory for a user's files is commonly found at C:\Users\username, whereas on macOS and Linux, it is located at /Users/username/. While this holds true for most Windows, macOS, and Linux systems, there may be some variations in the exact location of the user's home directory based on the system's configuration.

// With this in mind, let's move ahead and understand some other functions provided by the path module:

// !path.sep: sep is a variable which contains the system specific path separator. For Windows machine: console.log(path.sep) prints \ in the console while in case of macOS or Linux, path.sep returns a forward slash ( / ).
// !path.join(<paths>): The path.join() function accepts path(s) as strings. It then joins those paths using the system specific path separator and returns the joined path. For example, consider this code:

console.log("path.sep is   ->", path.sep);

// console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))

//The above code prints different results for different Operating Systems.
//In Windows, it will give this output: grandParentFolder\parentFolder\child.txt while in macOS/Linux, it will give this output: grandParentFolder/parentFolder/child.txt. Note that the difference is only in the path separators - backward slash and forward slash.

//!path.resolve(<paths>): This function works in a similar way as compared to path.join(). The path.resolve() function just joins the different paths provided to it using the system specific path separator and then appends the final output to the absolute path of the present working directory.
//Suppose you are a Windows user and the absolute path to your present working directory is this: C:\Desktop\NodeJSTut, If you run this code:

// console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'));
// You will see the following output in the console:

// C:\Desktop\NodeJSTut\grandParentFolder\parentFolder\child.txt
// The same is applicable to a macOS or a Linux user. It's just the difference in the absolute path of the present working directory and the path separator.

// # The FS Module

//This module helps you with file handling operations such as:

// Reading a file (sync or async way)
// Writing to a file (sync or async way)
// Deleting a file
// Reading the contents of a director
// Renaming a file
// Watching for changes in a file, and much more
// Let's perform some of these tasks to see the fs (File System) module in action below:
