import { useCallback, useState } from 'react';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: BodyInit;
  headers?: HeadersInit;
}

/**
 * Simple custom hook for fetching data.
 */
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Simple request function returned by `useFetch`
   */
  const sendRequest = useCallback(
    async (url: string, requestOptions?: RequestOptions) => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          method: requestOptions?.method ?? 'GET',
          headers: requestOptions?.headers,
          body: requestOptions?.body,
        });

        const data = await res.json();

        if (res.status >= 400) {
          throw new Error(data.error.message);
        }
        setIsLoading(false);
        return data;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    },
    []
  );
  return { sendRequest, isLoading, error };
};
