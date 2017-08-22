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
  const welcomeMessage = `Hello ${first}, happy to meet you!`;
  return welcomeMessage;
};

function fillBoxWith(message) {
  console.log(arguments.callee.name);

};

function clickSendBtn() {
  console.log(arguments.callee.name);

};

function init() {
  console.log(arguments.callee.name);

  const name = extractName();
  const message = buildMessageWith(name);
  // fillBoxWith(message);
  // clickSendBtn;
};

// Running the script

// Fill the text area with given text
// document.querySelector("textarea.msg-compose-form__message-text").value = "Text to paste"


// Send the message
// document.querySelector("button.msg-compose-form__send-button").click()
