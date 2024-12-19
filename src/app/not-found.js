import Link from 'next/link'
import Image from 'next/image'

 
const NotFound = () => {

  return (
    <div className='mt-60 w-full min-h-[calc(100vh - 100px)] flex justify-center items-center px-4'>
        <div className='flex flex-col min-[820px]:flex-row gap-5 max-[819px]:justify-center items-center'>
            <figure className=''>
                <Image src="/img/notFound.png" alt='not-found' className='img__animation2' width={250} height={250} />
            </figure>

            <div className='text-center'>
                <h1 className='text-6xl font-bold text-text dark:text-white uppercase font-raleway'>oops!</h1>
                <p className='text-lg text-text dark:text-slate-300 my-5'>Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className='py-3 px-7 bg-primary  text-white rounded-md hover:bg-primary/90 dark:bg-secondary dark:text-black dark:hover:bg-secondary/90 font-bold font-raleway'>Go back to Home</Link>
            </div>
        </div>
    </div>
  )
}


export default NotFound;
