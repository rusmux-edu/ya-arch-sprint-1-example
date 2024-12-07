ARG APP_DIR="mfe/host"

FROM node:23-slim AS base

ENV PNPM_HOME="/pnpm"

ARG APP_DIR
WORKDIR /frontend/$APP_DIR

ARG PLUGIN_PATH="eslint-plugin-local/example-eslint-plugin-local-1.0.0.tgz"
COPY  $PLUGIN_PATH /frontend/$PLUGIN_PATH
COPY $APP_DIR/package.json $APP_DIR/pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    corepack enable \
    && pnpm install --frozen-lockfile

COPY $APP_DIR ./

FROM base AS dev

ENV NODE_ENV=development

CMD [ "pnpm", "dev" ]

EXPOSE 8080

FROM base AS build

ENV NODE_ENV=production

ARG REACT_APP_AUTH_URL="http://localhost:8081"
ARG REACT_APP_TASKS_URL="http://localhost:8082"
RUN pnpm build

FROM nginxinc/nginx-unprivileged:alpine-slim AS prod

ARG APP_DIR
COPY --from=build /frontend/$APP_DIR/dist /usr/share/nginx/html
COPY $APP_DIR/configs/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 8080
