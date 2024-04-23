import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";


export class haxcmsParty extends DDD {

  static get tag() {
    return 'party-ui';
  }

  constructor() { //constructor of the code, which calls super and initializes the user array.
    super();
    this.users = [];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.users) {
      this.users = [];
    }
  }

  static get styles() { //gets the css styles which personalizes the page
    return css`
        :host {
            display: block;
        }

        .party-ui {
        //width: 100%;
        height: 100%;
        position: relative;
        top: 80px; left: 0px;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        color: var(--ddd-theme-default-slateGray);
      }

      .party-start {
        font-family: "Press Start 2P", sans-serif;
        background-color: #1D1D1D;
        text-align: center;
        border: 8px solid #e0e0e0; 
        /* border-radius: var(--ddd-radius-sm); */
        box-sizing: border-box;
        padding: 20px;
      }

      .party-ui-modal {
        background-color: var(--ddd-theme-default-roarLight);
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        width: 70vw;
        border: 2px solid var(--ddd-theme-default-success); 
        /* border-radius: var(--ddd-radius-sm); */
        box-sizing: border-box;
        padding: 20px;
        border: 8px solid var(--ddd-theme-default-roarLight);
        box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 15px 0px #c1baac;
      }
      .usrtitle {
        background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 24px; 
         color: #636363;
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 50px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        }

      .party-ui-controls {
        background-color: none;
        font-family: "Press Start 2P", sans-serif;
        width: 100%;
        height: 25%;
        /* border-radius: var(--ddd-radius-sm); */
        position: relative;
        margin: 0px;
         color: #636363;
      }
      .inputadd {
        background-color: var(--ddd-theme-default-roarLight);
        border: 4px solid var(--ddd-theme-default-roarLight);
        box-shadow: 0px 10px 0px #c1baac, 0px 10px 2px #00000069;
        padding-bottom: 10px;
      }
      
      .party-ui-users-scroll {
        overflow-y: scroll;
        display: flex;
        white-space: nowrap;
        justify-content: center;
        background-color: var(--ddd-theme-default-creekTeal);
        box-shadow: #000000 0px 30px 60px -12px inset, #000000 0px 18px 36px -18px inset;
      }

      .partyui-user-container {
        font-family: "Press Start 2P", sans-serif;
        color: var(--ddd-theme-default-shrineMaxLight);
        flex-direction: column;
        padding: 16px;
        cursor: pointer;
        /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
      }

      .partyui-user-container:hover {
        box-sizing: border-box;
        border: solid var(--ddd-theme-default-roarLight) 6px;
        padding: 10px;
      }

      .input {
         background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 16px; 
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        }

       svg {
        background-color: transparent;
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        height: 35px;
        width: 35px;
        cursor: pointer;
        font-family: "Press Start 2P", sans-serif;
        font-size: 3rem;
        margin: 5px;
      }
      .addBTN {
        color: var(--ddd-theme-default-roarLight);
        background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 16px; 
         color: #636363;
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        }

      .removeBTN {
        background-color: var(--ddd-theme-default-roarLight);
        background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 16px; 
         
         color: #636363;
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        cursor: pointer;
      }

      .bottom-area {
        background-color: var(--ddd-theme-default-roarLight);
        padding-bottom: 20px;
        padding-top: 5px;
        border: 4px solid var(--ddd-theme-default-roarLight);
        box-shadow: 0px 10px 0px #b1b6b31b, -10px 28px 4px #00000069;
      }
      .changeTheme {
        background-color: var(--ddd-theme-default-roarLight);
        background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 16px; 
         color: #636363;
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
        }

      .saveBTN {
        background-color: var(--ddd-theme-default-roarLight);
        background: var(--ddd-theme-default-roarLight);
         border: 3px solid var(--ddd-theme-default-roarLight); 
         padding: 10px; 
         font-size: 16px; 
         color: #636363;
         font-family: "Press Start 2P", sans-serif;
         transition: border-color 0.3s ease;  
         margin: 10px 0px 20px 0px;
         box-shadow: #7f7b72 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, 0px 20px 0px #c1baac, -10px 34px 4px #00000069;
      }
    
      .details {
        color: #D53636;
        font-size: 12px;
        padding-bottom: 12px;
      }
      #username, #usrdemo {
        text-shadow: 0px 4px 0px rgba(0,0,0,0.3), 
        0px -4px 0px rgba(255,255,255,0.3);
      }
      
      .randomBTN {
        color: var(--ddd-theme-default-roarLight);
        background-color: var(--ddd-theme-default-creekTeal);;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        border: 3px solid var(--ddd-theme-default-roarLight);
        /* border-radius: var(--ddd-radius-sm); */
        padding: 10px 20px;
        margin: 12px;
        cursor: pointer;
        box-shadow: 0px 16px 0px var(--ddd-theme-default-creekTeal), -10px 20px 15px #0000009a;
      }
    
      .changeTheme:hover, .addBTN:hover, .removeBTN:hover, .saveBTN:hover, .randomBTN:hover {
        transition: ease-in-out .3s;
        text-shadow: 0px 4px 5px var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-roarLight);
        background-color: var(--ddd-theme-default-creekTeal);
      }

      .changeTheme:active, .saveBTN:active, .addBTN:active, .removeBTN:active, .randomBTN:active {
        -webkit-box-shadow: -2px 5px 0px #00000035, 0px 3px 6px #00000035;
        position: relative;
        top: 10px;
      }

      .bottom-title {
        background-color: white;
      
        color: black;
        font-family: "Press Start 2P", sans-serif;
        font-size: 16px;
        font-weight: var(--ddd-font-navigation-bold);
        margin: 20px;
      }
    `;
  }

  toggleAlert() { //the toggle alert function
    const modal = this.shadowRoot.querySelector('.party-ui-modal'); //selects the modal
    this.isOpen = !this.isOpen; //toggling whether it is visible or not
    if (this.isOpen) { //if open, it removes it to close it
      localStorage.removeItem('modalIsOpen', 'true');
      modal.style.display = 'none';
    } else { //does the opposite
      localStorage.setItem('modalIsOpen', 'false');
      modal.style.display = 'block';
    }
    requestUpdate(); //forces a request update in instance it doesn't do it automatically
  }

  handleKeyPress(event) {  
    if (event.key === 'Enter') {
      this.addUser(); //calls adduser function when enter key is pressed
    }
  }

  addUser() {
    const inputElement = this.shadowRoot.querySelector('.input');
    if (!inputElement) {
      console.warn('There is no input');
      return;
    }

    const userInput = inputElement.value;
    if (!userInput) {
      console.warn('Input is empty.');
      return;
    }

    const checkUsername = /^[a-z0-9]{2,8}$/;
    if (!checkUsername.test(userInput)) {
      console.warn('Requirements not met.');
      alert(`Requirements not met.`)
      return;
    }

    if (this.users.includes(userInput)) {
      alert('User already exists in the party.')
      return;
    }

    this.users.push(userInput);
    inputElement.value = '';
    this.requestUpdate();

    console.log('User added:', userInput);

    // Render the users dynamically
    const partyUiUsersScroll = this.shadowRoot.querySelector('.party-ui-users-scroll');
    if (!partyUiUsersScroll) {
      console.warn('Scroll container not found.');
      return;
    }

    partyUiUsersScroll.innerHTML = ''; // Clear the container

    this.users.map(user => { //mapping the add user button to create the 8bit character element with a delete button
      const newUserContainer = document.createElement('div');
      newUserContainer.classList.add('partyui-user-container');
      newUserContainer.innerHTML = `
            <rpg-character seed="${user}"></rpg-character>
            <div id='username'>${user}</div>
            <div>
              <button class="removeBTN">delete - </button>
            </div>
        `;
      partyUiUsersScroll.appendChild(newUserContainer);

      console.log('New user container created for:', user);

      const deleteButton = newUserContainer.querySelector('.removeBTN');
      deleteButton.addEventListener('click', this.deleteUser.bind(this));
    });
  }

  deleteUser(event) { //delete user function
    const username = event.target.parentNode.previousElementSibling.innerText; //gets the username which is seleted

    const index = this.users.indexOf(username); //finds index of targeted user
    if (index !== -1) { //if the user is found in the array, it removes it using the splice method.
      this.users.splice(index, 1);
    }

    event.target.parentNode.parentNode.remove(); //removes the entire parent element of deleted user

    console.log('User deleted:', username); //updates the log with the deleted users
    console.log('Updated users array:', this.users); //shows the current array
  }
  changeTheme() {
    console.log('This literally does nothing but shoot confetti'); 
    alert('This does nothing! congratulations!');
    this.makeItRain();
  }

  invalidAlert() { //an invalid alert function which gives a pop-up letting the user know that requirements aren't met
    return html`
            <div class="modalView" id="modalView">
            <div id="modalView__closeBtn"></div>
            <div class="modalView__content centered">
                <p>Does not meet requirements</p>
            </div>
            </div>
        `
  }


  saveParty() { //function save party
    const namesString = this.users.join(', '); //creates a string with users seperated by commas
    console.log('Party saved. Users:', this.users); //logs the users in the party
    alert(`Party saved. Users: ${namesString}`); //gets an alert in the page which also shows the saved members
    this.makeItRain(); //makes the confetti go off
  }

  

  render() { //this is the hmtl that is rendered for HaxCmsParty
    return html`
    <div class="party-start">
    <button role="button" class="randomBTN" @click="${this.toggleAlert}">START A PARTY</button>
    </div>
    <div class="party-ui">
      <confetti-container id="confetti">
        <div class="party-ui-modal">
          <div class="party-ui-controls">
              <div>
                <h3 class="usrtitle">USERNAME</h3>
                <details class='details'>
                  <summary>rules</summary>
                <p>Should have at least 2 characters. No uppercase or special characters</p>
                </details>
              </div>
              <div class="inputadd">
                <input class="input" type='text' placeholder="Type name here..." pattern="[a-z0-9]*" @keydown=${this.handleKeyPress}>
                <button class="addBTN" @click=${this.addUser}>+</button>
            </div>
            <svg @click="${this.toggleAlert}" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=var(--ddd-theme-default-original87Pink) transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill=var(--ddd-theme-default-original87Pink)></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill=var(--ddd-theme-default-original87Pink)></path> </g></svg>
          </div>

          <div class="party-ui-users-scroll">
            <div class="partyui-user-container">
              <rpg-character seed="drl5505"></rpg-character>
                <div id='usrdemo'>drl5505</div>
              <button class="removeBTN" @click=${this.deleteUser}>delete -</button>
            </div>
          </div>
        <div class='bottom-area'>
          <button class="changeTheme" @click=${this.changeTheme}>!</button>
          <button class="saveBTN" @click=${this.saveParty}>save party!</button>
        </div>
        </div>

      </confetti-container>
    </div>
    `;
  }

  static get properties() {
    return { //gets the properties for the listed variable(s), in this case the user array.
      users: { type: Array }
    };
  }
  makeItRain() { //imported code for the make it rain module
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