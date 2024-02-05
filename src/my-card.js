import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get styles() {
    return css`
      
      :host {
      display: inline-block;
      width: 200px;
      text-align: center;
      margin: 15px;
    }

      .card {
        font-size: 1em;
        display: inline-flex;
        flex-direction: column;
        border: 2px solid white;
        padding: 8px;
        margin: 8px;
        filter: saturate(.9);
        transition: 1.0s all ease-in-out;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      img {
        width: 100%;
        height: 120px;
        object-fit: scale-down;
      }

      
      .card-text {
        padding: 0 8px 8px 8px;
        color: black;
        background-color: #ffa8f5;
        margin: 0 0 0 8px;
        height: 100px;
        flex-grow: 1;
        overflow: auto;
      }

      .card-title {
        position: sticky;
        top: 0;
        background-color: #eeeeee;
        text-align: center;
        font-size: 1.5em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }

      .details-btn {
        background-color: #72f7a3;
        color: white;
        padding: .5em;
        margin: .5em;
      }

      .card:hover,
      .card:focus-within {
        outline: 2px solid white;
        outline-offset: 16px;
        filter: saturate(30);
      }

      .card:hover .card-title,
      .card:hover .card-text,
      .card:hover p,
      .card:hover .details-btn {
        background-color: navy;
        color: yellow;
      }
    `;
  }


  render() {
    return html`
      <div class="card">
        <div class="card-title">${this.title}</div>
        <img class="card-image" src="${this.imageSrc}" alt="${this.title}">
        <div class="card-text">
          <p>${this.description}</p>
          <button class="details-btn" @click="${this.navigateToLink}">Details</button>
        </div>
      </div>
    `;
  }
  navigateToLink() {
    if (this.link) {
      window.location.href = this.link;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      imageSrc: { type: String },
      description: { type: String},
      color: { type: String },
    };
  }
  
  duplicateCard() {
    const newCard = document.createElement(MyCard.tag);
    newCard.title = this.title;
    newCard.link = this.link;
    newCard.imageSrc = this.imageSrc;
    newCard.description = this.description;
    newCard.color = this.color;

  
    if (this.parentNode) {
      this.parentNode.appendChild(newCard);
    } else {
      document.body.appendChild(newCard);
    }
  }

  deleteCard() {
    this.remove();
  }
}


customElements.define(MyCard.tag, MyCard);
