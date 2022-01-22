import CardGame from "../CardGame";
import "./style.css";

const CardFrontBack = () =>{
    return/*html*/`
    <article class="card-front-back -active">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javascript","logo do javascript")}
        </div>
    </article>
    `
}
export default CardFrontBack;