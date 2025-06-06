import { ProductCard } from '@/components'
import { products } from './data/products'

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
      {
        products.map(product => (
          <ProductCard key={ product.id} {...product}/>
        ))
      }
    </div>


  )
}
