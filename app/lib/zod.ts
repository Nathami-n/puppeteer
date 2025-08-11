import { z } from "zod";
export const paginationSchema = z.object({
    page: z.coerce.number().int().positive().max(1000).optional(),
    limit: z.coerce.number().int().positive().max(100).optional(),
    search: z.string().max(100).optional(),
    sortBy: z.string().max(50).optional().default('createdAt'),
    sortOrder: z.enum(['asc', 'desc']).optional().default('desc')
});


export const apiResponseSchema = z.object({
    success: z.boolean(),
    data: z.unknown().optional(),
    error: z.string().optional(),
    message: z.string().optional(),
    timestamp: z.string(),
    validationErrors: z.array(z.object({
        field: z.string(),
        message: z.string(),
        code: z.string().optional(),
    })).optional()
});

export const paginatedResponseSchema = z.object({
    items: z.array(z.unknown()),
    total: z.number().int().nonnegative(),
    page: z.number().int().positive(),
    limit: z.number().int().positive(),
    totalPages: z.number().int().nonnegative(),
    hasNext: z.boolean(),
    hasPrev: z.boolean()
});

export type APiResponse<T = unknown> = Omit<z.infer<typeof apiResponseSchema>, "data"> & { data?: T };

export type PaginatedResponse<T> = Omit<z.infer<typeof paginatedResponseSchema>, "items"> & { items: T[] };