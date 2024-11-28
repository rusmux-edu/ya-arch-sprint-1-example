import {useState} from 'react';
import './Login.css';
import api from '../utils/api';

const onLogin = (name, password) => {
    dispatchEvent(new CustomEvent('jwt-change', {detail: api.login(name, password)}));
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-box'>
            <div className='caption'>Имя пользователя</div>
            <div className='control'>
                <input name='userName' required onChange={event => setEmail(event.target.value)} />
            </div>
            <div className='caption'>Пароль</div>
            <div className='control'>
                <input name='password' required type='password' onChange={event => setPassword(event.target.value)} />
            </div>
            <div className='actions'>
                <button type='submit' onClick={() => onLogin(email, password)}>
                    Войти
                </button>
            </div>
        </div>
    );
}
