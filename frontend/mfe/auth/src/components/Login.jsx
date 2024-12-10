import '@/components/Login.css';

import {useState} from 'react';
import useJwtStore from 'store/jwtStore'; /* eslint-disable-line import/no-unresolved */
import {useDebouncedCallback} from 'use-debounce';

import api from '@/utils/api.js';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const debouncedSetEmail = useDebouncedCallback(setEmail, 500);
    const debouncedSetPassword = useDebouncedCallback(setPassword, 500);

    const setJwt = useJwtStore(state => state.setJwt);

    return (
        <div className='login-box'>
            <div className='caption'>Имя пользователя</div>
            <div className='control'>
                <input name='userName' required onChange={event => debouncedSetEmail(event.target.value)} />
            </div>
            <div className='caption'>Пароль</div>
            <div className='control'>
                <input
                    name='password'
                    required
                    type='password'
                    onChange={event => debouncedSetPassword(event.target.value)}
                />
            </div>
            <div className='actions'>
                {/*<button type='submit' onClick={() => onLogin(email, password)}>*/}
                <button type='submit' onClick={() => setJwt(api.login(email, password))}>
                    Войти
                </button>
            </div>
        </div>
    );
}
