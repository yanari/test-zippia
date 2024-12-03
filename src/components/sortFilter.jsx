import { useUsers } from "../contexts/usersContext";

export default function SortFilter() {
    const { sortUsersBy } = useUsers();

    const sortBy = (e) => {
        const value = e.target.value;
        if (value !== '') {
            const [field, order] = value.split('_');
            sortUsersBy(field, order)
        }
    }

    return (
        <select className="px-2 rounded-md border-teal-700 border shadow-teal-700 outline-none" onChange={sortBy}>
            <option value="">Sort by:</option>
            <option value="name_asc">Name: A-Z</option>
            <option value="name_des">Name: Z-A</option>
            <option value="email_asc">Email: A-Z</option>
            <option value="email_des">Email: Z-A</option>
            <option value="address.city_asc">City: A-Z</option>
            <option value="address.city_des">City: Z-A</option>
            <option value="company.name_asc">Company Name: A-Z</option>
            <option value="company.name_des">Company Name: Z-A</option>
        </select>
    )
}