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
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      
      :host([fancy]) .card{
        
        width: 400px;
        min-height: 600px;
        background-color: pink;
        color: var(--font-color);
        box-sizing: border-box;
        box-shadow: 16px 8px black;
        font-weight: bold;
        transition: .5s all ease-in-out;
      }

      .card {
        background-color: white;
        border: 2px solid black;
        box-shadow: 10px 5px 5px grey;
        box-sizing: border-box;
        position: relative;
        padding: 16px;
        margin: 32px 16px;
        border-radius: 6px;
        border: solid 2px black;
        width: 400px;
        min-height: 600px;
      }

      .change-color {
        background-color: #14a9ee;
        color: #000;
      }
      /* .no-background {
        background-image: none !important;
      } */

      .card .card-image {
        width: 100%;
        min-height: 300px;
        max-height: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 3px;
        border: solid 2px black;
        box-sizing: border-box;
        background-color: black;
      }
      .card:hover {
        outline: 4px solid white;
        outline-offset: 16px;
      }

      .title {
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
        /* padding: 6px 12px; */
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
      details summary {
        text-align: center;
        font-size: 20px;
        padding: 8px 0;
      }
      details[open] summary {
        font-weight: bold;
      }
      details div {
        border: 2px solid black;
        text-align: center;
        padding: 10px;
        height: 130px;
        overflow: auto;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <!-- <h2>${this.noBackground ? 'no-background' : ''}</h2> -->
      <h1 class='title'>${this.title}</h1>
       <!-- <meme-maker 
        alt="something i do not remember"
        image-url="${this.img}"
        bottom-text="${this.h1}"
        class="img1">
      </meme-maker> -->
      <img class="card-image" src="${this.img}" alt="Card Image">
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>description</summary>
        <div>
          <slot>${this.bodyText}</slot>
        </div>
      </details>
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
      fancy: { type: Boolean, reflect: true},
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
    card.shadowRoot.querySelector('.card').classList.toggle('change-color');
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