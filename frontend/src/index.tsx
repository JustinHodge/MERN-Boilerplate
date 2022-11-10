import React from 'react';
import ReactDOM from 'react-dom/client';
import 'core-js/features/array/flat-map';
import 'core-js/features/map';
import 'core-js/features/promise';
import 'core-js/features/set';
import 'raf/polyfill';
import 'whatwg-fetch';

import App from './Components/App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import chakraTheme from './chakraTheme';

const rootElement = document.getElementById('app-root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <ChakraProvider>
            <ColorModeScript
                initialColorMode={chakraTheme.config.initialColorMode}
            />
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChakraProvider>
    );
}
