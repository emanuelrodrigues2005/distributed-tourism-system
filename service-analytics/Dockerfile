# ========== Builder stage ==========
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --ignore-scripts

COPY tsconfig.json tsconfig.build.json nest-cli.json ./
COPY src/ ./src/

RUN npm run build

# ========== Runner stage ==========
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist

RUN npm install --omit=dev --ignore-scripts && npm cache clean --force

EXPOSE 3005

CMD ["node", "dist/main"]
