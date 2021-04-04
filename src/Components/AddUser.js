import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            permission: ''
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
            <div className="col-sm-12 row">
                <div className="col-6">
                    <div className="card border-primary mb-3">
                    <div className="card-header text-center text-success">Add User</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name"  placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="phone"  placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} className="custom-select" name="permission" required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <UserContext.Consumer>
                                    {({addUser}) => (
                                         <button onClick={addUser.bind(this, this.state.name, this.state.phone, this.state.permission )} className="btn btn-sm btn-block btn-primary" type="reset">Add</button>
                                    )}
                                   
                                </UserContext.Consumer>
                            </div>
                        </form>    
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
        );
    }
}

export default AddUser;