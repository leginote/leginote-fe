# syntax=docker.io/docker/dockerfile:1
FROM node:18-alpine AS base

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# 미리 빌드된 파일들을 복사 (GitHub Actions에서 rsync로 복사)
COPY . .

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]