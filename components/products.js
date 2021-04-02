import Link from 'next/link';

const Products = (props) => {
  return (
    <>
      {
        props.products.map(
          product => (
            <div>
              <Link href="/products/[id]" as={`/products/${product._id}`} key={product._id}>
                <a>
                  {product.product_name}
                </a>
              </Link>
            </div>
          )
        )
      }
    </>
  );
}
export default Products;