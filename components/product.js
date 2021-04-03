import Router from "next/router";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div key={product._id} className="flex flex-col w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow cursor-pointer my-4 mx-4">
      <div className="flex-auto w-full h-56">
        {
          product.image ?
            <img className={`${product.image ? '' : 'hidden'} w-full max-h-56 object-contain object-center`} src={product.image} /> :
            <Image className={`${product.image ? 'hidden' : ''} object-contain object-center`} src="/placeholder-300x150.png" width="395" height="224" alt="Product Image" />
        }
      </div>
      <div className="flex flex-col py-4 px-4 mb-0">
        <div className="flex-auto text-2xl font-semibold text-blueGray-800 px-2">
          <Link href="/products/[productId]" as={`/products/${product._id}`}>
            <a>
              {product.product_name}
            </a>
          </Link>
        </div>
        <div className="flex-auto mt-4 text-gray-700">
          <h2 className="px-2 text-sm">Precio: {product.price ? `$${product.price}` : 'Precio no disponible'}</h2>
        </div>
        <div className="flex-auto mt-4 text-gray-700">
          <h2 className="px-2 text-sm">Marca: {product.brand}</h2>
        </div>
        <div className="flex-auto flex mt-4">
          <button onClick={() => Router.push('/products/[productId]', `/products/${product._id}`)} className="bg-blueGray-500 hover:bg-blueGray-600 rounded-lg text-white flex-auto p-2">Ver producto</button>
        </div>
      </div>
    </div>
  );
}

export default Product;