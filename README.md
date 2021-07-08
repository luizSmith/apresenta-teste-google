# Portal de Parceiros - BFF

Este BFF foi contruido com o objetivo de trafegar as requicições solicitadas pelo front do Portal de Parceiros para o nosso core da aplicação a API do Portal de Parceiros.

## Instalar todas as dependencias

```
npm install
```

## Executar o projeto

Localmente

```
npm run dev
```

Build do Projeto
```
npm run build
```

## Docker Compose

Builde a imagem no Docker.

```
docker-compose build
```

Rode a imagem no Docker.

```
docker-compose up
```

Rode a imagem no Docker, com ambiente setado (local-docker, develop, homolog e production)

```
ENV=local-docker docker-compose up
```

Parar o docker

```
docker-compose stop
```

## Direct in Docker

Builde a imagem no Docker.

```
docker build -t pp-bff .
```

Rode a imagem no Docker.

```
docker run -d -p 8080:8080 --env-file ./env.list pp-bff
```

Obs: Lembrar de criar o env.list na raiz do projeto com todas as variaveis de ambiente.

## Acesso

Acesse o swagger através do link abaixo:

http://localhost:8080/api-docs/swagger/#/
