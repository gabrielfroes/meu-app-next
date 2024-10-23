# Etapa 1: Construção
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Build da aplicação
RUN npm run build

# Remove as devDependencies para reduzir o tamanho da imagem
RUN npm prune --production

# Etapa 2: Execução
FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos necessários do estágio de construção
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public

# Instala apenas as dependências de produção (não é necessário instalar as devDependencies)
RUN npm install --only=production

# Expondo a porta 3030
EXPOSE 3030

# Comando para iniciar a aplicação
CMD ["npm", "start"]
