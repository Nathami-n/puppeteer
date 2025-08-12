import { useFetcher } from "react-router";
import { useCallback, useMemo } from "react";
import type { APiResponse } from "~/lib/zod";
import type { ValidationError } from "~/utils/errors/error-handler";

export interface FetcherState<TData = unknown, TError = string> {
    data: TData | undefined
    error: TError | undefined
    validationErrors: ValidationError[] | undefined
    isLoading: boolean
    isIdle: boolean
    isPending: boolean
    isSubmitting: boolean
    isError: boolean
    isSuccess: boolean
    status: 'idle' | 'pending' | 'submitting' | 'success' | 'error'
};


export function useTypedFetcher<TData = unknown, TInput = unknown>(): FetcherState<TData> & {
    query: (url: string) => void;
    mutate: (url: string, data: TInput, method: "POST" | "PUT" | "DELETE") => void;
    reset: () => void;
} {
    const fetcher = useFetcher<APiResponse<TData>>();

    const query = useCallback((url: string) => {
        fetcher.load(url)
    }, [fetcher]);

    const mutate = useCallback((
        url: string,
        data: TInput,
        method: "POST" | "PUT" | "DELETE" = "POST"
    ) => {
        fetcher.submit(
            { data: JSON.stringify(data) },
            {
                method,
                action: url,
            }
        )
    }, [fetcher]);


    const reset = useCallback(() => {
        fetcher.load("/api/reset");
    }, [fetcher])


    const state = useMemo((): FetcherState<TData> => {
        const isIdle = fetcher.state === 'idle'
        const isPending = fetcher.state === 'loading'
        const isSubmitting = fetcher.state === 'submitting'
        const isLoading = isPending || isSubmitting

        const hasError = fetcher.data?.success === false
        const isError = hasError
        const hasData = fetcher.data?.success === true && fetcher.data.data !== undefined
        const isSuccess = hasData && !isLoading

        const data = fetcher.data?.success === true ? fetcher.data.data : undefined
        const error = fetcher.data?.success === false ? fetcher.data.error : undefined
        const validationErrors = fetcher.data?.validationErrors

        let status: 'idle' | 'pending' | 'submitting' | 'success' | 'error' = 'idle'
        if (isSubmitting) status = 'submitting'
        else if (isPending) status = 'pending'
        else if (isError) status = 'error'
        else if (isSuccess) status = 'success'

        return {
            data,
            error,
            validationErrors,
            isLoading,
            isIdle,
            isPending,
            isSubmitting,
            isError,
            isSuccess,
            status
        }
    }, [fetcher.data, fetcher.state]);

    return {
        ...state,
        query,
        mutate,
        reset
    }
}