import Content from "./content.jsx";

function Card(){
    return(
        <div className="container">
            <Content title="Jira Software" desciption="Project and issue Tracking" img="/logo1.png"/>
            <Content title="Jira Product Discovery" desciption="Prioritizing and roadmapping"img="/logo2.png"/>
            <Content title="Jira Align" desciption="Enterprise Alige planning" img="/logo3.png"/>
        </div>
    )
}
export default Card;