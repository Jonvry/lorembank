const SubSection = () => {
  return (
    <section className='bg-slate-200 grid place-items-center px-6 py-16 gap-4 mt-16  sm:p-16' id="subcribe">
        <h2 className="font-semibold">Subscribe to our Newsletter</h2>
        <p className="text-gray-500 text-base">Financial transactions remotely using mobile</p>
            <form className="flex flex-col gap-4 sm:flex-row">
                <label htmlFor="email">
                    <input className="px-4 py-3 rounded-xl focus:outline-none  focus:ring-2 focus:ring-sky-500 " 
                    type="email" placeholder="Enter your email"/>
                </label>
                <button className="bg-neutral-950 px-6 py-3 rounded-xl text-white" type="submit">Get Started</button>
            </form>
    </section>
  )
}
export default SubSection



