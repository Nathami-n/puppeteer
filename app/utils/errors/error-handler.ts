
import { ZodError } from "zod";
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