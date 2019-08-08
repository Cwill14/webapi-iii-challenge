import React, { useState, useContext } from 'react';
import axios from 'axios';

import { ListContext } from '../contexts/ListContext';


const Form = props => {
    const [values, setValues] = useState({
        name: '',
        // method: ''
    });

    // let addingUser = true;

    // const setUsers = useContext(ListContext);    
    
    const handleChanges = e => {
        e.preventDefault();
        setValues({
            [e.target.name]: e.target.value
        })
    }

    // const submit = cb => {
    //     cb(values)
    //     setValues({
    //         name: ''
    //     })
    // }

    const addUser = () => {
        // addingUser = true;
        // setUsers(values);
        axios
            .post('https://web-api-challenge-3-heroku.herokuapp.com/users', values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        setValues({
            name: '',
            // method: ''
        })
        props.history.push('/')
    }
    console.log(props);
    // addingUser && submit(addUser)

    // const checkMethod = method => {
    //     if (method === values.method)
    // }

    // console.log(values.method);

    return (
        // <form onSubmit={checkMethod(values.method)}>
        <form onSubmit={addUser}>
            {/* <label>Add User<input type="radio" name="add" value={values.method} onChange={handleChanges} checked /></label>
            <label>Edit User<input type="radio" name="put" value={values.method} onChange={handleChanges} /></label> */}
            {/* <input type="text" name="method" value={values.method} placeholder="method" onChange={handleChanges} /> */}
            <input value={values.name} placeholder="name" name="name" onChange={handleChanges} /> 
            <button>Submit</button>
        </form>
    );
};

export default Form;