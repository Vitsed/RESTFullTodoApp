import axios from 'axios';

const TODO_LIST_API_BASE_URL = 'http://localhost:8080/todolist';

class ApiService {

    fetchTodoList() {
        return axios.get(TODO_LIST_API_BASE_URL);
    }

    fetchItemById(itemId) {
        return axios.get(TODO_LIST_API_BASE_URL + '/' + itemId);
    }

    deleteItem(itemId) {
        return axios.delete(TODO_LIST_API_BASE_URL + '/' + itemId);
    }

    addItem(item) {
        return axios.post(""+TODO_LIST_API_BASE_URL, item);
    }

    editItem(item) {
        return axios.put(TODO_LIST_API_BASE_URL + '/' + item.id, item);
    }

}

export default new ApiService();