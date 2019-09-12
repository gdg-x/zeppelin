@echo off

set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
set SOURCE=%~1

:LOOP
if "%~1"=="" GOTO END
if /I "%~1"=="-d" set "SOURCE=..\..\img"
if /I "%~1"=="-jtran" GOTO JPEGTRAN
if /I "%~1"=="-pout" GOTO PNGOUT
if /I "%~1"=="-optip" GOTO OPTIPNG
if /I "%~1"=="-pquant" GOTO PNGQUANT
if /I "%~1"=="-gsicle" GOTO GIFSICLE
if /I "%~1"=="-svgo" GOTO SVGO
SHIFT & GOTO LOOP

:JPEGTRAN
call %LOCAL_DIR%\jpegtran.bat "%SOURCE%"
SHIFT & GOTO LOOP

:PNGOUT
call %LOCAL_DIR%\pngout.bat "%SOURCE%"
SHIFT & GOTO LOOP

:OPTIPNG
call %LOCAL_DIR%\optipng.bat "%SOURCE%"
SHIFT & GOTO LOOP

:PNGQUANT
call %LOCAL_DIR%\pngquant.bat "%SOURCE%"
SHIFT & GOTO LOOP

:GIFSICLE
call %LOCAL_DIR%\gifsicle.bat "%SOURCE%"
SHIFT & GOTO LOOP

:SVGO
call %LOCAL_DIR%\svgo.bat "%SOURCE%"
SHIFT & GOTO LOOP

:END
pause