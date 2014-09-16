#!/bin/bash

# Prompt for a user name ...
echo -n "Please enter your age: "
read age

if [ $age -lt 20 ] || [ $age -ge 50 ] ; then
  echo "Sorry, you are out of the age range."
elif [ $age -ge 20 ] && [ $age -lt 30 ] ; then
  echo "You are in your 20s."
elif [ $age -ge 30 ] && [ $age -lt 40 ] ; then
  echo "You are in your 30s."
elif [ $age -ge 40 ] && [ $age -lt 50 ] ; then
  echo "You are in your 40s."
fi

exit 0
