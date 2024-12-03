import UserItem from './components/user';
import SearchInput from './components/searchInput';
import LoadingIcon from './icons/loadingIcon';

import { useUsers } from './contexts/usersContext';

// TODO: handle errors (if not online, if link broken, if conection slow etc)
function App() {
    const {
        users,
        hasUsersDisplayed,
        haveFetched,
        isLoading,
        error
    } = useUsers();

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
                        <UserItem key={user.id} data={user} />
                    ))}
                    {(!hasUsersDisplayed && haveFetched) && (
                        <p>No users found!</p>
                    )}
                </ul>
            </section>
        </main>
    )
}

export default App
