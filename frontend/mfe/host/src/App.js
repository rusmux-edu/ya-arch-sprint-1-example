import './index.css';

import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const rootElement = document.querySelector('#app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
