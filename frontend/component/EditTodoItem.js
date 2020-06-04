import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditTodoItem extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            item: '',
        }
        this.saveUser = this.saveUser.bind(this);
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
                username: item.item,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let item = {id: this.state.id, item: this.state.item};
      
        ApiService.editUser(item)
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
                        <input type="text" placeholder="item" name="item" className="form-control" readonly="true" defaultValue={this.state.item}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditTodoItem;