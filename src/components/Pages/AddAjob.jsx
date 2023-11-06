
const AddAjob = () => {
    const AddJob=(e)=>{

    }
    return (
        <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-10 text-2xl font-bold text-black ">Post a new Job</h2>
            <namem action="#">
                <form onSubmit={AddJob}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label name="tile" className="block mb-2 text-sm font-medium text-black">Job Title</label>
                        <input type="text" name="tile" id="tile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                    </div>
                    <div>
                        <label name="brand" className="block mb-2 text-sm font-medium text-black">Job Category</label>
                        <select  id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select Job type</option>
                            <option value="On Site Job">On Site Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Part Time Job">Part Time Job</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label name="photo" className="block mb-2 text-sm font-medium text-black">Company Logo or Job banner URL</label>
                        <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="URL" required="" />
                    </div>
                    <div className="w-full">
                        <label name="name" className="block mb-2 text-sm font-medium text-black">User Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="User name" required="" />
                    </div>
                    <div className="w-full">
                        <label name="price" className="block mb-2 text-sm font-medium text-black">Salary</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                    </div>
                    <div className="w-full">
                        <label name="price" className="block mb-2 text-sm font-medium text-black">Job Posted on</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="date" required="" />
                    </div>
                    <div className="sm:col-span-2">
                        <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                        <textarea name='description' id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                    </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Post Job
                </button>
                </form>
            </namem>
        </div>
    </section>
    );
};

export default AddAjob;