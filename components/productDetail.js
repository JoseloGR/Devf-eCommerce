import Image from "next/image";
import Link from "next/link"
import cookie from 'js-cookie';
import ErrorMessage from './errorMessage';
import SuccessMessage from "./successMessage";
import { useState } from "react";

const ProductDetail = ({ product }) => {
  const [activeMessage, setActiveMessage] = useState(false);
  
  const buyClick = () => setActiveMessage(true)

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
              <img className="w-auto h-96 object-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" src={product.image} /> :
              <Image className="-auto h-96 object-center" src="/placeholder-300x150.png" width="395" height="224" alt="Product Image" />
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
            <button onClick={buyClick} disabled={!product.price || !cookie.get('token') ? 'disabled': null} className="bg-green-500 active:bg-green-600 disabled:opacity-50 rounded-lg text-white flex-auto p-2 w-full md:w-1/2 mt-4 mb-4">Comprar ahora</button>
            {
              activeMessage ?
              <div className="flex-auto">
                <SuccessMessage>
                  ¡Tu pedido ha sido registrado! Gracias por tu compra
                </SuccessMessage> 
              </div> :
              <></>
            }
            {
              !cookie.get('token') ?
              <div className="flex-auto">
                <ErrorMessage>
                  <Link href="/login">
                    <a className="text-red-900 underline">
                      Inicie sesión
                    </a>
                  </Link>&nbsp; o &nbsp;
                  <Link href="/signup">
                    <a className="text-red-900 underline">
                      Regístrese para realizar la compra
                    </a>
                  </Link>
                </ErrorMessage> 
              </div> :
              <></>
            }
          </div>
        </div>

      </div>
    </>
  );
}
export default ProductDetail;