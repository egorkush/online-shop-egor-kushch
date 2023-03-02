import { IProduct } from '../models'
import { useState } from 'react'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details
    ? 'bg-gradient-to-r from-stone-500 via-stone-400 to-stone-500'
    : 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
  const btnClasses = ['py-2 px-4 border w-32', btnBgClassName]
  return (
    <div
      className='border py-2 px-4 rounded flex flex-col items-center mb-2'
    >
      <img src={product.image} alt={product.title} className='w-1/6'/>
      <p>{product.title}</p>
      <span className='font-bold'>{product.price}$</span>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prevState => !prevState)}
      >
        {details
          ? 'Hide Details'
          : 'Show Details'}
      </button>
      {details && <div>
        <p>{product.description}</p>
        {product.rating && <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>}
      </div>}
    </div>
  )
}
