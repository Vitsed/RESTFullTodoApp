import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class EditTodoItem extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            record: '',
        }
        this.saveItem = this.saveItem.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {

        ApiService.fetchItemById(window.localStorage.getItem("itemId"))
            .then((res) => {
                let item = res.data.result;
                this.setState({
                id: item.id,
                record: item.record,
                })
            });
    }

    onChange = (e) => {
        // debugger
        this.setState({ [e.target.name]: e.target.value });
    }

    saveItem = (e) => {
        // debugger
        e.preventDefault();
        let item = {id: this.state.id, record: this.state.record};

        ApiService.editItem(item)
            .then(res => {
                this.setState({message : 'Item added successfully.'});
                this.props.history.push('/todolist');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Todo Item</h2>
                <form>

                    <div className="form-group">
                        <label>Todo Item:</label>
                        <input type="text" placeholder="item" name="record" className="form-control"  value={this.state.record} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveItem}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditTodoItem;