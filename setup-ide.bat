@echo off
echo ============================================
echo Instalando dependencias locais para IDE/VS Code
echo ============================================
echo.

cd /d "%~dp0"

echo [1/6] service-auth...
cd service-auth
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo [2/6] service-catalog...
cd service-catalog
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo [3/6] service-reviews...
cd service-reviews
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo [4/6] service-curation...
cd service-curation
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo [5/6] service-analytics...
cd service-analytics
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo [6/6] frontend...
cd frontend
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
call npm install --ignore-scripts
cd ..

echo.
echo ============================================
echo Pronto! Reinicie o VS Code (Ctrl+Shift+P -> Reload Window)
echo ============================================
pause
