import { ZodError } from "zod";

export function validateAndParse<T>(schema: any, data: unknown): T {
    const result = schema.safeParse(data);

    if (!result.success) {
        throw result.error
    };
    return result.data
}

export async function validateQuery<T>(schema: any, request: Request): Promise<T> {
    const url = new URL(request.url);

    const params: Record<string, any> = {};

    for (const [key, value] of url.searchParams.entries()) {
        params[key] = value;
    };

    return validateAndParse(schema, params);

};

export async function validateFormData<T>(schema: any, request: Request): Promise<T> {
    const formData = await request.formData();

    const dataString = formData.get('data') as string;
    if (!dataString) {
        throw new ZodError([{
            code: "custom",
            message: "No data provided",
            path: ["data"]
        }])
    };

    let parsedData: unknown;

    try {
        parsedData = JSON.parse(dataString);
    } catch {
        throw new ZodError([{
            code: 'custom',
            message: 'Invalid JSON format',
            path: ['data']
        }])
    };

    return validateAndParse(schema, parsedData);
}