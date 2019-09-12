@echo on
if "%~1"=="" (set "SOURCE=..\..\img") else (set "SOURCE=%~1")

echo Optimizing SVG with svgo
forfiles /p %SOURCE% /s /m "*.svg" /c "cmd /c  echo processing @path && svgo @path"

pause