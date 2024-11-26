class Api {

    login(_username, _password) {
        // В реальном приложении здесь будет обращение к API login service
        return 'fake-token';
    }

    getProfile() {
        // В реальном приложении здесь будет обращение к API login service
        return {
            userName: 'Студент',
        };
    }
}

const api = new Api();

export default api;
