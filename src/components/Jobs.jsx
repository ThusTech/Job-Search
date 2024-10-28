import Job from './Job'
import jobList from '../jobs.json'

export default function Jobs({ 
    bg = "bg-gradient-to-br from-purple-600 to-blue-500",
    textColor = "text-white"}){
    const jobs = jobList.jobs

    const jobElements = jobs.map((job) => {
        return <Job key={job.id} job={job}/>
    })

    return (
        <section className= {`${bg} px-4 py-10` }>
            <div className='container-xl lg:container m-auto'>
                <h2 className={`text-2xl ${textColor} mb-6 text-center font-extrabold`}>
                    Browse Jobs
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    { jobElements }
                </div>
            </div>
        </section>
    )
}