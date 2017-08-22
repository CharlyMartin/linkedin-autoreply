console.log("accept-invite.js injected");

// Functions
function listExists() {
  console.log(arguments.callee.name);

  const inviteList = document.querySelector('ul.mn-invitation-list');
  console.log(inviteList);
  return inviteList;
};

function selectFirstFrom(list) {
  console.log(arguments.callee.name);

  const first = list.querySelector('li:first-child button[data-control-name="accept"]');
  console.log(first);
  return first;
}

function accept(firstInvite) {
  console.log(arguments.callee.name);

  const acceptBtn = firstInvite
  console.log(acceptBtn);
  acceptBtn.click();
};


function clickMessageBtn() {
  console.log(arguments.callee.name);

  const messageBtn = document.querySelector('p.artdeco-toast-message > button.action');
  messageBtn.click();
};

function run() {
  const list = listExists() if listExists()
}


// Running the script
window.setTimeout(run, 1500);


// document.addEventListener('load', test) => not working
// Variables => not working, trying to select then before content is loaded. Hence null.
