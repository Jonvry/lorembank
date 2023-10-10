import Image from 'next/image'

const Featured = () => {
  return (
    <section className="mt-16 bg-neutral-900 bg-[url(/background.svg)] bg-cover
    flex flex-col justify-center items-center gap-4 p-6 rounded-3xl sm:p-8 xl:flex-row" id="services">

        <div className='grid gap-4 w-full  sm:grid-cols-[auto_1fr_1fr] sm:gap-4'>
            <div className='w-full flex items-center sm:justify-center'>
                <Image
                 className="bg-neutral-950 rounded-lg p-4 w-24"
                 src="/security.svg"
                 alt="security Logo"
                 width={200}
                 height={200}
                 priority
                />
            </div>
            <div className='col-span-2'>
                <h3 className='text-white'>Fast and Secure cashless payments</h3>
                <p className='text-gray-400 text-base'>Pay with AtomBank app, online, and in stores, and get added speed security</p>
            </div>
        </div>
        <div className='grid gap-4 w-full  sm:grid-cols-[auto_1fr_1fr] sm:gap-4'>
            <div className='w-full flex items-center sm:justify-center'>
                <Image
                 className="bg-neutral-950 rounded-lg p-4 w-24 "
                 src="/account.svg"
                 alt="account Logo"
                 width={200}
                 height={200}
                 priority
                />
            </div>
            <div className='col-span-2'>
                <h3 className='text-white'>Control over your account</h3>
                <p className='text-gray-400 text-base'>Your bank account lets you easyly lock your card in the app. and later reorder it with a tap of a button</p>
            </div>
        </div>
    </section>
  )
}
export default Featured