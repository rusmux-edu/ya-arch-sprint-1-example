import {lazy, Suspense} from 'react';
import useJwtStore from 'store/jwtStore'; /* eslint-disable-line import/no-unresolved */

import logo from '@/assets/logo.svg';

const FallbackComponent = () => <div className='error'>Component is not available!</div>;
const catchCallback = error => {
    console.error(`Error during loading remote: ${error}`);
    return {default: FallbackComponent};
};

/* eslint-disable import/no-unresolved */
const Login = lazy(() => import('auth/Login').catch(catchCallback));
const Welcome = lazy(() => import('auth/Welcome').catch(catchCallback));
const TaskList = lazy(() => import('tasks/TaskList').catch(catchCallback));
/* eslint-enable import/no-unresolved */

export default function App() {
    const jwt = useJwtStore(state => state.jwt);

    return (
        <div className='container'>
            <header className='app-header'>
                <img alt='logo' className='app-logo' src={logo} />
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
}
