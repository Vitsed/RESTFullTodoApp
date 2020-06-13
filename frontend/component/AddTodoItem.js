import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class AddTodoItem extends Component{

    constructor(props){
        super(props);
        this.state ={
            item: '',
            message: null
        }
        this.saveTodoItem = this.saveTodoItem.bind(this);
    }

    saveTodoItem = (e) => {
        e.preventDefault();
        let item = {record: this.state.item};
        // api service
        ApiService.addItem(item)
        .then(() => {
            this.setState({message : 'Item added successfully.'});
            this.props.history.push('/todolist');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Добавить задачу в список дел:</h2>
                <form>
                    <div className="form-group">
                        <label>Задача:</label>
                        <input type="text" placeholder="Задача" name="item" className="form-control" value={this.state.item} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveTodoItem}>Сохранить</button>
                </form>
            </div>
        );
    }
}

export default AddTodoItem;