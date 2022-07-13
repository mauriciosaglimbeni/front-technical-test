export default function Price({ price, discount }) {
    if (discount > 0) {

        let newPrice = price - (price * discount / 100)
        return (
            <>
                <span className="oldPrice"> {price.toFixed(2)}$</span> <span className="newPrice"> OFFER  {newPrice.toFixed(2)} $</span>                <style jsx>
                    {`
                        .oldPrice{
                            text-decoration: line-through;
                            color: gray;
                        }
                        .newPrice{
                            color: red;
                        }
                    `}
                </style>
            </>
        )
    } else {
        return (
            <>
                <span> {price.toFixed(2)} $ </span>

            </>
        )
    }
}