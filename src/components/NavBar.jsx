import logo from '../assets/images/logo.jpg'


export default function NavBar(){
    return (
        <nav>
            <img src={logo} width="70px"/>
            <h2>Software Development Jobs</h2>
            <a href="*">Home</a>
            <a href="*">Jobs</a>
            <a href="*">Add Job</a>
        </nav>
    )
}