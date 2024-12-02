import UserItem from './components/user';
import SearchInput from './components/searchInput';
import { useUsers } from './contexts/usersContext';

function App() {
    const { users } = useUsers();

    return (
        <main className="bg-neutral-50 min-h-dvh py-4">
            <section className="max-w-5xl m-auto mb-8">
                <SearchInput />
            </section>
            <section className="max-w-5xl m-auto">
                <ul className="grid gap-4 grid-cols-2">
                    {users?.map((user) => (
                        <UserItem key={user.id} data={user} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default App
