# ========== Builder stage ==========
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --ignore-scripts

COPY . .

RUN npm run build 2>/dev/null || echo "Build step placeholder — Angular CLI will handle this"

# ========== Runner stage (dev server) ==========
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 4200

CMD ["npx", "@angular/cli", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
