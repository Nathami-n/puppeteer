import { paginationSchema, type PaginatedResponse, type PaginationOptions } from "~/lib/zod";
import { validateAndParse } from "../api/api";

export interface SearchableFields {
    [key: string]: "contains" | "startsWith" | "endsWith" | "equals"
};

export interface PrismaQueryOptions<T = any> {
    where?: T;
    include?: any,
    select?: any,
    orderBy?: any
}


export async function paginateQuery<TModel, TWhereInput = any>(
    model: any,
    options: PaginationOptions = { sortBy: "createdAt", sortOrder: "desc" },
    queryOptions: PrismaQueryOptions<TWhereInput> = {},
    searchableFields: SearchableFields = {}
): Promise<TModel[] | PaginatedResponse<TModel>> {

    const validatedOptions = validateAndParse<typeof options>(paginationSchema, options);

    const {
        page,
        limit,
        search = "",
        sortBy = "createdAt",
        sortOrder = "desc"
    } = validatedOptions;

    let where = queryOptions.where || {};

    if (search && Object.keys(searchableFields).length > 0) {
        const searchConditions = Object.entries(searchableFields).map(([field, mode]) => ({
            [field]: {
                [mode]: search,
                mode: "insensitive"
            }
        }));

        where = {
            ...where,
            OR: searchConditions
        }
    }

    const orderBy = queryOptions.orderBy || {
        [sortBy]: sortOrder
    }

    if (!page && !limit) {
        const items = await model.findMany({
            where,
            include: queryOptions.include,
            select: queryOptions.select,
            orderBy
        })
        return items as TModel[]
    }

    const currentPage = Math.max(1, page || 1);
    const pageSize = Math.max(1, Math.min(100, limit || 10));
    const skip = (currentPage - 1) * pageSize;

    const [items, total] = await Promise.all([
        model.findMany({
            where,
            include: queryOptions.include,
            select: queryOptions.select,
            orderBy,
            take: pageSize,
            skip
        }),
        model.count({ where })
    ]);

    const totalPages = Math.ceil(total / pageSize);
    return {
        items: items as TModel[],
        total,
        page: currentPage,
        limit: pageSize,
        totalPages,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1
    }
}

export class PrismaQueryBuilder<TModel, TWhereInput = any> {
    constructor(
        private model: any,
        private searchableFields: SearchableFields = {}
    ) { }

    async paginate(
        options: PaginationOptions = { sortBy: "createdAt", sortOrder: "desc" },
        queryOptions: PrismaQueryOptions<TWhereInput> = {}
    ): Promise<TModel[] | PaginatedResponse<TModel>> {
        return paginateQuery<TModel, TWhereInput>(
            this.model,
            options,
            queryOptions,
            this.searchableFields
        )
    };

    async findWithPagination(
        where: TWhereInput,
        options: PaginationOptions = { sortBy: "createdAt", sortOrder: "desc" },
        additionalOptions: Omit<PrismaQueryOptions<TWhereInput>, "where"> = {}
    ): Promise<TModel[] | PaginatedResponse<TModel>> {
        return paginateQuery<TModel, TWhereInput>(
            this.model,
            options,
            { ...additionalOptions, where },
            this.searchableFields
        )
    }
}