# App Básico em Next.js com TypeScript e TailwindCSS

Uma aplicação simples que utiliza alguns recursos do Next.js como: rotas dinâmicas e otimização de imagens, desenvolvida para demonstração no canal [Código Fonte TV](https://youtube.com/@codigofontetv) no YouTube.

## Descrição

O objetivo é mostrar como implantar e um projeto Next.js com TypeScript e TailwindCSS em containers Docker dentro de um VPS.

## Tecnologias Utilizadas

- **Node.js** para o backend.
- **Next.js** para o frontend.
- **TailwindCSS** para estilização.
- **Docker** para containerização.

## Configuração e Instalação

### Pré-requisitos

- Tenha o Docker e o Docker Compose instalados em sua máquina.

### Passos para configuração

1. **Clonar o Repositório**

```bash
git clone https://github.com/gabrielfroes/meu-app-next.git
cd meu-app-next
```

2.**Build da imagem do container**

```bash
docker build -t app-next .
```

3.**Subir container Docker via docker compose**

```bash
docker-compose up -d
```

4.**Ver aplicação**

- Abra a aplicação em `http://localhost:3030` ou `http://IP_SERVIDOR:3030`.
- Para configurar o acesso a partir de um domínio será necessário configurar um proxy reverso no servidor.
