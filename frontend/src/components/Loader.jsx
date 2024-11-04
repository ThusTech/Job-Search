import RingLoader from 'react-spinners/RingLoader'

export default function Loader(){
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <RingLoader color='#3532cf' size={120} loading={true}/>
        </div>
    )
}