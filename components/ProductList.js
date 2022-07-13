import Product from "./Product";
export function ProductList({ products }) {
  let arrayLength = products.length;
  arrayLength = arrayLength / 10;
  console.log(arrayLength)

  return (
    <>
      {/* TODO: List of products */}
      <main>
        {products.slice(0,10).map((p) => {
          return(<Product key={p.id} product={p}/>)
        })}

      </main>
      <style jsx>{`
        main{
          margin-inline: auto;
          
          display: flex;
          flex-wrap: wrap;
          gap:5%
        }
      `}</style>
    </>
  )
}