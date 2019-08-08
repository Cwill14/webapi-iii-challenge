import React from 'react';
import axios from 'axios';

const User = props => {
    
    const deleteUser = id => {
        axios
            .delete(`https://web-api-challenge-3-heroku.herokuapp.com/users/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return (
        <div className="user">
            <h3>{props.user.name}</h3>
            <button>Edit</button>
            <button onClick={() => deleteUser(props.user.id)}>Delete</button>
        </div>
    );
};

export default User;