FROM node:23-slim AS base

ENV PNPM_HOME="/pnpm"

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    corepack enable \
    && pnpm install --frozen-lockfile

FROM base AS dev

ENV NODE_ENV=development

WORKDIR /app

COPY . .

CMD [ "pnpm", "start" ]

EXPOSE 8081

FROM base AS build

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN pnpm build

FROM nginxinc/nginx-unprivileged:alpine-slim AS prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 8081
