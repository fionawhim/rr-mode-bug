import { type RouteConfig, index } from "@react-router/dev/routes";

console.log("MODE FOR ROUTES:", import.meta.env.MODE)

export default [index("routes/home.tsx")] satisfies RouteConfig;
