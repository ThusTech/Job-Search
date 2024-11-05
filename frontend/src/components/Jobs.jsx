import Job from './Job'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {RingLoader, ClimbingBoxLoader} from 'react-spinners'
import Loader from './Loader'



export default function Jobs({
    textColor = "text-white"}){

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Use the VITE_API_URL environment variable
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true)
                try{
                    const response = await axios.get(`${API_URL}/jobs`);
                    setJobs(response.data);
                }catch (err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            };
            fetchData();
        }, [API_URL]
    )

    const jobElements = jobs.map((job) => {
        return <Job key={job.id} job={job}/>
    })

    return (
        <section className= {`px-4 py-10` }>
                { loading ? <Loader loading={loading}/> : 
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