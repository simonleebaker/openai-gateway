*Run gateway on local machine*

> npm i

> npx hive-gateway supergraph

The above works fine, returns request from OpenAI


*Run gateway with Docker*

> docker build --no-cache -t hive-gateway-transports .

> docker run -p 4000:4000 -v "$(pwd)/supergraph.graphql:/gateway/supergraph.graphql" -v "$(pwd)/gateway.config.ts:/gateway/gateway.config.ts" hive-gateway-transports supergraph

The above fails.
