@echo off
title DaQube Website
echo ========================================================
echo   Starting DaQube Website on http://localhost:3000
echo ========================================================
echo.
timeout /t 2 >nul
start http://localhost:3000
npm run dev
pause
