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
    padding: 8px;
    margin: 16px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .buttons {
    display: flex;
    margin: 16px;
    justify-content: center;

  }
  .add,
  .subtract {
    background-color: black;
    border-radius: 100px;
    color: white;
    text-align: center;
    font-size: 50px;
    padding: 20px;
    transition: .6s all ease-in-out;
    margin: 16px 16px 16px 16px;
    box-sizing: content-box;
    width: 500px;
  }
  .add:hover,
  .subtract:hover {
    background-color: white;
    color: black;
  }
  .card {
    background-color: black;
    border-color: grey;
    border-radius: 75px;
    margin: 40px;
    filter: opacity(75%);
  }
  .card:hover {
    outline: 4px solid white;
    outline-offset: 16px;
    transition: .6s all ease-in-outl

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