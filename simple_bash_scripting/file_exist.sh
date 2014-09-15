#!/bin/bash

filename=$1

if [ -f $filename ]
then
  echo -e $filename exists
else
  echo -e $filename does not exist
fi

exit 0
