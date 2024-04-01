import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.counter = 16;
    this.min = 10;
    this.max = 25;
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }

    
    
  
  .header {
    font-size: 64px;
    color: white;
    padding: 24px;
    margin: 16px;
    text-align: center;
    font-family: "Press Start 2P", sans-serif;
    background-color: black;
  }
  .buttons {
    display: flex;
    margin: 16px;
    justify-content: center;
    
  }
  .wrapper {
    background-color: #fcf0d6;
    padding: 24px;
    margin: 24px;
  }
  .add,
  .subtract {
    background-color: black;
    /* border-radius: 100px; */
    color: white;
    text-align: center;
    font-size: 50px;
    padding: 20px;
    transition: .6s all ease-in-out;
    margin: 16px 16px 16px 16px;
    box-sizing: content-box;
    width: 500px;
    box-shadow: 0px 15px 0px #000000, -4px 28px 2px #00000069;

  }
  .add:hover,
  .subtract:hover {
    background-color: white;
    color: black;
  }
  .card {
    background-color: #fcf0d6;
    border-color: grey;
    /* border-radius: 75px; */
    max-width: 45vw;
    /* filter: opacity(90%); */
    box-shadow: 0px 15px 0px #a59d8d, -4px 28px 2px #00000069;

  }
  .card:hover {
    outline: 4px solid white;
    outline-offset: 16px;
    transition: .6s all ease-in-outl

    }
  .counter-app {
    justify-content: center;
    text-align: center;
    display: grid;
  }

  .confetti {
    justify-content: center;
  }
    `;
  }

  add(e) {
    this.counter+=1;
  }

  subtract(e) {
    this.counter-=1;
  }
  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter === 21) {
        this.makeItRain();
      }
    }
  }
  
  
  makeItRain() {
 
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {

        setTimeout(() => {

          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
  render() {
    var color = "white";
    if(this.counter == this.min) color = "crimson";
    if(this.counter == this.max) color = "crimson";
    if(this.counter === 21) color = "green";
    if(this.counter === 18) color = "blue";





    return html`
      <div class="counter-app">
      <confetti-container id="confetti">
      <div class="card">
      <div class="wrapper">
        <div class="header">
          <header style="color: ${color}">${this.counter}</header>
        </div>
      <div class="buttons">
        <button @click="${this.subtract}" ?disabled="${this.min === this.counter}" class="subtract">-</button>
        <button @click="${this.add}" ?disabled="${this.max === this.counter}" class="add">+</button>
      </div>
    </div>
  </div>
  </confetti-container id="confetti">
  </div class='counter-app'>
    `;
  }

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      min: {type: Number, reflect: true },
      max: {type: Number, reflect: true },
    };
  }
}
globalThis.customElements.define(CounterApp.tag, CounterApp);