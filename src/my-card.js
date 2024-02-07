import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "s t o n k s";
    this.img = "https://www.dictionary.com/e/wp-content/uploads/2021/02/20210202_atw_stonks_800x800-300x300.png";
    this.bodyText = "This is not a scam!!! This is a really cool opportunity for a human like you to open this and find out how to get rich quick!";
    this.btnText = "CLICK HERE";
    this.btnLink = "https://hackertyper.net/";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      div {
        width: 400px;
        min-height: 600px;
        background-color: var(--background-color);
        color: var(--font-color);
        box-sizing: border-box;
        box-shadow: 16px 8px white;
        padding: 16px;
        margin: 32px 16px;
        border-radius: 6px;
        border: solid 2px black;
        font-weight: bold;
        position: relative;
        transition: .5s all ease-in-out;
      }

      .change-color {
        background-color: #ffffff;
        color: #000;
        filter: saturate(0);
      }
      /* .no-background {
        background-image: none !important;
      } */

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 3px;
        border: solid 2px black;
        box-sizing: border-box;
        background-color: black;
        filter: invert(90);
      }
      div:hover {
        filter: saturate(0);
        outline: 4px solid white;
        outline-offset: 16px;
      }

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        margin-bottom: 6px;
        font-family: "Times New Roman", Times, serif;
      
      }

      h3 {
        margin: 36px 0;
        font-weight: 400;
        text-align: center;
        font-family: "Times New Roman", Times, serif;
      }

      button {
        background: #ffffff;
        border-radius: 100px;
        padding: 6px 12px;
        font-weight: bold;
        border: solid 2px black;
        box-sizing: border-box;
        box-shadow: 4px 4px black;
        transition: all .3s;
        color: #000;
        position: absolute;
        

        bottom: 12px;
      }
      button:hover {
        cursor: pointer;
        background: #000;
        color: #fff;
        transition: all .5s;
      }
    `;
  }

  render() {
    return html`
    <div>
      <!-- <h2>${this.noBackground ? 'no-background' : ''}</h2> -->
      <h1>${this.title}</h1>
      <img src=${this.img}>
      <h3>${this.bodyText}</h3>
      <a href=${this.btnLink} target="_blank"><button>${this.btnText}</button></a>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      bodyText: { type: String },
      btnText: { type: String },
      btnLink: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

document.querySelector('#duplicate').addEventListener('click', function(event) {
  const cardList = document.querySelector('.cardContainer');
  const myCardElements = cardList.querySelectorAll('my-card');

  if (myCardElements.length < 10) {
    const lastCard = myCardElements[myCardElements.length - 1];
    const newCard = document.createElement('my-card');
    
    newCard.title = lastCard.title;
    newCard.img = lastCard.img;
    newCard.bodyText = lastCard.bodyText;
    newCard.btnText = lastCard.btnText;
    newCard.btnLink = lastCard.btnLink;

    cardList.appendChild(newCard);
  }
});

document.querySelector('#changetitle').addEventListener('click', function(e) {
  const firstCard = document.querySelector('.cardContainer my-card');
  if (firstCard) {
    firstCard.title = "hotel";
  }
});

document.querySelector('#changeimage').addEventListener('click', function(e) {
  const firstCard = document.querySelector('.cardContainer my-card');
  if (firstCard) {
    firstCard.img = "https://hips.hearstapps.com/hmg-prod/images/view-down-hotel-corridor-with-illuminated-lamps-on-royalty-free-image-1704470736.jpg?crop=0.66682xw:1xh;center,top&resize=640:*";
  }
});

document.querySelector('#changebg').addEventListener('click', function(e) {
  var cards = document.querySelectorAll('.cardContainer my-card');
  cards.forEach(function(card) {
    card.shadowRoot.querySelector('div').classList.toggle('change-color');
    // card.shadowRoot.querySelector('div').classList.toggle('no-background');
  });
});


document.querySelector('#delete').addEventListener('click', function(e) {
  const cardList = document.querySelector('.cardContainer');
  const myCardElements = cardList.querySelectorAll('my-card');
  if (myCardElements.length > 1) {
    const lastCard = myCardElements[myCardElements.length - 1];
    lastCard.remove();
  }
});