import CardGame from "../CardGame"

const CardFrontBack = () =>{
    return/*html*/`
    <article class="Card-front-back">
       ${CardGame()}
       ${CardGame()}
    </article>
    `
}
export default CardFrontBack