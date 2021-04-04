import Container from "../components/container";
import Products from "../components/products";

export default function Home({products}) {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="bg-blueGray-500">
          <p>Filtros</p>
        </div>
        <div className="md:col-span-5">
          <Products products={products}/>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.HOST}${process.env.VERSION}${process.env.PRODUCTS}`);
  const products = await response.json();
  products.map(product => {
    if ('image' in product) {
      product['image'] = (product.image.startsWith('https') || product.image.startsWith('data')) ? product.image : '';
    } else if ('images' in product) {
      product['image'] = product.images;
    }
  });
  return {
    props: {
      products
    }
  }
}