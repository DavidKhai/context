import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';
class EditUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editObjItem.id,
            name: this.props.editObjItem.name,
            phone: this.props.editObjItem.phone,
            permission: this.props.editObjItem.permission
        }
    }
    
    
    
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="col-3 ">
                <div className="card border-warning mb-3">
                    <div className="card-header text-center text-warning">Edit User</div>
                    <UserContext.Consumer>
                        {({editObj, editObjItem}) => (
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input defaultValue={editObj.name} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={editObj.phone} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="phone" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select defaultValue={editObj.permission} onChange={(event) => this.isChange(event)} className="custom-select" name="permission" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                <div onClick={editObjItem.bind(this, this.state.id, this.state.name, this.state.phone, this.state.permission)} className="btn btn-sm btn-block btn-primary">Update</div>
                                    
                                </div>
                            </div>
                        )}
                        
                    </UserContext.Consumer>  
                </div>
            </div>
        );
    }
}

export default EditUser;