import "./Infobox.css";
function InfoBox({result}){
    return (
        <div className="card">
            <h1>{result.name}</h1>
            <h4>Humidity = {result.humidity}</h4>
            <h4>Temperature = {result.temperature}</h4>
            <h4>Min Temp = {result.min}</h4>
            <h4>Max Temp = {result.max}</h4>
            <p>The weather can be described as {result.description}</p>
        </div>
    )
}
export default InfoBox;