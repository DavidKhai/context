import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col-3 ">
                <div className="card border-warning mb-3">
                    <div className="card-header text-center text-warning">Edit User</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="phone" placeholder="Điện thoại" />
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
                            <div className="btn btn-sm btn-block btn-primary">Update</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;