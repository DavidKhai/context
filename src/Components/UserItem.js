import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';

class UserItem extends Component {
    permission = () => {
        if(parseInt(this.props.permission) === 1) return "Admin";
        else if (parseInt(this.props.permission) === 2) return "Moderator";
        else if (parseInt(this.props.permission) === 3) return "Normal";
        
    }
    render() {
        return (
            <tr>
                <td>{this.props.i + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permission()}</td>
                <td>
                    <div className="btn-group">
                    <UserContext.Consumer>
                        {({getItemEdit}) => (
                            <div onClick={getItemEdit.bind(this, this.props.value)} className="btn btn-sm btn-warning sua"><i className="fa  fa-edit" /> Sửa </div>
                        )}
                    </UserContext.Consumer>
                    
                    <UserContext.Consumer>
                        {({deleteUser}) => (
                            <div onClick={deleteUser.bind(this, this.props.value.id)} className="btn btn-sm btn-danger xoa"><i className="fa  fa-remove" /> Xóa </div>
                        )}
                    </UserContext.Consumer>
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserItem;