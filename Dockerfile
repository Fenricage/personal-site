# ЭТАП 1: Сборка статики Gatsby
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем зависимочти
COPY package*.json ./
RUN npm ci

# Копируем исходный код и собираем
COPY . .
RUN npm run build

# ЭТАП 2: Раздача через Nginx
FROM nginx:alpine

# Копируем собранный проект из первого этапа в дефолтную папку Nginx
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]