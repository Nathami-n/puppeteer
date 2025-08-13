

export function loader() {
    return Response.json({
       
        success: true,
        data: {
            name: Math.random()
        }
    })
}