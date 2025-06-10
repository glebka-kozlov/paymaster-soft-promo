# Этап 1: Сборка проекта
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Выполняем сборку проекта (предполагается, что команда 'publish' создает каталог 'dist')
RUN npm run publish

# Этап 2: Сервер на nginx
FROM nginx:stable-alpine

# Удаляем стандартную конфигурацию
RUN rm /etc/nginx/conf.d/default.conf

# Копируем свою конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx в режиме демона
CMD ["nginx", "-g", "daemon off;"]
