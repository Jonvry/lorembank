import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="mt-12 grid gap-16" id="features" >
        <div className="flex items-center flex-col-reverse gap-4 sm:flex-row">
            <div className='w-full mt-8 sm:w-[40%] sm:mt-0'>
                <Image
                 className="m-auto outline outline-4 outline-slate-200 rounded-2xl"
                 src="/Component1.png"
                 alt="image Logo"
                 width={200}
                 height={200}
                 priority
                />
            </div>
            <div className="w-full sm:w-[60%]">
                <h2 className='font-semibold'>LoremBank App for Your Easy</h2>
                <p className='text-gray-500 text-base mt-4'>The best place to transact and save money. More organized finances
                   no longer a discourse. Enjoy the life you want, without wasting time on unnecessary financial matters
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Image
                     className="w-32"
                     src="/Badge.png"
                     alt="image Logo"
                     width={200}
                     height={100}
                     priority
                    />
                     <Image
                     className="w-28"
                     src="/Badge2.png"
                     alt="image Logo"
                     width={180}
                     height={100}
                     priority
                    />
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center sm:flex-row'>
            <div className='w-full  sm:w-[60%] ml-0 sm:ml-12'>
                <h2 className='font-semibold'>LoremBank for the Future</h2>
                <p className='text-gray-500 text-base my-4'>
                    All conveniences are at hand. It's time to go ahead and make dreams come true one by one. 
                    Open, manage and withdraw competitive interest savings without going to the bank.
                </p>
                    <Link className="underline text-green-400" href="">Learn More &#8594;</Link> 
            </div>
            <div className='w-[40%] mt-8 sm:mt-0'>
                <Image
                 className="m-auto outline outline-4 outline-slate-200 rounded-2xl"
                 src="/Component2.png"
                 alt="image Logo"
                 width={220}
                 height={200}
                 priority
                />
            </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row">
            <div className='w-full mt-8 sm:mt-0 sm:w-[40%]'>
                <Image
                 className="m-auto"
                 src="/Component3.png"
                 alt="image Logo"
                 width={220}
                 height={200}
                 priority
                />
            </div>
            <div className="w-full sm:w-[60%]">
                <h2 className='font-semibold'>Costumable Debit Card</h2>
                <p className='text-gray-500 text-base my-4'>
                    Choose a debit card design that suits you.
                    Practically withdraw cash and transact worldwide.
                </p>
                    <Link className="underline text-green-400" href="">Learn More &#8594;</Link>
            </div>
        </div>
    </section>
  )
}
export default Services