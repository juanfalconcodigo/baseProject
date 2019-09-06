import "./styles/card.scss";
import img2 from "./webpack.png";
import {addElement} from './element2';

function addCard() {
    const card = document.createElement('article');
    const img = document.createElement('img');
    img.setAttribute("src", img2);
    card.innerHTML = `Hola soy una carta 2 jhoahsaohdas`;

    document.body.appendChild(card);
    document.body.appendChild(img);
}

addCard();

addElement();