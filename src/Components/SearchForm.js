import React, { Component } from 'react';
import UserContext from '../Contexts/UserContext';

class SearchForm extends Component {
    render() {
        return (
            <div className="col-sm-12 row">    
                <div className="col-7 mx-auto">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" name="search"  placeholder="Nhập từ khóa" style={{width: '500px'}} />
                            <div className="btn btn-info">Tìm</div>
                        </div>              
                    </div>
                </div>
                <div className="col-12 ">
                    <div className="form-group">
                        <UserContext.Consumer>
                            {({statusFormAdd, showFormAdd}) => {
                                if(statusFormAdd === false){
                                    return(
                                        <button onClick={showFormAdd} className="btn btn-sm btn-info mr-3">Add User</button>
                                    )
                                }
                                else{
                                    return(
                                        <button onClick={showFormAdd} className="btn btn-sm btn-danger">Close</button>  
                                    )
                                }
                            }}
                        </UserContext.Consumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;