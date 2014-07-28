@echo on
set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
if "%~1"=="" (set "SOURCE=..\..\img") else (set "SOURCE=%~1")

echo Optimizing GIF with gifsicle
forfiles /p %SOURCE% /s /m "*.gif" /c "cmd /c  echo processing @path && %LOCAL_DIR%\gifsicle.exe -b -O3 @path"

pause