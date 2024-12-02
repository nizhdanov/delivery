type ReactTagProps<T> = import('react').ComponentProps<T>;

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

interface BaseResponse {
  success: boolean;
  reason?: string;
}

interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}

type ApiRequestConfig = import('axios').AxiosRequestConfig;

type RequestConfig<Data = undefined> = Data extends undefined
  ? { config?: ApiRequestConfig }
  : { data: Data; config?: ApiRequestConfig };
