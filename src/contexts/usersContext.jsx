import React, { createContext, useContext, useState, useMemo } from 'react';

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

    const hasUsersDisplayed = useMemo(() => {
        return users.length > 0;
    }, [users]);

    const filterUsersByName = (name) => {
        const usersFiltered = allUsers.filter((user) => {
            const userLowered = user?.name.toLowerCase();
            const filterLowered = name.toLowerCase();
            return userLowered.includes(filterLowered);
        });
        setUsers(usersFiltered);
    }

    return (
        <UsersContext.Provider value={{
            users,
            fetchUsers,
            filterUsersByName,
            hasUsersDisplayed,
        }}>
            {children}
        </UsersContext.Provider>
    );
};

const useUsers = () => {
    return useContext(UsersContext);
};

export { UsersProvider, useUsers };