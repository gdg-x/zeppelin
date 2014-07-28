@echo on
set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
set "SOURCE=..\..\css"

echo Optimizing style.css to style.min.css
cd %SOURCE%
java -jar %LOCAL_DIR%\yuicompressor-2.4.8.jar style.css -o style.min.css

pause