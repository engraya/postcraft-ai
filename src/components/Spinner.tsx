import React from 'react'
import Image from 'next/image'
function Spinner() {
  return (
    <div className='flex min-h-screen justify-center items-center mx-auto'>
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <Image src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" height={500} width={500} alt='spinner' className="rounded-full h-28 w-28"/>
        </div>
            </div>
        </section>
    </div>
  )
}

export default Spinner
