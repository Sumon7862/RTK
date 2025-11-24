
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCard = ({ card }) => {
    const {id, thumbnail, title, price, rating} = card
    return (
        <div className='bg-white border border-gray-200 text-center duration-300' data-aos='zoom-in'>
            <img className='w-full' src={thumbnail} alt={thumbnail} />
            <div className="p-5">
                <div className="flex justify-between items-center gap-5">
                    <h4 className='text-xl font-medium text-left'>{title}</h4>
                    <div className="flex items-center gap-3">
                        <p>${price}</p>
                        <p className='flex items-center gap-2 text-yellow-500'><FaStar /><span>{rating}</span></p>
                    </div>
                </div>
            </div>
            <Link to={`/service-details/${id}`} className='text-gray-100 bg-orange-500 w-full py-2.5 block duration-300 hover:bg-orange-600'>View Details</Link>
        </div>
    )
}

export default ProductCard