import Container from "../../components/container";
import ProductDetail from "../../components/productDetail";

export default function Product({ product }) {
  return (
    <Container>
      <ProductDetail product={product}/>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`${process.env.HOST}${process.env.VERSION}${process.env.PRODUCTS}/${params.productId}`);
  const product = await response.json();
  if ('image' in product) {
    product['image'] = (product.image.startsWith('https') || product.image.startsWith('data')) ? product.image : '';
  } else if ('images' in product) {
    product['image'] = product.images;
  }
  return {
    props: {
      product
    }
  }
}