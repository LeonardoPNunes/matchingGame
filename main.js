import BoardGame from "./src/objects/BoardGame";
import "./style.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


const $root = document.querySelector('#app');
const $htmlBoardGame = BoardGame(6);
$root.insertAdjacentHTML("beforeend",`${$htmlBoardGame}`);