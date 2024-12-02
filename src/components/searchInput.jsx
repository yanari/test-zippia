import { useState } from "react"
import { useUsers } from "../contexts/usersContext";

export default function SearchInput() {
    const {
        fetchUsers,
        filterUsersByName,
        haveFetched,
    } = useUsers();

    const [searchField, setSearchField] = useState('');

    const cleanField = () => {
        setSearchField('');
        filterUsersByName('');
    }

    const updateField = (e) => {
        const name = e.target.value;
        setSearchField(name);
        filterUsersByName(name);
    }

    return (
        <div className="flex justify-stretch gap-4">
            {haveFetched ? (
                <div className="grow relative">
                    <input
                        name="search_field"
                        onChange={updateField}
                        value={searchField}
                        className="py-2 px-4 rounded-md border-teal-700 border focus:shadow-md shadow-teal-700 outline-none w-full"
                        type="text"
                    />
                    <button onClick={cleanField} className="absolute right-2 top-0 bottom-0">
                        <CloseIcon className="text-teal-700" />
                    </button>
                </div>
            ) : (
                <button
                    className="w-full border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white hover:shadow-md shadow-teal-700 rounded-md py-2 px-4 font-semibold disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    onClick={fetchUsers}
                >
                    Fetch Users
                </button>
            )}
        </div>
    )
}

function CloseIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${className}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}