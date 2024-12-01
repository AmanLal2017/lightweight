import { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, settype] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      settype(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      settype(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (type.length > 0) {
      productsCopy = productsCopy.filter(item => type.includes(item.type));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = async () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, type, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-52'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-2xl flex cursor-pointer gap-2'>filters<img className={`h-3 mt-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>

        <div className={`bg-slate-200 pl-5 py-4 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3'>categories.</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3.5' value={"Men"} onChange={toggleCategory} type="checkbox"/>men</p>
            <p className='flex gap-2'><input className='w-3.5' value={"Women"} onChange={toggleCategory} type="checkbox"/> women </p>
            <p className='flex gap-2'><input className='w-3.5' value={"Kids"} onChange={toggleCategory} type="checkbox"/>kids</p>
          </div>
        </div>

        <div className={`bg-slate-200 pl-5 py-4 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3'>type.</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3.5' value={"Topwear"} onChange={toggleType} type="checkbox"/>topwear</p>
            <p className='flex gap-2'><input className='w-3.5' value={"Bottomwear"} onChange={toggleType} type="checkbox"/>bottomwear</p>
            <p className='flex gap-2'><input className='w-3.5' value={"Winterwear"} onChange={toggleType} type="checkbox"/>winterwear</p>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between items-center sm:text-3xl text-2xl mb-4'>
          <Title text1={"all"} text2={"collections."} />
          <select onChange={(e) => setSortType(e.target.value)} className='bg-slate-200 text-sm rounded-t-lg sm:px-2 sm:py-3 sm:mb-0 p-2 mb-2' name="" id="">
            <option value="revelant">sort by: relevant</option>
            <option value="low-high">sort by: low to high</option>
            <option value="high-low">sort by: high to low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
