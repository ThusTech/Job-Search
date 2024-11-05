import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

export default function JobPage(){

    const {id} = useParams()
    const [job, setJob] = useState()
    const [loading, setLoading] = useState(true)

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true)

                try{
                    const response = await axios.get(`${API_URL}/jobs/${id}`)
                    setJob(await response.data)
                }catch (err){

                }finally{
                    setLoading(false)
                }
            }

        fetchData();
    }, [API_URL]);

    return (
        <>
            {
                loading ? <Loader loading={loading}/> : (
                    <section className="bg-white min-h-screen flex items-center justify-center py-20">
                        <div className="w-3/4 bg-white rounded-3xl shadow-lg p-8 border-2 border-gray">
                            <div className="text-center mb-8">
                                <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                                    </svg>
                                </div>

                                <h1 class="text-3xl font-extrabold text-gray-800 mt-4">{ job?.title }</h1>
                                <p class="text-gray-500">{ job?.location }</p>
                            </div>

                            <div class="flex items-center justify-between bg-blue-50 p-4 rounded-xl mb-6">
                                <span class="text-blue-600 font-bold">{ job?.type }</span>
                                <span class="text-blue-600 font-bold text-lg">{ job?.salary }</span>
                            </div>

                            <div class="mb-6">
                                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-2">
                                    <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
                                    </svg>
                                    Job Description
                                </h2>
                                <p class="text-gray-700 text-sm">
                                    { job?.description }
                                </p>
                            </div>

                            <div class="mb-6">
                                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-2">
                                    <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-5a2 2 0 014 0v5M5 10l1-2m13 0l-1-2M4 10h16l-1.5 13H5.5L4 10zm5.5 0v5m5-5v5"></path>
                                    </svg>
                                    About { job?.company.name }
                                </h2>
                                <p class="text-gray-700 text-sm">
                                    { job?.company?.description }
                                </p>
                            </div>

                            <div class="p-4 bg-gray-50 rounded-xl mb-6">
                                <p class="text-gray-700 text-sm">
                                    <span class="font-semibold">Email:</span> { job?.company?.contactEmail }
                                </p>
                                <p class="text-gray-700 text-sm">
                                    <span class="font-semibold">Phone:</span> { job?.company?.contactPhone }
                                </p>
                            </div>

                            <button class="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-200">
                                Apply Now
                            </button>
                        </div>
                    </section>
                )
            }
        </>
    )
}