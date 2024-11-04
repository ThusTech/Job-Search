import {RingLoader, ClimbingBoxLoader} from 'react-spinners'

export default function Loader(){
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <ClimbingBoxLoader color='#3532cf' size={120} loading={true}/>
        </div>
    )
}