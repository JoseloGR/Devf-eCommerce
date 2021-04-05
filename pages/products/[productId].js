import Container from "../../components/container";
import ProductDetail from "../../components/productDetail";

export default function Product({ product, profile }) {
  return (
    <Container profile={profile}>
      <ProductDetail product={product}/>
    </Container>
  );
}

export async function getServerSideProps({ req, params }) {
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
  const response = await fetch(`${process.env.HOST}${process.env.VERSION}${process.env.PRODUCTS}/${params.productId}`);
  const product = await response.json();
  if ('image' in product) {
    product['image'] = (product.image.startsWith('https') || product.image.startsWith('data')) ? product.image : '';
  } else if ('images' in product) {
    product['image'] = product.images;
  }
  return {
    props: {
      product,
      profile
    }
  }
}