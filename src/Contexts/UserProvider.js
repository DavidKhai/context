import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';
import dl from '../Components/Data.json'

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dl,
            statusFormAdd: false,
            statusFormEdit: false,
            editObj: {}
        }
        this.showFormAdd = this.showFormAdd.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.showFormEdit = this.showFormEdit.bind(this);
        this.getItemEdit = this.getItemEdit.bind(this);
        this.editObjItem = this.editObjItem.bind(this);
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

    showFormEdit = () => {
        this.setState({
            statusFormEdit: !this.state.statusFormEdit
        });
    }


    getItemEdit = (itemEdit) => {
        this.setState({
            editObj: itemEdit
        });

        this.showFormEdit();
    }
    editObjItem = (name, phone, permission) => {
        console.log(name + " " + phone + " " + permission);
    }
    
    render() {
        return (
            <UserContext.Provider value={{
                data: this.state.data,
                statusFormAdd: this.state.statusFormAdd,
                showFormAdd: this.showFormAdd,
                deleteUser: this.deleteUser,
                addUser:  this.addUser,
                statusFormEdit: this.state.statusFormEdit,
                showFormEdit: this.showFormEdit,
                getItemEdit: this.getItemEdit,
                editObj: this.state.editObj,
                editObjItem: this.editObjItem
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;