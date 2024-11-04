import Job from './Job'
import {useEffect, useState} from 'react'
import axios from 'axios'
import RingLoader from 'react-spinners/RingLoader'
import Loader from './Loader'



export default function Jobs({ 
    bg = "bg-white-50",
    textColor = "text-white"}){

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(
        () => {
            setLoading(true)
            try{
                axios.get('http://127.0.0.1:8080/jobs').then(
                    (response) => {
                        setJobs(response.data)
                    }
                )
            }catch (err){
                // setError()
            }finally{
                setLoading(false)
            }
            
        }, []
    )

    

    const jobElements = jobs.map((job) => {
        return <Job key={job.id} job={job}/>
    })

    return (
        <section className= {`${bg} px-4 py-10` }>
                { loading ? <Loader/> : 
                    <div className='container-xl lg:container m-auto'>
                        <h2 className={`text-2xl ${textColor} mb-6 text-center font-bold font-sans`}>
                            Jobs for you
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            { jobElements }
                        </div>
                    </div>  
                }
        </section>
    )
}