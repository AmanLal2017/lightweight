import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, type }) => {
    const [related, setRelated] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter(item => category === item.category);
            productsCopy = productsCopy.filter(item => type === item.type);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-4xl py-2'>
                <Title text1={"related"} text2={"products."} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts
