import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy Returns</p>
        <p className='text-slate-400'>Hassle free exchanges & returns</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Satisfaction Gauranteed</p>
        <p className='text-slate-400'>Full refund within 30 days of purchase if we missed the mark</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support} alt="" />
        <p className='font-semibold'>Dedicated Team</p>
        <p className='text-slate-400'>Customer support is available 24/7</p>
      </div>
    </div>
  )
}

export default OurPolicy
