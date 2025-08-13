import { auth } from "~/lib/auth.server"



export async function loader({ request }: Route.LoaderArgs) {
    return handleRequest(request)
}

export async function action({ request }: Route.ActionArgs) {
    return handleRequest(request)
}

function handleRequest(request: Request) {
    return auth.handler(request)
}