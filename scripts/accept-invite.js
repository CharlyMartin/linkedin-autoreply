// Variables
console.log("This is the invitation page")

// Functions
function acceptInvite() {
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
  const inviteList = document.querySelector('ul.mn-invitation-list');
  console.log(inviteList);
  return inviteList;
};

function clickMessagePopup() {
  console.log("clickMessagePopup")
  // select the click thing and click it!
}

// Events
// document.addEventListener('load', test)

window.setTimeout(acceptInvite, 1500)

