import '@/index.css';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from '@/components/App.jsx';

createRoot(document.querySelector('#root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
