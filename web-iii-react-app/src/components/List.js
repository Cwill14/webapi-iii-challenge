import React, { useContext } from 'react';

import User from './User';
import { ListContext } from '../contexts/ListContext';

const List = () => {
    
    const users = useContext(ListContext);

    return (
        <div>
            {users.users.map(user => {
                return <User user={user} key={user.id} />
            })}
            
        </div>
    );
};

export default List;