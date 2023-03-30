<p align="center">
  <img alt="Tails UI" src="https://user-images.githubusercontent.com/57155587/228873688-ee1d4191-457c-48ab-ba1b-a679bf789ff3.png" width="350" height="90" style="max-width: 100%;">
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/milene-taborda">
      <img alt="Linkedin" src="https://img.shields.io/badge/-Milene%20Taborda-29B6D1?label=Linkedin&logo=linkedin">
    </a>
</p>

<p>
  Procurando um novo amigo peludo para se juntar à sua família? A plataforma <strong>FindAFriend</strong> conecta você com animais de estimação adotáveis, ajudando você a encontrar o companheiro perfeito para se adequar ao seu estilo de vida e preferências. Com uma interface amigável, você pode navegar facilmente pelas listas de cães e gatos disponíveis para adoção, filtrando por cidade, idade, tamanho e muito mais. Nossos perfis detalhados fornecem todas as informações de que você precisa para tomar uma decisão informada!
</p>

## Preview
<img src="https://user-images.githubusercontent.com/57155587/228869654-e758f763-b9cb-44d5-8893-ebe135766c9d.png" />
<img src="https://user-images.githubusercontent.com/57155587/228872698-f42ac564-08f3-402b-b293-3bf87baff19e.png" />

## Get Started
Follow these steps to run the app:

1. Clone this repository.
```bash
$ git clone https://github.com/milenetaborda/frontend-challenges.git
$ cd gcc-find-a-friend 
```

2. Before you get started, you also need to start the server:
```bash
# Cd the server repository
$ cd backend

# Install the server dependencies
$ npm install

# Copy and paste the .env.example and rename it to .env
$ cp ./.env.example ./.env

# Run the migrations
$ npx prisma migrate dev

# Seed your database with the following command
$ npx prisma db seed

# Finally, boot the server with the following command
$ npm run dev
```

3. Install the dependencies the web:
```bash
$ cd web
$ npm install
```

4. With the server up and running we can now run the web app.
```bash
$ npm run dev
```

<strong>Happy hacking!</strong>🎉


