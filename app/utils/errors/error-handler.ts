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
    };

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2002':
                const field = error.meta?.target as string[] | undefined
                const fieldName = field?.[0] || 'field'
                return createApiResponse(
                    undefined,
                    `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} already exists`,
                    'This value is already in use'
                )

            case 'P2025':

                return createApiResponse(
                    undefined,
                    'Record not found',
                    'The requested resource could not be found'
                )

            case 'P2003':

                return createApiResponse(
                    undefined,
                    'Invalid reference',
                    'The referenced record does not exist'
                )

            case 'P2014':

                return createApiResponse(
                    undefined,
                    'Cannot delete record',
                    'This record is referenced by other data'
                )

            default:
                return createApiResponse(
                    undefined,
                    'Database error',
                    'A database error occurred. Please try again'
                )
        }
    };

    if (error instanceof Prisma.PrismaClientValidationError) {
        return createApiResponse(
            undefined,
            "Invalid data format",
            "The provided data does not match the expected format"
        )
    };

    if (error instanceof AppError) {
        return createApiResponse(
            undefined,
            process.env.NODE_ENV === "development" ? error.message : "Internal Server Error",
            "An unexpected error occurred",
        )
    };

    if (error instanceof Error) {
        return createApiResponse(
            undefined,
            process.env.NODE_ENV === "development" ? error.message : "Internal Server Error",
            "An unexpected error occurred",
        )
    };

    return createApiResponse(
        undefined,
        "Unknown error",
        'An unexpected error occurred. Please try again'
    )


}