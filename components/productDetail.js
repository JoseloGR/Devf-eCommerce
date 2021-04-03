import Image from "next/image";
import Link from "next/link"

const ProductDetail = ({ product }) => {
  return (
    <>
      <div className="p-2">
        <Link className="text-opacity-50" href="/">
          <a className="text-blueGray-700 text-opacity-75 hover:text-opacity-100 underline">Regresar</a>
        </Link>
      </div>
      <div className="flex justify-center flex-wrap mt-8">
        <div className="flex-auto flex justify-center w-full md:w-1/2 bg-white shadow p-4">
          {
            product.image ?
              <img className={`${product.image ? '' : 'hidden'} w-auto h-96 object-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer`} src={product.image} /> :
              <Image className={`${product.image ? 'hidden' : ''} w-auto h-96 object-center`} src="/placeholder-300x150.png" width="395" height="224" alt="Product Image" />
          }
        </div>
        <div className="flex-auto w-full md:w-1/2 bg-white shadow p-4">
          <span className="px-2">{product.category}</span>
          <h1 className="text-2xl font-semibold text-blueGray-800 px-2">
            {product.product_name}
          </h1>
          <p className="py-2 px-2 text-lg text-gray-700">
            {product.description}
          </p>
          <div className="flex flex-col mt-1 text-gray-700">
            <h2 className="px-2 text-md">Marca: {product.brand}</h2>
            <h2 className="px-2 text-sm">SKU: {product.sku}</h2>
            <h2 className="px-2 text-md">Precio: {product.price ? `$${product.price}` : 'Precio no disponible'}</h2>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button disabled={!product.price ? 'disabled': null} className="bg-green-500 active:bg-green-600 disabled:opacity-50 rounded-lg text-white flex-auto p-2 w-full md:w-1/2">Agregar al carrito</button>
            <button disabled={!product.price ? 'disabled': null} className="bg-green-500 active:bg-green-600 disabled:opacity-50 rounded-lg text-white flex-auto p-2 w-full md:w-1/2 mt-4">Comprar ahora</button>
          </div>
        </div>

      </div>
    </>
  );
}
export default ProductDetail;