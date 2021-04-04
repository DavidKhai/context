import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';
import dl from '../Components/Data.json'

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dl,
            statusFormAdd: false
        }
        this.showFormAdd = this.showFormAdd.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    showFormAdd = () => {
        this.setState({
            statusFormAdd: !this.state.statusFormAdd
        });
    }

    deleteUser = (idUser) => {
        var dataAfterDelete = this.state.data;
        dataAfterDelete = dataAfterDelete.filter(item => item.id !== idUser);
        this.setState({
            data: dataAfterDelete
        });
    }

    addUser = (name, phone, permission) => {
        var dataAfterAdd = this.state.data;
        var item = {};
        item.name = name;
        item.phone = phone;
        item.permission = permission;
        dataAfterAdd.push(item);
        this.setState({
            data: dataAfterAdd
        });

        this.showFormAdd();
    }
    
    render() {
        return (
            <UserContext.Provider value={{
                data: this.state.data,
                statusFormAdd: this.state.statusFormAdd,
                showFormAdd: this.showFormAdd,
                deleteUser: this.deleteUser,
                addUser:  this.addUser
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;