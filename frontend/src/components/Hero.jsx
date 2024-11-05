

export default function Hero({title = 'Become a software Developer',
     subTitle = 'Find the job that fits your skills and needs'}){
    return (
        <section className="py-20 mb-4 border-b-2 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="my-4 text-xl">
                        {subTitle}
                    </p>
                </div>
            </div>
        </section>  
    )
}