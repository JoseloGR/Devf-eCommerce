import Product from './product';

const Products = (props) => {
  return (
    <div className="flex flex-wrap">
      {
        props.products.map(
          product => (
            <Product product={product}/>
          )
        )
      }
    </div>
  );
}
export default Products;