class Api {
    getProfile() {
        // В реальном приложении здесь будет обращение к API login service
        return {
            userName: 'Студент',
        };
    }

    login(_username, _password) {  // eslint-disable-line no-unused-vars
        // В реальном приложении здесь будет обращение к API login service
        return 'fake-token';
    }
}

const api = new Api();

export default api;
