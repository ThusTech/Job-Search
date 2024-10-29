

export default function AddJobsPage(){
    return (
        <section className="bg-gradient-to-br from-purple-600 to-blue-500">
            <div className="container m-auto max-w-2xl py-20">
                <div className="bg-white px-6 py-20 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Job Type
                            </label>
                            <select
                            className="border rounded w-full py-2 px-3"
                            >
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Remote</option>
                                <option>Internship</option>
                                <option>WIL (Work Integrated-Learning)</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Job Listing Name
                            </label>
                            <input
                            className="border rounded w-full py-2 px-3 mb-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Description
                            </label>

                            <textarea
                            className="border rounded w-full py-2 px-3"
                            >
                            </textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Salary
                            </label>

                            <select
                            id=""
                            name=""
                            className="border rounded w-full py-2 px-3"
                            >
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50K - 60K'>$50K - $60K</option>
                                <option value='$60K - 70K'>$60K - $70K</option>
                                <option value='$70K - 80K'>$70K - $80K</option>
                                <option value='$80K - 90K'>$80K - $90K</option>
                                <option value='$90K - 100K'>$90K - $100K</option>   
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Location
                            </label>

                            <input
                            type=""
                            id=""
                            name=""
                            placeholder=""
                            className="border rounded w-full py-2 px-3 mb-2"/>
                        </div>

                        <h3 className="text-2xl mb-5">Company Info</h3>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Company Name
                            </label>

                            <input
                            type="text"
                            id=""
                            name=""
                            placeholder=""
                            className="border rounded w-full py-2 px-3"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Company Description
                            </label>

                            <textarea
                            id=""
                            name=""
                            placeholder=""
                            rows={4}
                            className="border rounded w-full py-2 px-3"
                            >
                            </textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Contact Email
                            </label>
                            <input
                            type=""
                            id=""
                            name=""
                            placeholder=""
                            className="border rounded w-full py-2 px-3"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Contact Phone
                            </label>
                            <input
                            type="tel"
                            id="contact_phone"
                            name="contact_phone"
                            placeholder="Optional phone for applicants"
                            className="border rounded w-full py-2 px-3"/>
                        </div>

                        <div className="mb-4">
                            <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}