export default function UserItem({ data }) {
    const {
        name,
        username,
        email,
        address: { city },
        phone,
        company,
    } = data;

    return (
        <li className="text-start rounded-md shadow-md p-4 bg-white grid gap-4">
            <div className="flex gap-2 items-baseline grow">
                <h3 className="font-semibold text-xl">{name}</h3>
                <span className="text-sm text-gray-600">@{username}</span>
            </div>
            <div>
                <p className="text-sm">
                    Email:{" "}
                    <span className="text-gray-500">{email}</span>
                </p>
                <p className="text-sm">
                    Phone:{" "}
                    <span className="text-gray-500">{phone}</span>
                </p>
                <p className="text-sm">
                    City:{" "}
                    <span className="text-gray-500">{city}</span>
                </p>
            </div>
            <hr />
            <div className="text-end">
                <h4 className="text-teal-700 font-semibold text-lg">{company?.name}</h4>
                <p className="italic text-sm">{company?.catchPhrase}</p>
                <p className="text-gray-500 text-sm">{company?.bs}</p>
            </div>
        </li>
    )
}