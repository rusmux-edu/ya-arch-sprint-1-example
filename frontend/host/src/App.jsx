import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.svg';

import './index.css';

const DefaultComponent = () => <div className='error'>Component is not available!</div>;
const catchCallback = () => ({default: DefaultComponent});

const Login = lazy(() => import('auth/Login').catch(catchCallback));
const Welcome = lazy(() => import('auth/Welcome').catch(catchCallback));
const TaskList = lazy(() => import('tasks/TaskList').catch(catchCallback));

const App = () => {
    const [jwt, setJwt] = useState('');

    const handleJwtChange = useCallback(event => {
        setJwt(event.detail);
    }, []);

    useEffect(() => {
        addEventListener('jwt-change', handleJwtChange);
        return () => removeEventListener('jwt-change', handleJwtChange);
    }, [handleJwtChange]);

    return (
        <div className='container'>
            <header className='app-header'>
                <img src={logo} className='app-logo' alt='logo' />
                Лабораторная работа по микрофронтендам
            </header>
            <section className='app-content'>
                {jwt ? (
                    <>
                        <Suspense fallback={<div>Loading welcome page...</div>}>
                            <Welcome jwt={jwt} />
                        </Suspense>
                        <Suspense fallback={<div>Loading tasks...</div>}>
                            <TaskList jwt={jwt} />
                        </Suspense>
                    </>
                ) : (
                    <>
                        <Suspense fallback={<div>Loading login page</div>}>
                            <Login />
                        </Suspense>
                    </>
                )}
            </section>
        </div>
    );
};

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
