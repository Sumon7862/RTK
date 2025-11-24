
import Container from '../../components/Container/Container'

import { useGetProductsQuery } from '../../store/api';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/productCard/ProductCard';
import { Link } from 'react-router';
import { useState } from 'react';
import { useGetcategoryListQuery } from '../../store/categoryApi';

const Services = () => {
  const [category, setCategory] = useState("beauty")
  const { isFetching, isLoading, data } = useGetProductsQuery({ limit: 6, category })
  const { isFetching:categoryFetching, data:categoryData, isError } = useGetcategoryListQuery()





  if (isLoading) return <Loader />
  


  const handleCategory = (category)=> {
    setCategory(category)
  }
  return (
    <div>
      <title>Services - WarmPaws</title>
      <div className="my-10 md:my-20">
        <Container>
          <h4 className='text-3xl font-medium text-center mb-4'>Our Winter Care Services</h4>
          <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Ensure your pets stay warm, healthy, and comfortable throughout the chilly winter months with our range of specialized winter care services designed to meet all their needs</p>
          <div className='space-x-10 pb-6'>
            {
               categoryData?.map(item => <button key={item} onClick={()=> handleCategory(item)} className='capitalize'>{item}</button>)
            }
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.products.map(card => <ProductCard key={card.id} card={card} />)}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Services