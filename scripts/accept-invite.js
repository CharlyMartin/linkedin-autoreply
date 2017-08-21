// Variables
console.log("This is the invitation page")

// Functions
function acceptInvite() {
  console.log("Entering acceptInvite function");
  const list = inviteExists();
  console.log(list);

  if (list) {
    const acceptBtn = list.querySelector('li:first-child button[data-control-name="accept"]');
    console.log(acceptBtn);
    acceptBtn.click();
    window.setTimeout(clickMessagePopup, 1000);
  }
  else {
    window.alert("All invitations caught up");
  };
};

function inviteExists() {
  console.log("Entering inviteExists function");
  const inviteList = document.querySelector('ul.mn-invitation-list');
  console.log(inviteList);
  return inviteList;
};

function clickMessagePopup() {
  console.log("Entering clickMessagePopup function");
  const messageBtn = document.querySelector('#ember1610 > div > div > p > button');
  console.log(messageBtn);

}

// Events
// document.addEventListener('load', test)

window.setTimeout(acceptInvite, 1500)

