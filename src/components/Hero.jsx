import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <Link to="/collection">
            <div className='flex flex-col sm:flex-row bg-slate-300'>
                <img className='w-full p-1' src={assets.skate_with_shop} alt="" />
            </div>
        </Link>
    ) 
}

export default Hero
