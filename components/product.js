import Router from "next/router";
import Image from "next/image";
import Link from "next/link";

const Product = ({product}) => {
  return (
    <div key={`${product._id}`} 
          className="flex flex-col flex-wrap justify-items-center p-2 w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-sm shadow hover:shadow-lg">
        <div className="bg-gray-50 h-44 max-h-44 flex items-center justify-center">
          {
            product.image ?
            <img className="object-contain object-center h-44" src={product.image}/> :
            <Image className="object-center" src='/placeholder-300x150.png' width={300} height={150} alt="Product Image"/>
          }
        </div>
        <div className="text-center p-2">
          <Link href="/products/[productId]" 
                as={`/products/${product._id}`}>
            <a className="text-blueGray-800">
              {product.product_name}
            </a>
          </Link>
          <h2 className="text-sm">
            {product.price ? `Precio: $${product.price}` : 'Precio no disponible'}
          </h2>
          <button onClick={() => Router.push('/products/[productId]', `/products/${product._id}`)} 
                  className="bg-white rounded-sm text-gray hover:bg-gray-800 hover:border-gray-800 hover:text-white py-2 my-2 w-full">
                    Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;