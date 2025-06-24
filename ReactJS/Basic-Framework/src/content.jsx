import Title from "./Title.jsx";
import Desciption from "./Description.jsx";

function Content({title,desciption,img}){
    return (
        <div className="content">
            <img src={img}></img>
            <Title title={title}/>
            <Desciption desciption={desciption}/>
        </div>
    )
}
export default Content;