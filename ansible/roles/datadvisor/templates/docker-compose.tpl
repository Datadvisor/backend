version: '3.9'

services:
  frontend:
    container_name: "datadvisor-frontend-{{ ENV_TYPE }}"
    image: "{{ DOCKER_REGISTRY }}/{{ FRONTEND_IMAGE }}"
    restart: on-failure
    env_file:
      - frontend.env
    networks:
      - frontend

  api:
    container_name: "datadvisor-api-{{ ENV_TYPE }}"
    image: "{{ DOCKER_REGISTRY }}/{{ API_IMAGE }}"
    restart: on-failure
    env_file:
      - backend.env
    networks:
      - frontend
      - backend

  scrapper:
    container_name: "datadvisor-scrapper-{{ ENV_TYPE }}"
    image: "{{ DOCKER_REGISTRY }}/{{ SCRAPPER_IMAGE }}"
    restart: on-failure
    env_file:
      - scrapper.env
    networks:
      - backend

  nginx:
    container_name: "datadvisor-nginx-{{ ENV_TYPE }}"
    image: "{{ NGINX_IMAGE }}"
    restart: on-failure
    volumes:
      - "/etc/nginx/conf.d:/etc/nginx/conf.d"
    networks:
      - frontend
      - backend

  postgres:
    container_name: "datadvisor-postgres-{{ ENV_TYPE }}"
    image: "{{ POSTGRES_IMAGE }}"
    restart: on-failure
    env_file:
      - postgres.env
    volumes:
      - "postgres-volume:/var/lib/postgresql/data"
    networks:
      - backend

  redis:
    container_name: "datadvisor-redis-{{ ENV_TYPE }}"
    image: "{{ REDIS_IMAGE }}"
    restart: on-failure
    networks:
      - backend

volumes:
  postgres-volume:

networks:
  frontend:
  backend:
