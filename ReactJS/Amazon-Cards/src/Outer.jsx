import Card from "./card.jsx";
import "./Outer.css"

function Outer(){
    return(
        <div className="container">
            <h1 style={{textAlign: "center"}}>Blockbuster Deals on Computer Accessories | Shop Now</h1>
            <Card name1="Logitech MX Master" feature1="8000 DPI" compatibility1="5 Programmable Buttons" old_price1="12,495" new_price1="8,999" />
            <Card name1="Apple Pencil (2nd Gen)" feature1="Intuitive Touch Surface" compatibility1="Designed for iPad Pro" old_price1="11,900" new_price1="9,199" />
            <Card name1="Zebronics" feature1="Designed for iPad Pro" compatibility1="Intuitve Touch Surface" old_price1="1,599" new_price1="899" />
            <Card name1="Petronics Toad" feature1="Wireless Mouse 2.4GHz" compatibility1="Optical Orientation" old_price1="599" new_price1="278" />
        </div>
    )
}
export default Outer;