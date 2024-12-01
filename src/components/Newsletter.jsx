const Newsletter = () => {
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 50% off!</p>
      <p className='text-slate-400 mt-3'>By submitting your email, you acknowledge and agree to our <span className='text-slate-500'>Terms and Conditions</span>.</p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="text" placeholder='Enter your email' required />
        <button className='border bg-slate-400 text-white text-xs px-10 py-4 hover:bg-black transition-all duration-500'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Newsletter
