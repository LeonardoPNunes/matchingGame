import "./style.css";
const CardGame = (icon="alura",alt="logo da alura") =>{
    return/*html*/`
    <article class="card-game">
        <img alt="${alt}" src="images/logo-${icon}.png" />
    </article>
`}
export default CardGame;