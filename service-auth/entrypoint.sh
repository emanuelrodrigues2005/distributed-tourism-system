#!/bin/sh
set -e

echo "==> Aguardando PostgreSQL ficar pronto..."
until npx prisma db push --skip-generate 2>/dev/null; do
  echo "   PostgreSQL ainda não está pronto — aguardando 2s..."
  sleep 2
done

echo "==> Aplicando schema no banco (migrate ou db push)..."
npx prisma migrate deploy 2>/dev/null || {
  echo "   Nenhuma migration encontrada — usando prisma db push..."
  npx prisma db push
}

echo "==> Iniciando aplicação..."
exec node dist/main
