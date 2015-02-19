#!/bin/bash

if [ "$#" -ne 1 ]; then
	FILES="../../js";
else
    FILES=$1;
fi


for f in $FILES/*.js;
do
	if [[ $f != *".min"* ]]; then
		echo "Processing $f ..."
		echo "java -jar yuicompressor-2.4.8.jar $f -o ${f%.js}.min.js"
		java -jar yuicompressor-2.4.8.jar $f -o ${f%.js}.min.js
	fi
done