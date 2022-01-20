import "./style.css";
const PlayerName = () =>{
    const ChangeName = () =>prompt("digite o nome do jogador");
    return`
        <div class="PlayerName">
            <h1>${ChangeName()}</h1>
        </div>
    `
}
export default PlayerName;