# Etapa 1: Construcción de la aplicación Angular
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de Angular
RUN npm install

# Copia el resto del código fuente
COPY . .

# Genera la versión de producción de Angular
RUN npm run build -- --configuration production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copia los archivos generados en la etapa de build a la carpeta predeterminada de Nginx
COPY --from=build /app/dist/todo-list-angular /usr/share/nginx/html

# Exponer el puerto 80 para el servidor
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
