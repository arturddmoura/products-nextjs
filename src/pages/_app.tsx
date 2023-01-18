import { useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
