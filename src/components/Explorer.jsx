import CardExplorer from './CardExplorer'

export default function Explorer(){
    return (
        <div>
            <CardExplorer title='For Developer' 
            description='Browse our Software Developer jobs and start your career today.' 
            linkDescription="Browse Jobs"/>

            <CardExplorer title='For Employers' 
            description='List your job to find the perfect developer for the role.' 
            linkDescription="Add Jobs"/>
        </div>
    )
}