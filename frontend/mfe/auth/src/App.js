import {createRoot} from 'react-dom/client';
import {StrictMode} from "react";

import './index.css';

const App = () => (
    <div className='container'>
        <div>Name: auth</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
    </div>
);
const rootElement = document.querySelector('#app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);