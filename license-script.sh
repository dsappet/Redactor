#!/usr/bin/env bash
#

echo "executing license script!!"
OUTPUT="$(yarn licenses list)"
echo "${OUTPUT}"

echo "Attempting to push code to server"
