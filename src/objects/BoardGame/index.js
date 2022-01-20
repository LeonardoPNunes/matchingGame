import CardGame from "../../components/CardGame";
import PlayerName from "../../components/PlayerName";

const BoardGame = (AmountCards) =>{
const $htmlCardGame = CardGame();
const $htmlBoardGame = $htmlCardGame.repeat(AmountCards);
const $htmlPlayerName = PlayerName() + PlayerName();

    return`
    ${$htmlPlayerName}
    ${$htmlBoardGame}
    `
}
export default BoardGame;