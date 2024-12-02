import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisble] = useState(false)
    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-1 font-small'>
            <Link to='/'><img className='w-32 pt-2' src={assets.lightweight} alt="" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>home</p>
                    <hr className='w-1/2 border-none h-[.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>collection</p>
                    <hr className='w-1/2 border-none h-[.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>about</p>
                    <hr className='w-1/2 border-none h-[.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>contact</p>
                    <hr className='w-1/2 border-none h-[.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
                <div className='group relative'>
                    <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                </div>
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-slate-400 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisble(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>back</p>
                    </div>
                    <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border'>home</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/collection' className='py-2 pl-6 border'>collection</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>about</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
