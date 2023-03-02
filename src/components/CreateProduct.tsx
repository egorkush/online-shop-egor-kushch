import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
  title: 'test product',
  price: 0,
  description: 'description',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 0,
    count: 0
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}
export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>('')
  const [value2, setValue2] = useState<string>('')
  const [value3, setValue3] = useState<string>('')
  const [value4, setValue4] = useState<string>('')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [error3, setError3] = useState('')
  const [error4, setError4] = useState('')
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const changeHandler2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value)
  }
  const changeHandler3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(event.target.value)
  }
  const changeHandler4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue4(event.target.value)
  }

  const submitHandler = async (event: React.FormEvent)  => {
    event.preventDefault()
    setError('')
    setError2('')
    setError3('')
    setError4('')
    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }
    if (value2.trim().length === 0) {
      setError2('Please enter valid price')
      return
    }
    if (value3.trim().length === 0) {
      setError3('Please enter valid description')
      return
    }
    if (value4.trim().length === 0) {
      setError4('Please enter valid image URL')
      return
    }
    productData.title = value
    productData.price = Number(value2)
    productData.description = value3
    productData.image = value4

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input
        type='text'
        className='border py-2 px-4 mb-2 outline-0 w-full'
        placeholder='Enter product title...'
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <label>Price</label>
      <input
        type='text'
        className='border py-2 px-4 mb-2 outline-0 w-full'
        placeholder='Enter product price...'
        value={value2}
        onChange={changeHandler2}
      />
      {error2 && <ErrorMessage error={error2} />}
      <label>Description</label>
      <input
        type='text'
        className='border py-2 px-4 mb-2 outline-0 w-full'
        placeholder='Enter product description...'
        value={value3}
        onChange={changeHandler3}
      />
      {error3 && <ErrorMessage error={error3} />}
      <label>Image</label>
      <input
        type='text'
        className='border py-2 px-4 mb-2 outline-0 w-full'
        placeholder='Enter product image URL...'
        value={value4}
        onChange={changeHandler4}
      />
      {error4 && <ErrorMessage error={error4} />}
      <button
        className='py-2 px-4 border bg-yellow-500 hover:text-gray-500'
        type='submit'
      >
        Create
      </button>
    </form>
  )
}









// const submitHandler = async (event: React.FormEvent)  => {
//   event.preventDefault()
//   setError('')
//   if (value.trim().length === 0) {
//     setError('Please enter valid title')
//     return
//   }
//   productData.title = value
//   request<IProduct>('https://fakestoreapi.com/products', {
//     method:"POST",
//     body:JSON.stringify(productData)}).then(data => console.log(data))
// }
//
// function request<TResponse>(
//   url: string,
//   config: RequestInit = {}
// ): Promise<TResponse> {
//   return fetch(url, config)
//     .then((response) => response.json())
//     .then((data) => data as TResponse);
// }


// const submitHandler = async (event: React.FormEvent)  => {
//   event.preventDefault()
//   setError('')
//   if (value.trim().length === 0) {
//     setError('Please enter valid title')
//     return
//   }
//   productData.title = value
//
//
//   const response = await fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     body: JSON.stringify(productData)
//   })
//   const data = await response.json()
//   // console.log(data)
//   onCreate(data)
// }