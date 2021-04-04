import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-sm-12 row">
                <div className="col-6">
                    <div className="card border-primary mb-3">
                    <div className="card-header text-center text-success">Add User</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name"  placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="phone"  placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-sm btn-block btn-primary">Add</div>
                        </div>
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