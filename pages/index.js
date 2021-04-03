import Container from "../components/container";
import Products from "../components/products";

export default function Home({products}) {
  return (
    <Container>
      <Products products={products}/>
    </Container>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.HOST}${process.env.VERSION}${process.env.PRODUCTS}`);
  const products = await response.json();
  return {
    props: {
      products
    }
  }
}