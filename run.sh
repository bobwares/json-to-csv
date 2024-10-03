#!/bin/bash

# Usage: ./run.sh input.json output.csv
#
#if [ $# -ne 2 ]; then
#  echo "Usage: ./run.sh input.json output.csv"
#  exit 1
#fi

node index.js "input.json" "output.csv"
