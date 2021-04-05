import Product from './product';
import { useSearchContext } from '../contexts/store';
import InfoMessage from './infoMessage';

const Products = (props) => {
  const {searchState, setSearchState } = useSearchContext();
  let products = [];

  if (searchState && searchState !== 'all') {
    products = props.products.filter( (p) => {
      for (let key of Object.keys(p)) {
        if (String(p[key]).toLowerCase().includes(searchState.toLowerCase())) {
          return true;
        }
      }
      return false;
    })
  } else {
    products = props.products;
  }

  return (
    <div className="flex flex-wrap items-start justify-around">
      <div className="flex flex-col flex-wrap justify-items-center p-2 w-full">
        <InfoMessage>
          Se encontraron {products.length} resultados
        </InfoMessage>
      </div>
      {
        products.map(
          product => (
            <Product product={product}/>
          )
        )
      }
    </div>
  );
}

export default Products;