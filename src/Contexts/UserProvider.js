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
            editObj: {},
            searchText: ''
        }
        this.showFormAdd = this.showFormAdd.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.showFormEdit = this.showFormEdit.bind(this);
        this.getItemEdit = this.getItemEdit.bind(this);
        this.editObjItem = this.editObjItem.bind(this);
        this.getSearchText = this.getSearchText.bind(this);
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
    editObjItem = (id, name, phone, permission) => {
        var editObject = {};
        editObject.id = id;
        editObject.name = name;
        editObject.phone = phone;
        editObject.permission = permission;

        var dataTempAfterEdit = this.state.data;
        dataTempAfterEdit.forEach((item) =>{
            if(item.id === editObject.id){
                item.name = editObject.name;
                item.phone = editObject.phone;
                item.permission = editObject.permission;
            }
        })

        this.setState({
            data: dataTempAfterEdit
        });

        this.showFormEdit();
    }

    getSearchText = (textSearch) => {
        this.setState({
            searchText: textSearch
        });
    }
    
    render() {
        var result = [];
        this.state.data.forEach((item) => {
            if(item.name.indexOf(this.state.searchText) !== -1){
                result.push(item);
            }
        })
        console.log(result);

        return (
            <UserContext.Provider value={{
                data: result,
                statusFormAdd: this.state.statusFormAdd,
                showFormAdd: this.showFormAdd,
                deleteUser: this.deleteUser,
                addUser:  this.addUser,
                statusFormEdit: this.state.statusFormEdit,
                showFormEdit: this.showFormEdit,
                getItemEdit: this.getItemEdit,
                editObj: this.state.editObj,
                editObjItem: this.editObjItem,
                getSearchText: this.getSearchText
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;