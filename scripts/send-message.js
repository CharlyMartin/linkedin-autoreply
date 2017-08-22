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
  const welcomeMessage = `Hello ${first}, happy to meet you 🙂`;
  return welcomeMessage;
};

function fillBoxWith(message) {
  console.log(arguments.callee.name);

  document.querySelector("textarea.msg-compose-form__message-text").value = message;
  document.querySelector("textarea.msg-compose-form__message-text").blur();
  document.querySelector("textarea.msg-compose-form__message-text").focus();
};

function clickSendBtn() {
  console.log(arguments.callee.name);

  document.querySelector("button.msg-compose-form__send-button").click();
};

function run() {
  console.log(arguments.callee.name);

  const name = extractName();
  const message = buildMessageWith(name);
  fillBoxWith(message);
  // Need to wait little time before beling able to click on button.
  // Need to figure out which event fires the disable false on button.
  // window.setTimeout(clickSendBtn, 500);
};

// Running the script
window.setTimeout(run, 2000);


// Send the message
// document.querySelector("button.msg-compose-form__send-button").click()
