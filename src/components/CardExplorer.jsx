

export default function CardExplorer(props){
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold">
                            {props.title}
                        </h2>
                        <p className="mt-2 mb-4">
                            {props.description}
                        </p>
                        <a className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700" href="*">
                            {props.linkDescription}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}