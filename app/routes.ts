import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/backstage-route.tsx"),
  route("/*", "routes/backstage-route.tsx", {
    id: "backstage-catchall",
  }),
] satisfies RouteConfig;
