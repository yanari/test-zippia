import React, { createContext, useContext, useState, useMemo } from 'react';
import { getNested } from '../utils/lists';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
    
            setUsers(json);
            setAllUsers(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    const hasUsersDisplayed = useMemo(() => {
        return users.length > 0;
    }, [users]);

    const haveFetched = useMemo(() => {
        return allUsers.length > 0;
    }, [allUsers]);

    const filterUsersByName = (name) => {
        const usersFiltered = allUsers.filter((user) => {
            const userLowered = user?.name.toLowerCase();
            const filterLowered = name.toLowerCase();
            return userLowered.includes(filterLowered);
        });
        setUsers(usersFiltered);
    }

    const sortUsersBy = (field, order) => {
        const usersSorted = users.sort((a, b) => {
            const itemA = getNested(a, field).toLowerCase();
            const itemB = getNested(b, field).toLowerCase();

            if (order === 'asc') {
                return itemA.localeCompare(itemB);
            }
            if (order === 'des') {
                return itemB.localeCompare(itemA);
            }
        });

        setUsers([...usersSorted]);
    }

    return (
        <UsersContext.Provider value={{
            users,
            fetchUsers,
            filterUsersByName,
            hasUsersDisplayed,
            haveFetched,
            sortUsersBy,
            error,
            isLoading,
        }}>
            {children}
        </UsersContext.Provider>
    );
};

const useUsers = () => {
    return useContext(UsersContext);
};

export { UsersProvider, useUsers };