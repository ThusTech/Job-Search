import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import ViewAllJobs from '../components/ViewAllJobs'


export default function HomePage(){
    return (
        <>
            <Hero />
            <Jobs 
            textColor="text-black"
            />
            <ViewAllJobs/>
        </>
    )
}