class Api {
    getProfile() {
        // В реальном приложении здесь будет обращение к API login service
        return {
            userName: 'Студент',
        };
    }

    /* eslint-disable no-unused-vars */
    login(_username, _password) {
        /* eslint-enable no-unused-vars */
        // В реальном приложении здесь будет обращение к API login service
        return 'fake-token';
    }
}

const api = new Api();

export default api;
