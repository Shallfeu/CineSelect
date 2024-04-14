import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Container "root" not found');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ChakraProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ChakraProvider>
        </StoreProvider>
    </BrowserRouter>,
);