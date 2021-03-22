import axios from 'axios';
import TodoList from './TodoList';

export default class TodoService {
    getAll(callback) {
        const url = 'http://localhost:8080/todo';
        axios.get(url).then((response) => callback(response.data))
            .catch(e => {
                console.log(e);
            });
    }
    post(data) {
        const url = 'http://localhost:8080/todo';
        axios.post(url, data)
        .catch(function (error) {
            console.log(error);
        });
    }
}