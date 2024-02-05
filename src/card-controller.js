import { LitElement, html, css } from 'lit';
import { MyCard } from './my-card.js'


class CardController extends LitElement {

  static get tag() {
    return 'card-controller';
  }

  
  constructor() {
    super();
    this.cardsData = [];
    this.innerHTML = ' ';

    const defaultCard = document.createElement(MyCard.tag);
        defaultCard.title = 'STONKS';
        defaultCard.link = '#';
        defaultCard.imageSrc = 'https://www.dictionary.com/e/wp-content/uploads/2021/02/20210202_atw_stonks_800x800-300x300.png'; // Replace with your default image URL
        defaultCard.description = 'this where the money at';
    
    this.appendChild(defaultCard);

    this.createCards();
    this.imageOptions = ['https://miro.medium.com/v2/resize:fit:1200/1*LJxPUBvKALDkLITfBMFAMg.png', 'https://i.pinimg.com/550x/c9/39/9c/c9399c51cd736d127702b88f2a3dd8c0.jpg', 'https://phantom-marca.unidadeditorial.es/ae30823506bdb596eeaeab1a0464d690/resize/828/f/jpg/assets/multimedia/imagenes/2023/02/05/16755519728234.jpg', 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/dwayne-fanny-pack.jpg?w=1000&h=600&crop=1'];
    this.titleOptions = ['c o o l', 't u b u l a r', 'b o b a'];
    this.descriptionOptions = ['this is a really cool picture', 'This picture is lame', 'Totally tubular!'];
    this.colorOptions = ['#3fe86c', '#f57fe9', '#12b8ff'];
    
  }

  createCards(){
    
    this.cardsData.forEach(cardData => {
        const newCard = document.createElement(MyCard.tag);
        newCard.title = cardData.title;
        newCard.link = cardData.link;
        newCard.imageSrc = cardData.imageSrc;
        newCard.description = cardData.description; 
        newCard.color = cardData.color;
  
        this.appendChild(newCard);
      })
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
      }

      button {
        margin: 8px;
      }

      
    `;
  }

  render() {
    return html`
      
        <h2>c o n t r o l l e r</h2>
        <div>
        <br>
        <button @click="${this.randomizeCardProperties}">Randomize Card</button>
        <button @click="${this.duplicateFirstCard}">Duplicate First Card</button>
        <button @click="${this.deleteLastCard}">Delete Last Card</button>
      </div>
      <div>
        <slot></slot>
      </div>
    `;
  }


  randomizeCardProperties() {
    const firstCard = this.querySelector(MyCard.tag);
    if (firstCard) {
      const randomImage = this.imageOptions[Math.floor(Math.random() * this.imageOptions.length)];
      const randomTitle = this.titleOptions[Math.floor(Math.random() * this.titleOptions.length)];
      const randomDescription = this.descriptionOptions[Math.floor(Math.random() * this.descriptionOptions.length)];

      firstCard.setAttribute('imageSrc', randomImage);
      firstCard.title = randomTitle;
      firstCard.description = randomDescription;
    }
  }

  duplicateFirstCard() {
    const cards = this.querySelectorAll(MyCard.tag);

    if (cards.length < 10) {
      const firstCard = cards[0];
      if (firstCard) {
        firstCard.duplicateCard();
      }
    }
  }

  deleteLastCard() {
    const cards = this.querySelectorAll(MyCard.tag);

    if (cards.length > 1) {
      const lastCard = cards[cards.length - 1];
      lastCard.deleteCard();
    }
  }
}

customElements.define(CardController.tag, CardController);