import { type RouteConfig, index, layout, prefix, route, } from "@react-router/dev/routes";

export default [


    index("routes/landing/landing.tsx"),
    route("/onboarding", "routes/onboarding/onboarding.tsx"),

    // DASHBOARD ROUTES:
    layout("./layouts/dashboard/dashboard.tsx", [
        ...prefix("dashboard", [
            index("./routes/dashboard/index.tsx")
        ])
    ]),

    // AUTH LAYOUT:
    layout("./layouts/auth/auth.tsx", [
        route("/sign-in", "routes/auth/sign-in.tsx"),
        route("/sign-up", "routes/auth/sign-up.tsx")
    ]),

    // RESOURCE ROUTES:
    ...prefix("api", [
        route("/test", "routes/api/test.ts"),
        route("/auth/*", "routes/api/auth.ts")
    ])

] satisfies RouteConfig;
