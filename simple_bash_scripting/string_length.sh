#!/bin/bash

echo -n "Enter first string: "
read string01

echo -n "Enter second string: "
read string02

string01Length=${#string01}
string02Length=${#string02}

echo "Length of [$string01]: " $string01Length
echo "Length of [$string02]: " $string02Length
