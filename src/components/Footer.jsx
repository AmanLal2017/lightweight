import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-12 mt-32 text-sm'>
        <div>
          <img className='mb-2 w-32' src={assets.lightweight} alt="" />
          <p className='w-full md:w-2/3 text-slate-400'>Visit the <span className='text-slate-500'>Privacy Policy</span> for details regarding the categories of personal information collected through this website and the business and commercial purpose(s) for which the information will be used.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-2'>company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-2'>get in touch!</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-916-123-4567</li>
            <li>Admin@lightweight.com</li>
          </ul>
        </div>
        
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 lightweight.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
