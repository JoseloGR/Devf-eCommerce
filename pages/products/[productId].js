export default function Product({product}) {
    console.log(product);
    return (
        <div>
            {product.product_name} <br/>
            ${product.price} <br/>
            {product.category} <br/>
        </div>
    );
}

export async function getServerSideProps({params}) {
    const response = await fetch(`${process.env.HOST}${process.env.VERSION}${process.env.PRODUCTS}/${params.productId}`);
    const product = await response.json();
    return {
        props: {
            product
        }
    }
}