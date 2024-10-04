#!/bin/bash

# Usage: ./run.sh input.json output.csv
#
#if [ $# -ne 2 ]; then
#  echo "Usage: ./run.sh input.json output.csv"
#  exit 1
#fi

node ./src/index.js "./src/input.json" "./src/output.csv"
