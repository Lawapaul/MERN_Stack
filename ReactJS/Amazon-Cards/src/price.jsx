import "./price.css"
function Price({old_price,new_price}){
    return(
        <div className="price">
            <p style={{textDecoration: "line-through"}}>{old_price}</p>
            <p style={{marginLeft: "0px"}}>{new_price}</p>
        </div>
    )
}
export default Price;