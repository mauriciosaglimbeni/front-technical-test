import Price from "./Price"
export default function Product({ product }) {
  return (
    <>
      <div>
        <img src={product.thumbnail} height="150px" />
        <h3>{product.title} <span className="rating"> ⭐{product.rating} </span></h3>
        <span className="brand">{product.brand}</span>
        <h3 className="price">
          <Price price={product.price} discount={product.discountPercentage} />
        </h3>
      </div>
      <style jsx>{`
        div{
          background-color: lightgray;
          width: 15em;
          height: 20em;
          margin-bottom: 1em;
          display: flex;
          flex-direction: column;
          border: 2px solid gray;
      
        }
        h3{
          display: flex;
          justify-content: space-between;

        }
        .brand{
          font-size: 14px;
          font-weight: normal;
        }
        .price{
          border-top: 1px solid black;
        }
        .rating{
          font-weight: normal;

        }

      `}</style>
    </>
  )
}
