#!/bin/bash

# Functions appearing before the main part of the script.

adder() {
  answer=$(($firstNumber + $secondNumber))
} # end of adder function.

subtracter() {
  answer=$(($firstNumber - $secondNumber))
} # end of adder function.

multiplier() {
  answer=$(($firstNumber * $secondNumber))
} # end of adder function.

divider() {
  answer=$(($firstNumber / $secondNumber))
} # end of adder function.

# Main part of the script.
# Check that the user provided a letter and two number.

if [ $# -ne 3 ]; then
  echo ""
  echo "Usage: Provide an operation (a, s, m, d) and two numbers"
  echo ""
  exit 1
fi

# Assign the passed numerical arguments.
firstNumber=$2
secondNumber=$3

# Call appropriate function depending on value of $1
if   [ $1 == "a" ]; then
  adder
elif [ $1 == "s" ]; then
  subtracter
elif [ $1 == "m" ]; then
  multiplier
elif [ $1 == "d" ]; then
  divider
fi

echo "Answer is $answer"

exit 0
