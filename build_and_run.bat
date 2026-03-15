@echo off
SETLOCAL
cls

echo ====================================================
echo   LIMPANDO PASTA STATIC DO BACKEND
echo ====================================================
:: Apaga a pasta e todo o conteúdo (/s) de forma silenciosa (/q)
if exist "backend\src\main\resources\static" (
    rd /s /q "backend\src\main\resources\static"
)
:: Recria a pasta vazia
md "backend\src\main\resources\static"

echo.
echo ====================================================
echo   INICIANDO BUILD DO FRONTEND (ANGULAR)
echo ====================================================
cd frontend
call ng build

if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Falha no build do Angular. Abortando...
    pause
    exit /b %ERRORLEVEL%
)

cls
echo ====================================================
echo   Finalizado
echo ====================================================

ENDLOCAL