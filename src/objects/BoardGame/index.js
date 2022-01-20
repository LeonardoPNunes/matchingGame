import CardGame from "../../components/CardGame";
import "./style.css";

const BoardGame = (AmountCards) =>{
const $htmlCardGame = CardGame();
const $htmlContent = $htmlCardGame.repeat(AmountCards);
const $htmlPlayerName = PlayerName() + PlayerName();

    return`
    <section class="board-game">
    ${$htmlContent}
    </section>
    `
}
export default BoardGame;