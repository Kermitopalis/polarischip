import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";


export class haxcmsParty extends DDD {
  static get tag() {
    return 'party-ui';
  }

  constructor(){
    super();
    this.users = [];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.users) {
        this.users = [];
    }
  }

  static get styles() {
    return css`
    :host {
        display: block;
    }
  
    
    .party-ui {
        /* width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 9999; */
        display: flex;
        position: relative;
        top: 80px; left: 0px;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        color: var(--ddd-theme-default-slateGray);
      
      }
    

      .party-ui-modal {
        background-color: var(--ddd-theme-default-skyBlue);
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        width: 50vw;
        border: 2px solid var(--ddd-theme-default-success); 
        border-radius: var(--ddd-radius-sm);
        box-sizing: border-box;
        padding: 20px;
      }

      .party-ui-controls {
        background-color: none;
        font-family: "Press Start 2P", sans-serif;
        width: 100%;
        height: 25%;
        border: 2px solid var(--ddd-theme-default-success);
        border-radius: var(--ddd-radius-sm);
        position: relative;
        margin-bottom: 10px;
      }


      .party-ui-users-scroll {
        /* overflow-y: scroll; */
        display: flex;
        overflow: auto;
        white-space: nowrap;
        width: 100%;
        margin: 10px 10px 10px 10px;
        font-family: "Press Start 2P", sans-serif;

      }

      .party-ui-user-container {
        background-color: var(--ddd-theme-default-gradient-navBar);
        font-family: "Press Start 2P", sans-serif;
        color: white;
        border: 4px solid grey;
        /* flex-direction: row; */
        padding: 16px;
        display: flex;
        flex-direction: column;

      }

      .party-ui-user-container:hover {
        border-color: whitesmoke;
}

      .input {
        background: white;
        border: 3px solid var(--ddd-theme-default-nittanyNavy); 
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px; 
        font-size: 16px; 
        font-family: "Press Start 2P", sans-serif;
        color: var(--ddd-theme-default-potentialMidnigh);
        transition: border-color 0.3s ease;  
        margin: 10px 0px 20px 0px;
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      }
      svg {
        background-color: transparent;
        position: absolute;
        top: 0;
        right: 0;
        color: var(--ddd-theme-default-landgrantBrown);
        border: none;
        height: 35px;
        width: 35px;
        cursor: pointer;
        font-family: "Press Start 2P", sans-serif;
        font-size: 3rem;
        margin: 5px;
      }
      
      .addBTN {
        background-color: forestgreen;
        color: white;
        font-family: "Press Start 2P", sans-serif;
        border: 3px solid white;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 15px 20px;
        margin: 5px;
        cursor: pointer;
        box-shadow: 2px 10px 2.9px hsl(0deg 0% 0% / 1);
        cursor: pointer;
      }
      /* .sndbuttoncontainer {
        align-content: center;
        text-align: center;
        width: 100%;
    
      } */
      .removeBTN {
        background-color: var(--ddd-theme-default-original87Pink);
        color: white;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid white;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
        box-shadow: 2px 10px 2.9px hsl(0deg 0% 0% / 1);
      }
      .saveBTN {
        color: white;
        background-color: black;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid white;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
        box-shadow: 2px 10px 2.9px hsl(0deg 0% 0% / 1);
      }
      .randomBTN {
        color: white;
        background-color: black;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid white;
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
        box-shadow: 2px 10px 2.9px hsl(0deg 0% 0% / 1);

      .saveBTN:active, .addBTN:active, .removeBTN:active, .randomBTN:active {
        -webkit-box-shadow: 0px 3px 0px rgba(119, 0, 60, 1), 0px 3px 6px rgba(0,0,0,.9);
        -moz-box-shadow: 0px 3px 0px rgba(119, 0, 60, 1), 0px 3px 6px rgba(0,0,0,.9);
        position: relative;
        top: 6px;
      }

      .addBTN:hover, .removeBTN:hover, .saveBTN:hover, .randomBTN:hover {
        text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3);
        transition: ease-in-out 0s;
      }
      
      .bottom-title {
        background-color: var(--ddd-theme-default-navy80);
        color: pink;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        font-weight: var(--ddd-font-navigation-bold);
        margin: 12px;
      }
      .user-name {
        margin: 8px;
        font-family: "Press Start 2P", sans-serif;
      }
    `;
    }

  toggleAlert() {
    const modal = this.shadowRoot.querySelector('.party-ui-modal');
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
        localStorage.removeItem('modalIsOpen', 'true');
        modal.style.display = 'none';
    } else {
        localStorage.setItem('modalIsOpen', 'false');
    }
  }

  handleKeyPress(event){
    if (event.key === 'Enter'){
      this.addUser();
    }
  }

  addUser() {
    const inputElement = this.shadowRoot.querySelector('.input');
    if (!inputElement) {
        console.warn('Input element cannot be found.');
        return;
    }
    

    const userInput = inputElement.value;
        if (!userInput) {
            console.warn('Input is empty.');
            return;
        }

    const checkUsername = /^[a-z0-9]{2,12}$/;
        if (!checkUsername.test(userInput)) {
            console.warn('Username does not meet the requirements.');
            alert(`Username does not meet the requirements.`)
            return;
        }

    if (this.users.includes(userInput)) {
        console.warn('User already exists.');
        return;
    }

    this.users.push(userInput);
    inputElement.value = '';
    this.requestUpdate();

    console.log('User added: ', userInput);

    const partyUiUsersScroll = this.shadowRoot.querySelector('.party-ui-users-scroll');
    if (!partyUiUsersScroll) {
        console.warn('Scroll container not found.');
        return;
    }

    partyUiUsersScroll.innerHTML = '';

    this.users.map(user => {
      const newUserContainer = document.createElement('div');
      newUserContainer.classList.add('partyui-user-container');
      newUserContainer.innerHTML = `
            <rpg-character seed="${user}"></rpg-character>
            <div>${user}</div>
            <div>
              <button class="removeBTN">Delete</button>
            </div>
        `;
      partyUiUsersScroll.appendChild(newUserContainer);

      console.log('New user container created for:', user);

      const deleteButton = newUserContainer.querySelector('.user-delete-btn');
      deleteButton.addEventListener('click', this.deleteUser.bind(this));
    });
  }
    

  deleteUser(event){

    const username = event.target.parentNode.previousElementSibling.innerText;

    const index = this.users.indexOf(uername);
    if (index !== -1){
      this.users.splice(index, 1);
    }

    event.target.parentNode.parentNode.remove();

    console.log('User deleted:', username);
    console.log('Updated users array:', this.users);
  }

  invalidAlert() {
    return html`
        <div class="modalView" id="modalView">
        <div id="modalView__closeBtn"></div>
        <div class="modalView__content centered">
            <p>Does not meet requirements</p>
        </div>
        </div>
    `
    }

  saveParty() {
    const namesString = this.users.join(', ');
    console.log('Party saved. Users: ', this.users);
    alert()(`Party saved. Users ${namesString}`);
    this.makeitRain();
  }

    render() {
    return html`
    <div class="party-start">
    <a href="#" role="button" class="randomBTN">Start a Party</a>
    </div>
      <div id="party-ui">
        <div id="party-ui-modal">
            <div class="party-ui-controls">
                <div>
                    <h3>PARTY</h3>
                    <details>
                    <summary>username rules</summary>
                      <ul>
                        have at least 7 characters <br>
                        be lowercase <br>
                        no special characters <br>
                      </ul>
                  </details>
                </div>
                <div>
                  <input class="input" type='text' placeholder="username here" pattern="[a-z0-9]*" @keydown=${this.handleKeyPress}>
                  <button class="addBTN" @click=${this.addUser}>Add User</button>
                </div>   
                  <svg @click="${this.toggleAlert}" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=var(--ddd-theme-default-original87Pink) transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill=var(--ddd-theme-default-original87Pink)></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill=var(--ddd-theme-default-original87Pink)></path> </g></svg>
              </div>

                

                <div class="party-ui-users-scroll">  
                  <div class="party-ui-user-container">
                      <rpg-character seed="drl5505"></rpg-character>
                      <div>drl5505</div>
                      <div>
                      <button class="removeBTN" @click=${this.deleteUser}>Delete</button>
                      </div>
                    </div>
                    <div class="sndbuttoncontainer">
                      <button class="saveBTN" @click=${this.saveParty}>Save Party!</button>

                    </div>
                  </div>
                </div>
              </div>
          
    `;
    }

    static get properties() {
        return {
            users: {type: Array}
        };
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
}

globalThis.customElements.define(haxcmsParty.tag, haxcmsParty);