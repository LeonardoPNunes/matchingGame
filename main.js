import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";
import "./style.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend",
`
${ScoreBoard()}
${BoardGame(6)}

`

);