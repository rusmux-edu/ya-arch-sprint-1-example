FROM node:23-slim AS base

ENV PNPM_HOME="/pnpm"

WORKDIR /frontend/mfe/auth

ARG PLUGIN_PATH="eslint-plugin-local/example-eslint-plugin-local-1.0.0.tgz"
COPY --from=frontend $PLUGIN_PATH /frontend/$PLUGIN_PATH
COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    corepack enable \
    && pnpm install --frozen-lockfile

COPY . .

FROM base AS dev

ENV NODE_ENV=development

CMD [ "pnpm", "dev" ]

EXPOSE 8081

FROM base AS build

ENV NODE_ENV=production

ARG REACT_APP_HOST_URL="http://localhost:8080"
RUN pnpm build

FROM nginxinc/nginx-unprivileged:alpine-slim AS prod

COPY --from=build /frontend/mfe/auth/dist /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 8081
