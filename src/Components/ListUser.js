import React, { Component } from 'react';
import UserItem from "./UserItem";
import UserContext from '../Contexts/UserContext';

class ListUser extends Component {
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserContext.Consumer>
                            {({data}) => (
                                data.map((value, key) => {
                                    return(
                                        <UserItem key={key}
                                            i={key}
                                            value={value}
                                            name={value.name}
                                            phone={value.phone}
                                            permission={value.permission}/>
                                    )
                                })
                            )}
                        </UserContext.Consumer>
                       
                        {/* <UserItem/>
                        <UserItem/>
                        <UserItem/> */}
                    </tbody>
                </table>
            </div>  
        );
    }
}

export default ListUser;