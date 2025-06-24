import "./content.css"
function Content({name,feature,compatibility}){
    return (
        <div className="content">
            <p><b>{name}</b></p>
            <p>{feature}</p>
            <p>{compatibility}</p>
        </div>
    )
}
export default Content;