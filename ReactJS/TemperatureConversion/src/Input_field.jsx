import "./Input_field.css"
function Input_field({value}){
    return (
        <span><input type="text" onChange ={value} placeholder="Enter Temperature"></input></span>
    )
}
export default Input_field;