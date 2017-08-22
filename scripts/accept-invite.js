console.log("accept-invite.js injected")

// Functions
function clickAcceptBtn() {
  console.log("clickAcceptBtn");
  const list = inviteExists();
  console.log(list);

  if (list) {
    const acceptBtn = list.querySelector('li:first-child button[data-control-name="accept"]');
    console.log(acceptBtn);
    acceptBtn.click();
    window.setTimeout(clickMessageBtn, 1500);
  }
  else {
    window.alert("All invitations caught up");
  };
};

function inviteExists() {
  console.log("inviteExists");
  const inviteList = document.querySelector('ul.mn-invitation-list');
  console.log(inviteList);
  return inviteList;
};

function clickMessageBtn() {
  console.log("clickMessageBtn");
  const messageBtn = document.querySelector('p.artdeco-toast-message > button.action');
  console.log(messageBtn);
  messageBtn.click();
};

// Running page's scripts after 1.5s
window.setTimeout(clickAcceptBtn, 1500);


// document.addEventListener('load', test) => not working
// Variables => not working, trying to select then before content is loaded. Hence null.
