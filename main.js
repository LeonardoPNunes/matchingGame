import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import "./style.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend",
`
${PlayerName("Player1")}
${PlayerName("Player2")}
${BoardGame(6)}

`

);