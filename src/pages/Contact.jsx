import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-3xl pt-10 border-t'>
        <Title text1={'contact'} text2={'us!'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[420px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-20'>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>278 Post St <br />San Francisco, CA 94108</p>
            <p className='text-gray-500'>Tel: (916) 123-4567 <br /> Email: admin@lightweight.com</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-xl text-gray-600'>Careers at Lightweight</p>
            <p className='text-gray-500'>Learn more about opportunities & job openings</p>
            <button className='text-white bg-slate-400 py-4 text-sm hover:bg-black transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
      </div>

      <Newsletter />

    </div>
  )
}

export default Contact
