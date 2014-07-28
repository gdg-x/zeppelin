@echo on
set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
if "%~1"=="" (set "SOURCE=..\..\css") else (set "SOURCE=%~1")

echo Optimizing css with yuicompressor
forfiles /p %SOURCE% /s /m "*.css" /c "cmd /c  echo processing @path && java -jar %LOCAL_DIR%\yuicompressor-2.4.8.jar @path -o @fname.min.css"

pause