# Sona Info — Portfolio

Trang portfolio cá nhân (React + Vite, static), đóng gói Docker và serve bằng nginx.

## Yêu cầu

- Node.js 22+ (dev local)
- Docker + Docker Compose (chạy / deploy)

## Chạy local (npm)

```bash
npm install
npm run dev
```

Mở URL mà Vite in ra (thường `http://localhost:5173`).

Build production:

```bash
npm run build
npm run preview
```

## Chạy bằng Docker (WSL / server)

```bash
docker compose up --build
```

Mở [http://localhost:8080](http://localhost:8080).

Dừng:

```bash
docker compose down
```

Trên server thật dùng cùng lệnh `docker compose up --build -d` (chạy nền). Có thể đổi map port trong `docker-compose.yml` nếu cần.

## Chỉnh nội dung

Sửa file [`src/data/profile.ts`](src/data/profile.ts): tên, bio, skills, projects, email, GitHub, LinkedIn.

## Cấu trúc chính

```
src/
  components/   # Nav, Hero, About, Skills, Projects, Contact, Footer
  data/         # profile.ts
  styles/       # global.css
Dockerfile      # multi-stage: node build → nginx
docker-compose.yml
nginx.conf
```
