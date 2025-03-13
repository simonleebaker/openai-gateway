import { defineConfig as defineGatewayConfig } from "@graphql-hive/gateway";
import { MeshPlugin } from "@graphql-mesh/types";

function injectInstanceUrl(): MeshPlugin<any> {
  return {
    onFetch({ context, url, setURL }) {
      setURL(`${context.req.headers["x-instance-url"]}/${url}`);
      console.log(context);
    },
  };
}

export const gatewayConfig = defineGatewayConfig({
  supergraph: "supergraph.graphql",
  plugins: () => [injectInstanceUrl()],
  propagateHeaders: {
    fromClientToSubgraphs(payload) {
      return {
        Authorization: payload.request.headers.get("x-instance-authorization"),
      };
    },
  },
});
