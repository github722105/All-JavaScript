#!/bin/bash

echo -n "Enter first number: "
read number_01

echo -n "Enter second number: "
read number_02

echo "Mathematical Operations"
echo "1. Addition"
echo "2. Subtraction"
echo "3. Multiplication"
echo -n "Choose an operation [1 2 3 ]: "
read math_operation

if [ $math_operation -eq 1 ]; then
  echo "Addition result: " $(($number_01 + $number_02))
elif [ $math_operation -eq 2 ]; then
  echo "Subtraction result: " $(($number_01 - $number_02))
elif [ $math_operation -eq 3 ]; then
  echo "Multiplication result: " $(($number_01 * $number_02))
fi
