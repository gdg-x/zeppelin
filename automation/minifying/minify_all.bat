@echo off

set LOCAL_DIR=%~dp0
set LOCAL_DIR=%LOCAL_DIR:~0,-1%
set CSS_SOURCE=%~1
set JS_SOURCE=%~2

call %LOCAL_DIR%\minify_css.bat "%CSS_SOURCE%"
call %LOCAL_DIR%\minify_js.bat "%JS_SOURCE%"

pause