import { ZodError } from "zod";
import { logger } from "~/config/logging/logger";
import type { APiResponse } from "~/lib/zod";


export interface ValidationError {
    field: string;
    message: string;
    code?: string;
}

export class AppError extends Error {
    constructor(message: string, public statusCode: number = 500,
        public code?: string
    ) {
        super(message),
            this.name = "AppError"
    }
};


export function createApiResponse<T>(
    data?: T,
    error?: string,
    message?: string,
    validationErrors?: ValidationError[]
): APiResponse<T> {
    return {
        success: !error,
        data,
        error,
        message,
        timestamp: new Date().toISOString(),
        ...(validationErrors && { validationErrors }),
    }
}

export function handleError(error: unknown): APiResponse {
    logger.error(error, "API Error");

    if (error instanceof ZodError) {
        const validationErrors: ValidationError[] = error.issues.map((issue) => ({
            field: issue.path[0].toString(),
            code: issue.code,
            message: issue.message
        }));

        return createApiResponse(
            undefined,
            "Validation Failed",
            "Please check your input and try again",
            validationErrors
        )
    }
}