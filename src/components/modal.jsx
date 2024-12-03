import { createPortal } from 'react-dom';

import { useModal } from "../contexts/modalContext";
import UserItem from "./user";

export default function Modal() {
    const { content, handleCloseModal } = useModal();

    if (content === null) return null;

    return createPortal(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/70" onClick={handleCloseModal}/>
            <div className="rounded-md w-11/12 md:w-2/4 fixed -translate-x-1/2 -translate-y-1/2 z-20 bg-neutral-50 top-1/2 left-1/2">
                <UserItem data={content} isComplete />
            </div>
        </>,
        document.getElementById('portal')
    )
}