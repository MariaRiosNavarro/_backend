// https://www.freecodecamp.org/news/get-started-with-nodejs/

// Types Of Modules in Node
// There are 2 types of modules in NodeJS:

// Built In Modules: These are modules included in Node by default, so you can use them without installation. You just need to import them and get started.
// External Modules: These are modules created by other developers which are not included by default. So you need to install them first before using them.
// Here is an image of popular built-in modules in NodeJS and what can you do using them:

// #Built In Modules:
// # -A------OS,Provides inpormation about the operating system
// # -B------PATH, Provides utility functions for working with file paths
// # -C------FS, File System Operations like Reading & Writing Files
// # -D------HTTP. Create HTTP Servers

//------------------------------------------------------------------------------------------------------------------------

// # -A------OS,Provides inpormation about the operating system

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

//------------------------------------------------------------------------------------------------------------------------

// # -B------PATH, Provides utility functions for working with file paths

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

//------------------------------------------------------------------------------------------------------------------------

// # -C------FS, File System Operations like Reading & Writing Files

//This module helps you with file handling operations such as:

// Reading a file (sync or async way)
// Writing to a file (sync or async way)
// Deleting a file
// Reading the contents of a director
// Renaming a file
// Watching for changes in a file, and much more
// Let's perform some of these tasks to see the fs (File System) module in action below:

//# ------------------How to create a directory using fs.mkdir()

// It takes two arguments:
// the path of the directory to be created and
// an optional callback function that gets executed when the operation is complete.
// The purpose of the callback function is to notify that the directory creation process has completed. This is necessary because the fs.mkdir() function is asynchronous

import fs from "fs";

fs.mkdir("./myFolder", (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Folder created");
  }
});

// # ------------------How to create and write to a file asynchronously using fs.writeFile()

//After the myFolder directory is created successfully, it's time to create a file and write something to it by using the fs module.
//There are basically 2 ways of doing this:

//# Synchronous Approach: In this approach,
// we create a file and write the data to it in a blocking manner,
// which means that NodeJS waits for the creation and write operation
// to complete before moving on to the next line of code.

// If an error
// occurs during this process, it throws an exception that must be
// caught using try...catch.

//# Asynchronous Approach: In this approach,
// we create and write data to a file in a non-blocking manner,
// which means that NodeJS does not wait for the write operation
// to complete before moving on to the next line of code.

// Instead, it takes a callback function that gets called once the entire
// process is completed. If an error occurs during the write operation,
// the error object is passed to the callback function.

//#In this tutorial, we will be using the fs.writeFile() function which follows the asynchronous approach.

//writeFile() is a method provided by the fs (file system) module in Node.js. It is used to write data to a file asynchronously.

//#  The method takes three arguments:
//#     The path of the file to write to (including the file name and extension)
//#     The data to write to the file (as a string or buffer)
//#     An optional callback function that is called once the write operation is complete or an error occurs during the write operation.

// we imported before import fs from "fs";

// const data = "Hi,this is newFile.txt";

// fs.writeFile("./myFolder/myFile.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Writen to file successfully!");
//   }
// });

//Since newFile.txt didn't exist previously, Hence the writeFile() function created this file for us on the provided path and then wrote the value in the data variable to the file. Suppose this file already existed. In that case, writeFile() will just open the file, erase all the existing text present in it and then write the data to it.

//!The problem with this code is: when you run the same code multiple times, it erases the previous data that is already present in newFile.txt and writes the data to it.

// In case you do not want the original data to get deleted and just want the new data to be added/appended at the end of the file, you need to make a little change in the above code by adding this "options object": {flag: 'a'} as the third parameter to writeFile() – like this:

// we imported before import fs from "fs";

const data = "Hi,this is newFile.txt";

fs.writeFile("./myFolder/myFile.txt", data, { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Writen to file successfully!");
  }
});

// # -------------------How to read a file asynchronously using fs.readFile()

//Again there are 2 ways of doing this: Synchronous approach and the Asynchronous approach (just like the previous function). Here we are going to use the readFile() function provided by fs module which performs the reading operation asynchronously.
//#The readFile() function takes 3 parameters:
//#The path to the file which is to be read.
//#The encoding of the file.
//#The callback function that gets executed once the reading operation is completed or if any error occurs during the reading operation. It accepts 2 parameters: first parameter stores the file data (if read operation is successful) and the second parameter stores the error object (if read operation fails due to some error).

// we imported before import fs from "fs";

fs.readFile("./myFolder/myFile.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File read successfully! Here is the data");
    console.log(data);
  }
});

//!The encoding parameter in the fs.readFile() method of Node.js is used to specify the character encoding used to interpret the file data. By default, if no encoding parameter is provided, the method returns a raw buffer.
//! If the readFile() method is called without providing an encoding parameter, you will see a result similar to this printed in the console:
//! <Buffer 54 68 69 73 20 69 73 20 73 6f 6d 65 20 64 6.....>

// #Other common encodings that can be used with readFile() include:

// 'ascii': Interpret the file contents as ASCII-encoded text.
// 'utf16le': Interpret the file contents as 16-bit Unicode text in little-endian byte order.
// 'latin1': Interpret the file contents as ISO-8859-1 (also known as Latin-1) encoded text.

//#We can remove the encoding und transform the Data to String like  console.log(String(data))

//# ---------------Reading and Writing to a File Synchronously

// Note that since these are synchronous operations, they need to be wrapped in a try...catch block. In case the operations fail for some reason, the errors thrown will be caught by the catch block.

//In the below code, we first create a new file: ./myFolder/myFileSync.txt and write to it using the writeFileSync() method. Then we read the contents of the file using the readFileSync() method and print the data in the console:

// -we imported before import fs from "fs";

// try {
//   // Write to file synchronously
//   fs.writeFileSync("./myFolder/myFileSync.txt", "myFileSync says Hi");
//   console.log("Write operation successful");

//   // Read file synchronously
//   const fileData = fs.readFileSync("./myFolder/myFileSync.txt", "utf-8");
//   console.log("Read operation successful. Here is the data:");
//   console.log(fileData);
// } catch (err) {
//   console.log("Error occurred!");
//   console.log(err);
// }

//# -----------------How to read the contents of a directory using fs.readdir()

// #The readdir() function accepts 2 parameters:

// #The path of the folder whose contents are to be read.
// #Callback function which gets executed once the operation is completed or if any error occurs during the operation. This function accepts 2 parameters: The first one which accepts the error object (if any error occurs) and the second parameter which accepts an array of the various files and folders present in the directory whose path has been provided.

// -we imported before import fs from "fs";

fs.readdir("./myFolder", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory read successfully! Here are the files:");
  console.log(files);
});

//# -------------------How to rename a file using fs.rename()

// Here's the syntax for the fs.rename() method:

// fs.rename(oldPath, newPath, callback);
// where:

// oldPath (string) - The current file path
// newPath (string) - The new file path
// callback (function) - A callback function to be executed when the renaming is complete. This function takes an error object as its only parameter.
// Let's rename the newFile.txt file to newFileAsync.txt:

// -we imported before import fs from "fs";

fs.rename("./myFolder/myFile.txt", "./myFolder/newFileAsync.txt", (err) => {
  if (err) {
    console.log("rename issue", err);
    return;
  }
  console.log("File renamed successfully!");
});

//# -------------------How to delete a file using fs.unlink()

// #Last but not the least, we have the fs.unlink() function which is used to delete a file. It takes in 2 parameters:
// #The path of the file which you want to delete, and
// #The callback function which gets executed once the delete operation is over or if any error occurs during the operation

// -we imported before import fs from "fs";

fs.unlink("./myFolder/myFileSync.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Deleted Successfully!");
});

//------------------------------------------------------------------------------------------------------------------------

//Ok, before we move forward to learn the HTTP Module and create our own servers, it's important to know about something called "Event driven programming".

//# -EXTRA: --------------------Event-Driven Programming

//------------------------------------------------------------------------------------------------------------------------

// # -D------HTTP. Create HTTP Servers
