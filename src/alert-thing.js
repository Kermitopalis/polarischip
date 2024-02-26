import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

  static get tag() {
    return 'alert-thing';
  }
  constructor() {
    super();
    this.alertText = "This is an alert thing."
    this.minimized = false;
  }

  static get styles(){
    return css`
        :host {
            display: inline-flex;
        }
        .contain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: pink;
            padding: 10px;
            box-shadow: 0px 2px 5px black;
        }
        .collapsible {
            background-color: blue;
            color: white;
            padding: 10px;
            cursor: pointer;
            width: 100%;
        }
        .content {
            display: ${this.minimized ? 'none ': 'block'};
            padding: 10px;
        }`
    }
    
    toggleMinimized() {
        this.minimized = !this.minimized;
        this.requestUpdate();
    }


  render () {
    return html`
    <div class="contain">
    <button type="button" class="collapsible" @click="${this.toggleMinimize}">ALERT</button>
        <div class="content">
            <p>${this.alertText}</p>
        </div>
    </div>
    `
  }
  static get properties() {
    return {
        alertText: {type: String},
        minimized: {type: Boolean}

    };
  }
}
customElements.define(Alert.tag, Alert);
