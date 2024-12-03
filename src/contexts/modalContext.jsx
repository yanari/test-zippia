import React, { createContext, useContext, useState } from 'react';
import { useUsers } from './usersContext';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const { users } = useUsers();
    const [content, setContent] = useState(null);
    
    const setUserDetail = (userId) => {
        document.body.classList.add('overflow-y-hidden');
        const userData = users.find((user) => user.id === userId);
        setContent(userData)
    }

    const handleCloseModal = () => {
        document.body.classList.remove('overflow-y-hidden');
        setContent(null);
    }

    return (
        <ModalContext.Provider value={{
            setUserDetail,
            handleCloseModal,
            content,
        }}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => {
    return useContext(ModalContext);
};

export { ModalProvider, useModal };