@echo on
set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
set "SOURCE=..\..\js"

echo Optimizing scripts.js to scripts.min.js
cd %SOURCE%
java -jar %LOCAL_DIR%\yuicompressor-2.4.8.jar scripts.js -o scripts.min.js

pause