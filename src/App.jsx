import UserItem from './components/user';
import Modal from './components/modal';
import SearchInput from './components/searchInput';
import LoadingIcon from './icons/loadingIcon';

import { useUsers } from './contexts/usersContext';
import { useModal } from './contexts/modalContext';

function App() {
    const {
        users,
        hasUsersDisplayed,
        haveFetched,
        isLoading,
        error
    } = useUsers();

    const { setUserDetail } = useModal();

    if (isLoading) {
        return (
            <div className="mt-20 w-full flex justify-center">
                <LoadingIcon/>
            </div>
        )
    }

    if (error) {
        return (
            <div className="mt-20 w-full flex justify-center text-lg">
                Oops! Something went wrong. Please try again later.
            </div>
        )
    }

    return (
        <main className="bg-neutral-50 min-h-dvh py-4">
            <section className="px-4 md:px-0 max-w-5xl m-auto mb-8">
                <SearchInput />
            </section>
            <section className="px-4 md:px-0 max-w-5xl m-auto">
                <ul className="grid gap-4 md:grid-cols-2">
                    {users?.map((user) => (
                        <button key={user.id} onClick={() => setUserDetail(user.id)}>
                            <UserItem data={user} />
                        </button>
                    ))}
                    {(!hasUsersDisplayed && haveFetched) && (
                        <p>No users found!</p>
                    )}
                </ul>
            </section>
            <Modal />
        </main>
    )
}

export default App
