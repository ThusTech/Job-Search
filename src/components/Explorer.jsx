import CardExplorer from './CardExplorer'

export default function Explorer(){
    return (
        <section className='py-4'>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <CardExplorer title='For Developer' 
                    description='Browse our Software Developer jobs and start your career today.' 
                    subDescription="Browse Jobs"/>

                    <CardExplorer
                    bg = "bg-indigo-100"
                    title='For Employers' 
                    description='List your job to find the perfect developer for the role.' 
                    subDescription="Add Jobs"/>
                </div>
            </div>
        </section>
    )
}