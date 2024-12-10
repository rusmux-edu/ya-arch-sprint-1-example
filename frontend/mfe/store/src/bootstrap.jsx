import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

createRoot(document.querySelector('#root')).render(
    <StrictMode>
        <div className='container'>
            <div>Name: store</div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Empty CSS</div>
        </div>
    </StrictMode>,
);
