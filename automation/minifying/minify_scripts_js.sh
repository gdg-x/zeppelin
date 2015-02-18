#!/bin/bash

echo "Optimizing scripts.js to scripts.min.js"
java -jar yuicompressor-2.4.8.jar ../../js/scripts.js -o ../../js/scripts.min.js