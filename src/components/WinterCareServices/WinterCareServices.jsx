import React from 'react'
import Container from '../Container/Container'
import ProductCard from '../productCard/ProductCard'
import { useGetProductsQuery } from '../../store/api'
import Loader from '../Loader/Loader'


const WinterCareServices = () => {
    const {isFetching, isLoading, data, isError, isSuccess} = useGetProductsQuery({limit:3, skip:2, category: "furniture"})

    if(isLoading ) return <Loader />


    
    return (
        <>
            <div className="bg-gray-100 py-10">
                <Container>
                    <h4 className='text-3xl font-medium text-center mb-4'>Popular Winter Care Services</h4>
                    <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Ensure your pets stay warm, healthy, and comfortable throughout the chilly winter months with our range of specialized winter care services designed to meet all their needs</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.products.map(card => <ProductCard key={card.id} card={card} />)}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default WinterCareServices