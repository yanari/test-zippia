import { useEffect, useState } from 'react'
import UserItem from './components/user';
import { fetchUsers } from './actions';

function App() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    async function fetch() {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
    }
    fetch();
  }, []);

  return (
    <main className="bg-neutral-50 min-h-dvh">
        <section className="max-w-5xl m-auto">
            <ul className="grid gap-2 grid-cols-2">
                {users?.map((user) => (
                    <UserItem key={user.id} data={user} />
                ))}
            </ul>
        </section>
    </main>
  )
}

export default App
