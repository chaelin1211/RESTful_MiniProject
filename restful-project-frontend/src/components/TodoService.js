import axios from 'axios';

export default class TodoService {
    getAll(callback) {
        const url = 'http://localhost:5000/todo';
        axios.get(url).then((response) => callback(response.data))
            .catch(e => {
                console.log(e);
            });
    }
    get(request, callback) {
        const url = 'http://localhost:5000/todo/'+request.id;
        axios.get(url).then((response) => callback(response.data))
            .catch(e => {
                console.log(e);
            });
    }
    post(request, callback) {
        const url = 'http://localhost:5000/todo';
        axios.post(url, request).then((response) => callback(response.data))
            .catch(function (error) {
                console.log(error);
            });
    }
    delete(request, callback) {
        const url = 'http://localhost:5000/todo/'+request.id;
        axios.delete(url).then((response) => callback(response.data))
            .catch(function (error) {
                console.log(error);
            });
    }
    update(request, callback) {
        const url = 'http://localhost:5000/todo';
        axios.patch(url, request).then((response) => callback(response.data))
            .catch(function (error) {
                console.log(error);
            });
    }
}