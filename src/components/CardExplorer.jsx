

export default function CardExplorer({bg='bg-gray-100',title, description, subDescription}){
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">
                {title}
            </h2>
            <p className="mt-2 mb-4">
                {description}
            </p>
            <a className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700" href="*">
                {subDescription}
            </a>
        </div>
    )
}