# React (Create React App) + .NET 8 full project scaffold

This repository contains a minimal working template for:
- Backend: ASP.NET Core Web API (.NET 8)
- Frontend: React (Create React App)
- Nginx config to serve React and proxy `/api` to backend
- Dockerfiles for backend and frontend
- docker-compose.yml for local development
- GitHub Actions workflow to build and push Docker images to GHCR

## Local quick start

Requirements: Docker, Docker Compose.

1. Build and run locally:
   ```bash
   docker compose up --build
   ```
2. Open the frontend at: http://localhost:8080
3. The backend API is available internally at http://backend:5000 and health at /health.

## Notes
- The project scaffolds are minimal and intended as a starting point.
- Replace image names in `.github/workflows/ci-images.yml` before using GHCR.
- For production, do not store secrets in images; use environment variables or secrets management.
