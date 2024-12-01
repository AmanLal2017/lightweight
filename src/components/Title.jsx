const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-black'>{text1}<span className='text-slate-400 font-medium'> {text2}</span></p>
    </div>
  )
}

export default Title