import React from 'react';
import ReactDOM from 'react-dom/client';
import 'core-js/features/array/flat-map';
import 'core-js/features/map';
import 'core-js/features/promise';
import 'core-js/features/set';
import 'raf/polyfill';
import 'whatwg-fetch';

import App from './Components/App';

const rootElement = document.getElementById('app-root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
