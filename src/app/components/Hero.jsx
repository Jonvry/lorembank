import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col items-center  lg:h-screen lg:flex-row'>
      <div className='grid place-items-center w-full h-screen lg:w-2/4 '>
        <div className=''>
            <h1 className='font-medium'>Let’s Grow Together with <span className='text-green-400 font-bold'>Lorem</span>Bank</h1>
            <p className='mt-4 text-gray-600 text-base'>The best place to transact and save money.We make all payments easier and simplier. Receive and send payment funds without cash.</p>
                <div className='flex items-center gap-4 mt-4'>
                    <button className='bg-neutral-950 px-6 py-3 rounded-xl text-white' type='button'>Download Now</button>
                    <Link className='underline text-gray-600' href="">See How it works &#8594;</Link>
                </div>
        </div>
      </div>
            <Image
              className="w-full lg:w-2/4 md:p-4"
              src="/hero.png"
              alt="hero Logo"
              width={680}
              height={300}
              priority
            />
    </div>
  )
}
export default Hero