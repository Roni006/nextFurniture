import React from 'react'
import Container from './Container'

const Mailing = () => {
  return (
    <>
    <section className='bg-[#F2F5FF] py-15 '>
        <Container>
            <div className='text-center'>
                <h1 className='font-bold font-montserrat text-[32px] text-[#131313]'>Join Our Mailing List</h1>
                <p className='font-normal font-montserrat leading-9.75 text-[#666666] pt-2.5 pb-12.5 w-90 mx-auto'>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <div className='w-121.5 flex items-center justify-center mx-auto '>
                    <input className='bg-white border-2 border-[#011C42] p-6.5 text-[#666666] text-base font-montserrat font-normal w-full rounded-[6px_0_0_6px]' type="text" placeholder='example@gmail.com'/>
                    <button className='bg-[#011C42] text-white font-bold text-base font-montserrat py-7 px-11.5 rounded-[0_6px_6px_0] cursor-pointer'>Submit</button>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Mailing