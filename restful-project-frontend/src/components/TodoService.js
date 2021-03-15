import axios from 'axios';

export default class TodoService {
    getAll(callback) {
        const url = 'http://localhost:8080/todo';
        axios.get(url).then((response) => callback(response.data))
            .catch(e => {
                console.log(e);
            });
    }
}