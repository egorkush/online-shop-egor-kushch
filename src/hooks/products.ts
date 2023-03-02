import { ErrorInfo, useEffect, useState } from 'react'
import { IProduct } from '../models'

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const addProduct = (product: IProduct) => setProducts(prevState => [...prevState, product])

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const data = await (await fetch('https://fakestoreapi.com/products?limit=10')).json()
      setProducts(data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as ErrorInfo
      setLoading(false)
      setError(error.toString())
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, addProduct }
}



// async function fetchProducts() {
//     try {
//       setError('')
//       setLoading(true)
//       const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
//       setProducts(response.data)
//       setLoading(false)
//     } catch (e: unknown) {
//       const error = e as AxiosError
//       setLoading(false)
//       setError(error.message)
//     }
//   }