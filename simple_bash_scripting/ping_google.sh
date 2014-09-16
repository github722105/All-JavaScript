#!/bin/bash
echo "Ping google.com"
echo "ping 173.194.121.7"
ipAddress="173.194.121.7"

if [ ! -z $ipAddress ] ; then
  ping -c 1 $ipAddress
  if [ $? -eq 0 ] ; then
    echo "Machine is giving ping response"
  else
    echo "Machine is not giving ping response"
  fi
else
  echo "IP Address is empty"
fi
