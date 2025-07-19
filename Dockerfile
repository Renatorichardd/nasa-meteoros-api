# Usa imagem oficial do Node.js
FROM node:18

# Cria diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3001

# Comando para rodar a API
CMD ["node", "server.js"]
