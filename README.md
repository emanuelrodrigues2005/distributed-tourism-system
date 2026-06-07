# Hub de Turismo Litorâneo

Plataforma para conectar turistas e trabalhadores locais nas praias de **Gaibu, Porto de Galinhas, Carneiros e Boa Viagem (PE)**, utilizando Arquitetura Baseada em Eventos (EDA).

---

## 🏗️ Arquitetura

```
┌──────────────┐     ┌─────────────────┐     ┌──────────────────┐
│   Frontend   │────▶│  service-auth   │     │   RabbitMQ       │
│  (Angular)   │     │  (NestJS+Prisma)│     │  (Message Bus)   │
└──────────────┘     └─────────────────┘     └────────┬─────────┘
                                                      │
┌────────────────┐  ┌──────────────────┐  ┌───────────┴─────────┐
│ service-reviews│  │ service-curation │  │ service-analytics   │
│ (NestJS+Prisma)│  │ (NestJS+Prisma)  │  │ (NestJS+MongoDB)    │
└────────────────┘  └──────────────────┘  └─────────────────────┘
         │                    │                      │
         └────────────────────┼──────────────────────┘
                              │
                    ┌─────────┴──────────┐
                    │  service-catalog   │
                    │ (NestJS+Prisma+    │
                    │  PostGIS)          │
                    └────────────────────┘
```

## 📦 Serviços

| Serviço            | Porta | Banco              | Descrição                          |
|--------------------|-------|--------------------|------------------------------------|
| service-auth       | 3001  | PostgreSQL (db_auth)| Autenticação e perfis de usuário   |
| service-catalog    | 3002  | PostgreSQL+PostGIS  | Catálogo geolocalizado de serviços |
| service-reviews    | 3003  | PostgreSQL (db_reviews) | Avaliações e interações       |
| service-curation   | 3004  | PostgreSQL (db_curation)| Curadoria e aprovação de perfis|
| service-analytics  | 3005  | MongoDB            | Métricas e analytics via eventos   |
| frontend           | 4200  | —                  | SPA Angular 18+                    |

## 🚀 Executando

```bash
docker compose up --build
```

## 📡 Eventos (RabbitMQ)

| Evento            | Emissor          | Consumidor         |
|-------------------|------------------|--------------------|
| `profile_viewed`  | service-catalog  | service-analytics  |

## 🛠️ Stack

- **Backend:** NestJS 10 + TypeScript
- **ORM:** Prisma (PostgreSQL) + Mongoose (MongoDB)
- **Mensageria:** RabbitMQ + @nestjs/microservices
- **Frontend:** Angular 18+ + Tailwind CSS
- **Infra:** Docker + Docker Compose
- **Geo:** PostGIS
