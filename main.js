import CardGame from "./src/components/CardGame";
import "./style.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

const $root = document.querySelector('#app');
const $htmlCardGame = CardGame();
$root.insertAdjacentHTML("beforeend",$htmlCardGame);