import Header from '../components/Header'
import Explorer from '../components/Explorer'
import Jobs from '../components/Jobs'
import ViewAllJobs from '../components/ViewAllJobs'

export default function HomePage(){
    return (
        <>
            <Header/>
            <Explorer/>
            <Jobs 
            bg="bg-indigo-100" 
            textColor="text-black"
            />
            <ViewAllJobs/>
        </>
    )
}