import Backend from "./Backend";
import JokeCard from "./JokeCard";
function Welcome(){
    function handleclick(){
        document.querySelector('.card').style.display = "block";
    }
    return (
        <>
        <h1>Hello User!!</h1>
        <br /><br />
        <button onClick={handleclick}>Click to view a new Joke</button>
        <Backend/>
        </>
    )
}
export default Welcome;