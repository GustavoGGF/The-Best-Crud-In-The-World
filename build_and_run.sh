#!/bin/bash

# Limpa a tela
clear

echo "===================================================="
echo "  LIMPANDO PASTA STATIC DO BACKEND"
echo "===================================================="

# Define o caminho da pasta
STATIC_DIR="backend/src/main/resources/static"

# Apaga a pasta se existir e recria
if [ -d "$STATIC_DIR" ]; then
    rm -rf "$STATIC_DIR"
fi
mkdir -p "$STATIC_DIR"

echo -e "\n===================================================="
echo "  INICIANDO BUILD DO FRONTEND (ANGULAR)"
echo "===================================================="

# Entra na pasta do frontend e executa o build
cd frontend || { echo "[ERRO] Pasta frontend não encontrada."; exit 1; }

# Executa o ng build (usando o comando local do projeto se necessário)
npm run build --prod # Ou apenas 'ng build', se tiver o CLI global

# Verifica se o comando anterior falhou
if [ $? -ne 0 ]; then
    echo -e "\n[ERRO] Falha no build do Angular. Abortando..."
    exit 1
fi

clear
echo "===================================================="
echo "  Finalizado"
echo "===================================================="