export default function UserItem({ data, isComplete }) {
    const {
        name,
        username,
        email,
        address: { city, street, suite },
        website,
        phone,
        company,
    } = data;

    const fontSizes = {
        nameFontSize: isComplete ? 'text-2xl' : 'text-xl',
        infoFontSize: isComplete ? 'text-md' : 'text-sm',
        companyName: isComplete ? 'text-xl' : 'text-lg',
        companyInfo: isComplete ? 'text-md' : 'text-sm',
    }

    return (
        <li className="text-start rounded-md shadow-md p-4 bg-white grid gap-4">
            <div className="flex gap-2 items-baseline grow">
                <h3 className={`font-semibold ${fontSizes.nameFontSize}`}>{name}</h3>
                <span className="text-sm text-gray-600">@{username}</span>
            </div>
            <div>
                <p className={fontSizes.infoFontSize}>
                    Email:{" "}
                    <span className="text-gray-500">{email}</span>
                </p>
                <p className={fontSizes.infoFontSize}>
                    Phone:{" "}
                    <span className="text-gray-500">{phone}</span>
                </p>
                <p className={fontSizes.infoFontSize}>
                    City:{" "}
                    <span className="text-gray-500">{city}</span>
                </p>
                {isComplete && (
                    <>
                        <p className="text-md">
                            Street:{" "}
                            <span className="text-gray-500">{street}, {suite}</span>
                        </p>
                    </>
                )}
            </div>
            {isComplete && (
                <div className="text-sm text-center text-gray-500">
                    <a className="underline text-teal-700 text-xl italic" href={website}>{website}</a>
                </div>
            )}
            <hr />
            <div className="text-end">
                <h4 className={`text-teal-700 font-semibold ${fontSizes.companyName}`}>{company?.name}</h4>
                <p className={`italic ${fontSizes.companyInfo}`}>{company?.catchPhrase}</p>
                <p className={`text-gray-500 ${fontSizes.companyInfo}`}>{company?.bs}</p>
            </div>
        </li>
    )
}