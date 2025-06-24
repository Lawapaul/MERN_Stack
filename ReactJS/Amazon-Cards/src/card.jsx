import Content from "./content.jsx";
import Price from "./price.jsx";
import "./card.css"
function Card({name1,feature1,compatibility1,old_price1,new_price1}){
    return(
        <div className="card">
            <Content name={name1} feature={feature1} compatibility={compatibility1}/>
            <Price old_price={old_price1} new_price={new_price1}/>
        </div>
    )
}
export default Card;