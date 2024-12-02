import React, { createContext, useContext, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json()

        if (!res.ok) {
            return { message: res.text };
        }

        setUsers(json);
        setAllUsers(json);
    }

    const resetAllUsers = () => {
        setUsers(allUsers);
    }

    const filterUsersByName = (name) => {
        const usersFiltered = allUsers.filter((user) => {
            const userLowered = user?.name.toLowerCase();
            const filterLowered = name.toLowerCase();
            return userLowered.includes(filterLowered);
        });
        setUsers(usersFiltered);
    }

    return (
        <UsersContext.Provider value={{ users, allUsers, fetchUsers, filterUsersByName }}>
            {children}
        </UsersContext.Provider>
    );
};

const useUsers = () => {
    return useContext(UsersContext);
};

export { UsersProvider, useUsers };