#!/bin/bash

#functionLab
# Demonstrates functions and script parameters.
# Functions

func1() {
  echo "This message is from func1()"
}

#----------------------------------------

func2() {
  echo "This message is from func2()"
}

#----------------------------------------

func3() {
  echo "This message is from func3()"
}

# Main script

# Prompt the user for a number from 1 to 3.
echo -n "Enter a number [1 2 or 3]: "
read choiceNumber

func$choiceNumber # Execute this function.
