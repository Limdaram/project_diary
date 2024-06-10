import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import './index.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            throwOnError: true,
            staleTime: 20 * 1000,
            gcTime: 5 * 60 * 1000
        },
        mutations: {
            throwOnError: true
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true}/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);