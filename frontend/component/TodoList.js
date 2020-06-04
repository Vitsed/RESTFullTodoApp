import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            message: null
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.reloadTodoList = this.reloadTodoList.bind(this);
    }

    componentDidMount() {
        this.reloadTodoList();
    }

    reloadTodoList() {
        ApiService.fetchTodoList()
            .then((res) => {
                this.setState({todoList: res.data.result})
            });
    }

    deleteItem(itemId) {
        ApiService.deleteItem(itemId)
           .then(() => {
               this.setState({message : 'Item deleted successfully.'});
               this.setState({todoList: this.state.todoList.filter(item => item.id !== itemId)});
           })

    }

    editItem(id) {
        window.localStorage.setItem("itemId", id);
        this.props.history.push('/edit-item');
    }

    addItem() {
        window.localStorage.removeItem("itemId");
        this.props.history.push('/add-item');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Список дел</h2>
                <button className="btn btn-danger" onClick={() => this.addItem()}> Добавить </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Задача</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todoList.map(
                                    item =>
                                    <tr key={item.id}>
                                        <td>{item.item}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteItem(item.id)}> Удалить</button>
                                            <button className="btn btn-success" onClick={() => this.editItem(item.id)}> Редактировать</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default TodoList;