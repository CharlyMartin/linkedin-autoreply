console.log("send-message.js injected");

// Functions
function extractName() {
  console.log(arguments.callee.name);

  const fullName = document.querySelector("span.msg-connections-lookup__recipient-name").innerText.trim();
  return {
    "first": fullName.split(" ")[0],
    "last": fullName.split(" ")[this.length - 1],
  }
};

function buildMessageWith(name) {
  console.log(arguments.callee.name);

  const first = name.first;
  const welcomeMessage =
    `Hi ${first},\n\nThanks for the invitation, I'm glad to meet you!\n\nIs there anything I can do for you? If so, I’m happy to help 🙂\n\nCheers,\nCharly\n\nhttps://charlymartin.me`;

  return welcomeMessage;
};

function fillBoxWith(message) {
  console.log(arguments.callee.name);

  // const pre = document.querySelector("pre.msg-compose-form__textarea-clone");
  const textArea = document.querySelector("textarea.msg-compose-form__message-text");

  // pre.innerText = message;
  textArea.value = message;
};

function selectBtn() {
  console.log(arguments.callee.name);

  const sendBtn = document.querySelector("button.msg-compose-form__send-button");
  console.log(sendBtn);
  return sendBtn;
};

// function randomClick() {
//   const container = document.querySelector("#messaging");
//   container.click();
// };

function removeDisabledFrom(sendBtn) {
  console.log(arguments.callee.name);

  sendBtn.removeAttribute("disabled");
};

function clickOn(sendBtn) {
  console.log(arguments.callee.name);

  console.log(sendBtn);
  sendBtn.click();
};


function run() {
  console.log(arguments.callee.name);

  const name = extractName();
  const message = buildMessageWith(name);
  fillBoxWith(message);

  // const sendBtn = selectBtn();
  // removeDisabledFrom(sendBtn);
  // clickOn(sendBtn);
};

// Running the script
window.setTimeout(run, 100);

