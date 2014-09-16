#!/bin/bash

# Section that reads the input.
echo -n "Enter any color code [R or Y or G]: "
read color

# Section that compares the entry and displays a message.
if [ "$color" == "R" ]; then
  echo "Stop! Leave way for others."
elif [ "$color" == "Y" ]; then
  echo "Get ready, your way will be open shortly."
elif [ "$color" == "G" ]; then
  echo "Move... It is your turn to go"
else
  echo "Incorrect color code."
fi
