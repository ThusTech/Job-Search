import Job from './Job'
import jobList from '../jobs.json'

export default function Jobs(){
    const jobs = jobList.jobs

    const jobElements = jobs.map((job) => {
        return <Job key={job.id} job={job}/>
    })

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    Browse Jobs
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    { jobElements }
                </div>
            </div>
        </section>
    )
}