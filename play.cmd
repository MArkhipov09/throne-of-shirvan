@echo off
rem Throne of Shirvan launcher. Double-click to play.
rem
rem The game is plain files, but it uses ES modules, which browsers refuse to
rem load straight from disk. So this serves the folder on your own machine and
rem opens the game in your browser. Nothing leaves the computer.
rem Close this window to stop the server.

setlocal
cd /d "%~dp0"
set "PORT=8000"

where python >nul 2>nul
if not errorlevel 1 (
  set "SERVE=python -m http.server %PORT% --bind 127.0.0.1"
  goto run
)
where py >nul 2>nul
if not errorlevel 1 (
  set "SERVE=py -m http.server %PORT% --bind 127.0.0.1"
  goto run
)
where npx >nul 2>nul
if not errorlevel 1 (
  set "SERVE=npx --yes serve -l %PORT% ."
  goto run
)

echo.
echo  Could not find Python or Node.js on this computer.
echo  Install Python from https://www.python.org/downloads/ and run this again.
echo.
pause
exit /b 1

:run
echo.
echo  Throne of Shirvan is running at http://localhost:%PORT%
echo  Leave this window open while you play. Close it to stop.
echo.
rem Open the browser a moment after the server has had time to start.
start "" /min cmd /c "ping -n 2 127.0.0.1 >nul & start http://localhost:%PORT%"
%SERVE%

echo.
echo  The server stopped. If it never started, port %PORT% may already be in use:
echo  the game may already be running, so try http://localhost:%PORT% in your browser.
echo.
pause
