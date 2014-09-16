#!/bin/bash

echo "Welcome to File Creator!"
echo -n "What name do you want to give the new directory? "

# Get the directory's name from user input.
read dirName

# Make the directory.
mkdir $dirName

# Change the current working directory to the new directory.
cd $dirName

# Display the current working directory.
echo "This directory is called `pwd`."

# Create some files.
touch file1 file2 file3

echo "This is $dirName/file1" > file1
echo "This is $dirName/file2" > file2
echo "This is $dirName/file3" > file3

echo "The files under $dirName are:"
ls -hl

# Show the content of each file.
echo "The content of each file:"
echo "file1 :"
cat file1
echo "file2 :"
cat file2
echo "file3 :"
cat file3
