import React from 'react';
import useFetch from './useFetch'; // Importing custom hook for fetching data

const Users = () => {
    // Fetching users data using the custom hook
    const users = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <ul>
            {/* Mapping through the fetched users data and rendering list items */}
            {users.map(el => (
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
    );
}

export default Users;
