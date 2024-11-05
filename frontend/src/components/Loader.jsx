import {RingLoader, ClimbingBoxLoader} from 'react-spinners'

export default function Loader({loading = true}){
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <ClimbingBoxLoader color='#3532cf' size={25} loading={loading}/>
        </div>
    )
}