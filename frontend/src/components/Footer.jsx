

export default function Footer(){
    return (
        <footer className="bg-gray-100 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="px-20">
                    <h3 className="font-bold">About Us</h3>
                    <small>
                        At Job-Search, we are redefining how people find jobs and companiews find talent. No more endless
                        scrolling or irrelevant listings - just <bold>Smart matches</bold> that connects you to the right
                        opportunities.
                    </small>

                    <small>
                        Our AI-driven platform puts <bold>skills, passion, and potential</bold> first, helping job seekers and employers find the perfect fit.
                        whether you are looking for remote, part-time, full-time, or work integrated learning, we make job searching
                        <bold>simple, inclusive, and meaningful</bold>.
                    </small>

                    <small>
                        why settle for the old way? Join us and <bold>discover what is next - faster, smarter, better</bold>.
                    </small>
                </div>

                <div className="px-20">
                    <h3 className="font-bold">Follow Us</h3>
                </div>
            </div>
        </footer>
    ) 
}