import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";

export default function Home(props) {
  // TODO: Implement search component
  // TODO: Implement product list component
  const { products } = props.data
  console.log(products)
  return (
    <>
      <header>
        <h1>
          test-commerce
        </h1>
        <Search />
      </header>

      <section>
        <ProductList products={products} />
      </section>
      <style jsx>{`

        header{
          display: flex;
          border-bottom: 1px solid black;
          padding-left:1em;
        }
        header > h1{
          font-size: 35px;
        }
        section{
          margin: 2em;
        }
      `}
      </style>
    </>
  )

}
export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  return { props: { data } }
}