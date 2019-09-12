@echo on
set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
if "%~1"=="" (set "SOURCE=..\..\img") else (set "SOURCE=%~1")

echo Optimizing JPEG with jpegtran
forfiles /p %SOURCE% /s /m "*.jpg" /c "cmd /c  echo processing @path && %LOCAL_DIR%\jpegtran.exe -optimize -progressive -copy none -outfile @path @path"

pause