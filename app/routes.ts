import { type RouteConfig, index, layout, prefix, route, } from "@react-router/dev/routes";

export default [


    index("routes/landing/landing.tsx"),
    route("/onboarding", "routes/onboarding/onboarding.tsx"),

    // DASHBOARD ROUTES:
    layout("./layouts/dashboard.tsx", [
        ...prefix("dashboard", [
            index("./routes/dashboard/index.tsx")
        ])
    ]),
    
    // RESOURCE ROUTES:
    ...prefix("api", [
        route("/test", "routes/api/test.ts")
    ])

] satisfies RouteConfig;
