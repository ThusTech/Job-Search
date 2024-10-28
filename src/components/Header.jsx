

export default function Header({title = 'Become a software Developer',
     subTitle = 'Find the job that fits your skills and needs'}){
    return (
        <section className="bg-gradient-to-br from-purple-600 to-blue-500 py-20 mb-4 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {subTitle}
                    </p>
                </div>
            </div>
        </section>  
    )
}