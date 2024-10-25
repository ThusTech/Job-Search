export default function Job({ job, }){

    console.log(job)
    return (
        <div>
            <h4>{job.type}</h4>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <h4>{job.salary}</h4>
            <div>
                <h4>{job.location}</h4>
                <a href="*">Read More</a>
            </div>
        </div>
    )
}