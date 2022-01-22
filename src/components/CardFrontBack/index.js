import CardGame from "../CardGame"

const CardFrontBack = () =>{
    return/*html*/`
    <article class="Card-front-back">
       ${CardGame("javascript","logo do javascript")}
       ${CardGame("html","logo do html")}
       ${CardGame("css","logo do css")}
    </article>
    `
}
export default CardFrontBack