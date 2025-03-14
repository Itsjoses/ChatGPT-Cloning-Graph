# ChatGPT-Cloning-Graph
## Description

This ChatGPT-Cloning-Graph using 3 tech stack
* vite - React Js (Frontend)
* Nest Js (Backend)
* Neo4j (Database)

There's 1 page in frontend
* home

## Requirement
* docker

## Database

1. go to database folder
```bash
cd neo4j/
```

2. Run the docker-compose
```bash
docker compose up --build -d
```

## Frontend

1. go to frontend folder
```bash
cd chatse/
```

2. Add new .env in root folder
```bash
VITE_API_URL=http://localhost:3000/ # or with your backend url
```

3. Run the docker-compose
```bash
docker compose up --build -d
```

## Backend

1. go to backend folder
```bash
cd chatse-backend/
```

2. Add new .env in root folder
```bash
look at the env example file
```

3. Run the docker-compose
```bash
docker compose up --build -d
```
