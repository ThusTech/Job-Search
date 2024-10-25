import Job from './Job'
import jobList from '../jobs.json'

export default function Jobs(){
    const jobs = jobList.jobs

    const jobElements = jobs.map((job) => {
        return <Job key={job.id} job={job}/>
    })

    return (
        <section>
            <h1>Browse Jobs</h1>
            
            <div className='Job-list'>
                { jobElements }
            </div>
        </section>
    )
}