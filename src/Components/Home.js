import React, { Component } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import SearchForm from './SearchForm';
import UserContext from '../Contexts/UserContext';

class Home extends Component {
    render() {
        return (
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <SearchForm/>
                        <UserContext.Consumer>
                            {({statusFormAdd}) => {
                                if(statusFormAdd === true){
                                    return <AddUser/>
                                }
                            }}
                        </UserContext.Consumer>
                        <ListUser/> 
                        <EditUser/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;