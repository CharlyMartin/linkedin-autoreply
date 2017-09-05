console.log("accept-invite.js injected");

// Functions
function selectList() {
  console.log(arguments.callee.name);

  const inviteList = document.querySelector('ul.mn-invitation-list');
  console.log(inviteList);
  return inviteList;
};

function selectFirstFrom(list) {
  console.log(arguments.callee.name);

  const first = list.querySelector("li.mn-invitation-card:not(.mn-person-card--dismiss-complete)");
  console.log(first);
  return first;
};

function selectBtnFrom(firstChild) {
  console.log(arguments.callee.name);

  const AcceptBtn = firstChild.querySelector('button[data-control-name="accept"]');
  console.log(AcceptBtn);
  return AcceptBtn;
};

function click(acceptBtn) {
  console.log(arguments.callee.name);

  console.log(acceptBtn);
  acceptBtn.click();
};

function clickMessagePopup() {
  console.log(arguments.callee.name);

  const messageBtn = document.querySelector('p.artdeco-toast-message > button.action');
  messageBtn.click();
};

function run() {
  const list = selectList();
  if (list === null) return;

  const firstInvite = selectFirstFrom(list);
  const acceptBtn = selectBtnFrom(firstInvite);
  click(acceptBtn);
  window.setTimeout(clickMessagePopup, 1500);
};


// Running the script
window.setTimeout(run, 100);


// document.addEventListener('load', test) => not working
// Variables => not working, trying to select then before content is loaded. Hence null.
