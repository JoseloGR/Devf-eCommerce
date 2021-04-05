import Container from "../components/container";
import Products from "../components/products";

export default function Home({products, profile}) {
  return (
    <Container profile={profile}>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div>
        </div>
        <div className="md:col-span-5">
          <Products products={products}/>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps({req}) {
  let profile = {};
  if (req.headers.cookie) {
    const resP = await fetch(
      `${process.env.HOST}${process.env.VERSION}${process.env.ME}`,
      {
        headers: {
          'Authorization': `JWT ${req.headers.cookie.slice(6)}`
        },
        method: 'GET'
      }
    );
    if (resP.status == 200) {
      profile = await resP.json();
    }
  }
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
      products,
      profile
    }
  }
}