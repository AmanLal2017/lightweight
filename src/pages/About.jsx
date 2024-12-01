import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>

      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'about'} text2={'us.'} />
      </div>

      <div className='my-10 md:pl-20 flex flex-col md:flex-row gap-16'>
        <img className='max-w-[450px] max-h-[573px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Lightweight, we believe clothing should be more than just something you wear — it should be a feeling. That’s why we specialize in creating light, breathable apparel that moves with you and feels like a second skin. Our mission is simple: to redefine comfort through high-quality materials and exceptional craftsmanship, ensuring you feel free and confident in everything you wear.</p>
          <p>We are committed to sustainability and innovation. Each piece in our collection is designed with precision, using responsibly sourced fabrics that prioritize durability without compromising on softness or style. Lightweight is more than a brand; it’s a promise to deliver ethical, timeless clothing that aligns with your values and lifestyle.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our vision is to empower individuals through simplicity and elegance. Whether you’re embracing an active day or unwinding at home, Lightweight is here to elevate your wardrobe with pieces that blend practicality and sophistication. Step into a world where less truly means more — welcome to Lightweight.</p>
        </div>
      </div>

      <div className='text-3xl py-4'>
        <Title text1={'why'} text2={'choose us?'} />
      </div>

      <div className='flex flex-col md:flex-row text-md mb-20'>
        <div className='bg-slate-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Unmatched Comfort</b>
          <p className='text-gray-600'>Our clothing is crafted from premium, lightweight materials that ensure all-day breathability and a barely-there feel, perfect for any occasion.</p>
        </div>
        <div className='bg-slate-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Sustainable Style</b>
          <p className='text-gray-600'>We prioritize responsibly sourced fabrics and ethical production methods, so you can feel good about what you wear and its impact on the planet.</p>
        </div>
        <div className='bg-slate-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Timeless Versatility</b>
          <p className='text-gray-600'>Designed to seamlessly blend comfort with elegance, our pieces transition effortlessly from casual moments to elevated occasions, making Lightweight a staple in any wardrobe.</p>
        </div>
      </div>

      <Newsletter />

    </div>
  )
}

export default About
