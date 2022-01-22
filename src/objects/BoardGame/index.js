import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

const BoardGame = (AmountCards) =>{
const $htmlCardFrontBack = CardFrontBack();
const $htmlContent = $htmlCardFrontBack.repeat(AmountCards);

    return`
    <section class="board-game">
    ${$htmlContent}
    </section>
    `
}
export default BoardGame;