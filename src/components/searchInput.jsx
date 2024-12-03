import { useState } from "react"
import { useUsers } from "../contexts/usersContext";
import SortFilter from "./sortFilter";

import CloseIcon from '../icons/closeIcon';
import SearchIcon from '../icons/searchIcon';

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
        <div className="flex justify-stretch items-stretch gap-4">
            {haveFetched ? (
                <>
                    <div className="grow relative">
                        <input
                            name="search_field"
                            onChange={updateField}
                            value={searchField}
                            className="py-2 pl-10 pr-4 rounded-md border-teal-700 border focus:shadow-md shadow-teal-700 outline-none w-full"
                            type="text"
                        />
                        <button onClick={cleanField} className="absolute right-2 top-0 bottom-0">
                            <CloseIcon className="text-teal-700" />
                        </button>
                        <SearchIcon className="absolute left-4 top-0 bottom-0"/>
                    </div>
                    <SortFilter />
                </>
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
